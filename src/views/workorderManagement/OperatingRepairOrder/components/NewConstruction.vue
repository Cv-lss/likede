<template>
  <div>
    <el-form ref="ruleForm" label-width="1.5rem" class="demo-ruleForm" :model="formData" :rules="rules">

      <el-form-item label="设备编号：" prop="SerialNumber" style="width:95%">
        <el-input
          v-model="formData.SerialNumber"
          maxlength="15"
          show-word-limit
          placeholder="请输入"
          @input="operatorList"
        />
      </el-form-item>

      <el-form-item label="工单类型" prop="replenishments">
        <el-select v-model="formData.replenishments" placeholder="请选择" style="width:94%" @change="aisleInfo">
          <el-option label="补货工单" value="1" />
        </el-select>
      </el-form-item>

      <el-form-item label="补货数量" prop="delivery">
        <el-button type="text" icon="el-icon-document" @click="open">补货清单</el-button>
      </el-form-item>

      <el-form-item label="运营人员" prop="operating">
        <el-select v-model="formData.operating" placeholder="请选择" style="width:94%">
          <el-option v-for="item,index in operatingList" :key="index" :label="item.userName" :value="item.userName" />

        </el-select>
      </el-form-item>

      <el-form-item label="备注" prop="note" style="width:95%;">
        <el-input v-model="formData.note" type="textarea" maxlength="40" show-word-limit style="height:30%;" placeholder="请输入备注 (不超过40字)" />
      </el-form-item>

      <el-form-item class="btn">
        <el-button class="cancelBtn" type="info">取消</el-button>
        <el-button type="warning" @click="createOrder">确认</el-button>
      </el-form-item>
    </el-form>

    <el-dialog title="补货详情" :visible.sync="dialogTableVisible" :modal="false" width="45%">
      <ReplenishmentList :list="aisleList" @ShutDownDialog="ShutDownDialog" />
    </el-dialog>
  </div>
</template>

<script>
import ReplenishmentList from '@/views/workorderManagement/OperatingRepairOrder/components/ReplenishmentList.vue'
import { getPersonnelList, getAisleList, createOrder, replenishmentDetails } from '@/api/workOrder'
export default {
  components: { ReplenishmentList },
  props: {

    checkDetails: {
      type: Object,
      default: () => { }
    },

    // 获取工单详情
    getWorkOrderInfo: {
      type: Object,
      default: () => {}
    },
    // 补货详情返回的数据
    replenishmentDetailsList: {
      type: Array,
      default: () => []
    },
    // 新增工单的接口
    getPersonnelList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      details: [],
      assignorId: null,
      formData: {
        SerialNumber: '', // 输入的编号
        replenishments: '', // 选择的类型
        operating: '', // 运营人员
        note: '' // 备注
      },
      rules: {
        SerialNumber: [{ required: true, message: '必填项', trigger: 'blur' }],
        replenishments: [{ required: true, message: '必填项', trigger: 'blur' }],
        operating: [{ required: true, message: '必填项', trigger: 'blur' }],
        note: [{ required: true, message: '必填项', trigger: 'blur' }]
      },
      dialogTableVisible: false, // 弹框显示隐藏
      aisleList: [], // 货道详情
      operatingList: [] // 运营人员列表
    }
  },
  watch: {
    getWorkOrderInfo: {
      handler(val) {
        console.log('@@', val)
        this.assignorId = val.assignorId
        this.formData.SerialNumber = val.innerCode
        this.formData.replenishments = val.taskType.typeName
        this.formData.operating = val.userName
        this.formData.note = val.desc
      }
    },
    replenishmentDetailsList: {
      handler(val) {
        console.log('@@@', val)
        this.details = val
      }
    },
    getPersonnelList: {
      handler(val) {
        console.log('@@@@', val)
      }
    }
  },
  methods: {

    open() {
      // 点击弹框出现
      this.dialogTableVisible = true

      // 点击补货数量在调用下接口
      this.aisleInfo()
    },
    // 设备编号
    async operatorList() {
      //   console.log(111)
      const res = await getPersonnelList(this.formData.SerialNumber)
      console.log(res)
      if (res.status === 200) {
        this.operatingList = res.data
      }
    },
    // 货道详情
    async aisleInfo() {
      try {
        const res = await getAisleList(this.formData.SerialNumber)
        console.log(res)
        res.data.forEach(ele => {
          if (ele.currentCapacity >= 10) {
            ele.maxCapacity = 0
          }
        })
        this.aisleList = res.data
      } catch (error) {
        console.log(error)
      }
    },

    // 创建工单的方法
    async createOrder() {
      await replenishmentDetails()
      try {
        const res = await createOrder({ assignorId: this.assignorId, createType: 1, innerCode: this.formData.SerialNumber, desc: this.formData.note, productType: 2, userId: 1, details: this.details })
        console.log('--------', res)
        this.$bus.$emit('guanbi')
        this.$bus.$emit('Fn')
      } catch (error) {
        console.log('//////////', error)
        this.$message.error('创建失败')
      }
    },

    // 子组件关闭弹窗方法
    ShutDownDialog() {
      // console.log(val)
      this.dialogTableVisible = false
    }

  }
}
</script>

<style >
.btn {
  margin-left: 185px;
}

.cancelBtn {
  margin-right: 25px;
}
</style>
