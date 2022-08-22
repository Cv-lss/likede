<template>
  <div>
    <div data-v-685a2475="" class="task-status">
      <img
        v-if="checkDetails.taskStatusTypeEntity.statusName === '取消'"
        data-v-685a2475=""
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAABqUlEQVRIS72WvUrDUBTH/6cGMjq4qO0DOFgQSocbcBFUnDWvURQER+0oCEpfI+5ii12E3KEEBB18gEZdHNwMxBy5tQ39sr1JaDLmnv/93Xu+7iHM+SzL2gRwxMzbADYArPQlnwBeiegRwK3rui+ztqL/Fi3L2mLmSwB78w7TX28S0Znruk/T7CdAtm0vdbvdK2auEVFBE9IzY+aIiBqlUunUcZyfYe0IqFKpLJum6TDzbhLAuC0RtYIgsD3P+xqsxSB1E9/377JC4o2JWsVi8WBwsxgkhLgGcJzlJlO0N1LKE/W/B1KBj6LI04iJE4ZhTWkMw2gAsGcdTMWsUChUVIL0QEKIe53sCsNwrdPpfChNtVpdNQzjXcMDTSnlPqk6YeZnDQFSgkBEZQW6YOZzHRCARK4bSow6CSEeAOxogtKatRXIB7Cus4OUcqTuhBCsowPwpkDfAEwdQQZQkCsoN9dpJ0MG17UTpXdaEBHVExVsBlA5UQtKCfprQQmbqk4VxDYTTbXfWBf/TChQbg+fguXylA8cm8twMhzphY9b42klhCgT0WHWAfIXFPYBcBvJ9uQAAAAASUVORK5CYII="
        class="icon"
      >
      <img
        v-else
        data-v-685a2475=""
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAADQklEQVRIS72WWWyMURTHf3dGSOqB2pWSCGKZllRLPGjsW1GDIUhjQkwrliBiXhpUmkhFEEu0pUIaRAe1xFZUwoOgRKqWILZqa6vlQYPoXLn9Zjrzzfd12hLO4z3/c/73LPecK2hEZFqKDa91FoIRSNkPaO8zqUaIx0iuY6k9JrLzy8K5Eg0p5WLnYITMAsY3dhmfvggp3GLvgXtmeAORdDisRLbeAnIFYGkiiR/mBbGDz9/WCI+nNthWRyRdjjbICA+Ccc0k0MMllxA1DpHr+epX1BPVRdI24vxfk/g9K7IvNZP8kQWIXM5tIFfWXy1hGEy1Q7v2UFUBp05AWan+5rZYSJ4BXbvBp2o4Uwi3bwZhxHaRe2CVOqgj8hX+Tn1Nhg6HRakBg/JXUHIbLp4D6dXOhQUmTIb4BIjuGcDm5cCtG4GaSTFENYhG5FpwUdddmZuhYyf48B4KDkPpPejTF/oPhHYdNCefPsKjB/D0CcQOhtnzAjbpa4MjLxK5BycImbbIhvfXfV1OdubC82eQsxu6RsHcFIjuYd4f5a/hSD5UVULqUujVG5a79FhLixghXc4NINfrNOp2qiZxQyBlIVit4Zuwthby98PdO5Bsh4IjIXiRIWSq8wpSjjZ4Uqla5daTVH+EC2dB1VDpg0WRbcvSUhkqQhSriCpARul0QkD6RugerTd5+QI2ZcB8JySONDp8Uw6Z60DKUF2lkK4F34FWOo3Kszvd6KgxImWRlanVVy8/zIkmJoHd8WdEhR4tvUYik9TNmQ+jTaaQPyLViZGRmivbIBgTNHeLL8HRQyapM2uGaXZISjZGVPkG9mXrz+MSYEoQ9uwpOF2ox/iawdjecfGQuix8SzekzdkFd0tM2tvswbZsBVlbIaJ188hqvoF7Nfz8obezeGPMR5CCqbyrh9scUePqSlGohTaC1KlhqPqhi5dA/LCmUZXchL17QrFegodqHVnomlCHFgtMnwljJzY8htREuHwBTh4Hr2+y19OFrIk6onCLr3MXSBwFA2zaflKi9s/DMrh2Fd69NUbd0OLTovoPq9x/pf/yOQmO/59/t0KTLV3OGGCm9oGkH0hfkUQ1At8H0npMZOeF/UD+BpwnSWqJuP2NAAAAAElFTkSuQmCC"
        class="icon"
      >

      <span
        v-if="checkDetails.taskStatusTypeEntity.statusName === '取消'"
        data-v-685a2475=""
        class="status"
      >取消</span>
      <span v-else data-v-685a2475="" class="status">待办</span>

      <img
        v-if="checkDetails.taskStatusTypeEntity.statusName === '取消'"
        data-v-685a2475=""
        src="@/assets/images/pic_3.e8208e34.png"
        class="pic"
      >
      <img v-else data-v-685a2475="" src="@/assets/images/pic_1.834b274c.png" class="pic">
    </div>

    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          设备编号：{{ checkDetails.innerCode }}
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          创建日期：{{ checkDetails.createTime }}
        </div>
      </el-col>
    </el-row>

    <!-- 如果是取消 -->
    <el-row
      v-if="checkDetails.taskStatusTypeEntity.statusName === '取消'"
      type="flex"
      class="row-bg"
      justify="space-around"
    >
      <el-col :span="8">
        <div class="grid-content bg-purple">
          取消日期：{{ checkDetails.updateTime }}
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          运营人员：{{ checkDetails.userName }}
        </div>
      </el-col>
    </el-row>

    <!-- 如果是待办 -->
    <el-row v-else type="flex" class="row-bg" justify="space-around">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          运营人员：{{ checkDetails.userName }}
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          工单类型：{{ checkDetails.taskType.typeName }}
        </div>
      </el-col>
    </el-row>

    <!-- 如果是取消 -->
    <el-row
      v-if="checkDetails.taskStatusTypeEntity.statusName === '取消'"
      type="flex"
      class="row-bg"
      justify="space-around"
    >
      <el-col :span="8">
        <div class="grid-content bg-purple">
          工单类型：{{ checkDetails.taskType.typeName }}
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          补货数量： <el-button type="text" @click="replenishmentDetailss">补货详情</el-button>
        </div>
      </el-col>
    </el-row>

    <!-- 如果是待办 -->
    <el-row v-else type="flex" class="row-bg" justify="space-around">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          补货数量： <el-button type="text" @click="replenishmentDetailss">补货详情</el-button>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          工单方式：{{ checkDetails.createType }}
        </div>
      </el-col>
    </el-row>

    <!-- 如果是取消 -->
    <el-row
      v-if="checkDetails.taskStatusTypeEntity.statusName === '取消'"
      type="flex"
      class="row-bg"
      justify="space-around"
    >
      <el-col :span="8">
        <div class="grid-content bg-purple">
          工单方式：{{ checkDetails.createType }}
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          取消原因：{{ checkDetails.desc }}
        </div>
      </el-col>
    </el-row>

    <!-- 如果是待办 -->
    <el-row v-else type="flex" class="row-bg" justify="start">
      <el-col :span="12">
        <div class="grid-content bg-purple" style="padding-left: 120px">
          备注：{{ checkDetails.desc }}
        </div>
      </el-col>
    </el-row>

    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="6">
        <div class="grid-content bg-purple" style="margin-top: 8px; margin-left: 25px">
          <el-button v-if="checkDetails.taskStatusTypeEntity.statusName !== '取消'" type="info" @click="open">取消工单</el-button>
          <el-button v-else type="info" @click="rebuildOrder">重新创建</el-button>
        </div>
      </el-col>
    </el-row>

    <!-- //补货详情弹窗 -->

    <!-- //工单详情弹窗 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="45%"
      :modal="false"
      center
    >

      <template>
        <el-table
          :data="replenishmentDetailsList"
          style="width: 100%"
          height="380"
          highlight-current-row
          :header-cell-style="{ background: ' rgb(243, 246, 251)',width:'500px' }"
        >
          <el-table-column
            prop="channelCode"
            label="货道编号"
            align="center"
          />
          <el-table-column
            prop="skuName"
            label="商品"
            align="center"
          />
          <el-table-column
            prop="expectCapacity"
            label="补货数量"
            align="center"
          />
        </el-table>
      </template>
    </el-dialog>

    <!-- //重新创建 -->
    <el-dialog
      title="新建工单"
      :visible.sync="centerDialogVisible"
      width="45%"
      :modal="false"
    >
      <new-construction :get-work-order-info="getWorkOrderInfo" :replenishment-details-list="replenishmentDetailsList" :get-personnel-list="getPersonnelList" />
    </el-dialog>
  </div>
</template>

<script>
import { replenishmentDetails, getWorkOrderInfo, getPersonnelList, cancelWorkOrder } from '@/api/workOrder'
import NewConstruction from './NewConstruction.vue'
export default {
  components: { NewConstruction },
  props: {
    checkDetails: {
      type: Object,
      default: () => { }
    }
  },
  data() {
    return {
      centerDialogVisible: false, // 重建工单的弹出层
      dialogVisible: false, // 补货详情的弹出层
      replenishmentDetailsList: [], // 补货详情返回的数据
      getWorkOrderInfo: {}, // 获取工单详情
      getPersonnelList: [] // 新增工单的接口
    }
  },
  mounted() {
    this.$bus.$on('guanbi', () => {
      this.centerDialogVisible = false
      this.$parent.$parent.centerDialogVisible2 = false
    })
  },
  methods: {
    // 补货详情的方法
    async replenishmentDetailss() {
      this.dialogVisible = true
      try {
        const taskId = this.checkDetails.taskId
        const res = await replenishmentDetails(taskId)
        console.log(res)
        this.replenishmentDetailsList = res.data
      } catch (error) {
        console.log(error)
      }
    },

    // 重建工单方法
    async rebuildOrder() {
      // console.log(111)
      this.centerDialogVisible = true
      const { taskId, innerCode } = this.checkDetails

      // 获取工单详情
      const res = await getWorkOrderInfo(taskId)
      // console.log(res)
      this.getWorkOrderInfo = res.data

      const ress = await replenishmentDetails(taskId)
      // console.log(ress)
      this.replenishmentDetailsList = ress.data

      // 新增工单的接口
      const result = await getPersonnelList(innerCode)
      // console.log('@', result)
      this.getPersonnelList = result.data
    },

    // 取消工单
    open() {
      this.$confirm('取消工单后不能恢复，确认取消？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true,
        showClose: false
      }).then(async() => {
        // console.log(this.checkDetails.taskId)
        // 删除工单
        await cancelWorkOrder(this.checkDetails.taskId, { desc: '' })
        // console.log('7899999', res)
        // 删除成功关闭弹窗
        this.$parent.$parent.centerDialogVisible2 = false
        // 再次调用接口 渲染页面
        this.$bus.$emit('Fn')
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        console.log(222)
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">

.task-status[data-v-685a2475] {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 54px;
    margin-bottom: 25px;
    background-color: hsla(0,0%,92.5%,.39);
}

.task-status .icon[data-v-685a2475] {
    margin-left: 22px;
}

img {
    border-style: none;
}

.task-status .status[data-v-685a2475] {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin-left: 16px;
    color: rgba(0, 0, 0, 0.85);
}

.task-status .pic[data-v-685a2475] {
    margin-right: 76px;
    margin-bottom: 7px;
}

img {
    border-style: none;
}

.el-row {
    margin-bottom: 10px;

    &:last-child {
        margin-bottom: 0;
    }
}

.el-col {
    border-radius: 4px;
}

.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    background: #d3dce6;
}

.bg-purple-light {
    background: #e5e9f2;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.row-bg {
    padding: 5px 0;
    // background-color: #f9fafc;
}

.bg-purple[data-v-4aa37058] {
    background-color: #fff !important;
}
</style>
