<template>
  <div style="margin-left:20px">
    <el-card style="margin:15px 0;">
      <el-form :inline="true" class="demo-form-inline" :model="formData">
        <el-form-item label="工单编号">
          <el-input v-model="formData.SerialNumber" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="工单状态">
          <el-select v-model="formData.taskStatus" placeholder="请选择">
            <el-option label="待办" value="1" />
            <el-option label="进行" value="2" />
            <el-option label="取消" value="3" />
            <el-option label="完成" value="4" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card>
      <el-button icon="el-icon-circle-plus-outline" type="warning" style="margin-bottom:10px" @click="centerDialogVisible1 = true">新建</el-button>

      <el-table empty-text="暂无数据" :data="searchList.currentPageRecords" style="width: 100%" highlight-current-row :header-cell-style="{background:' rgb(243, 246, 251)'}">
        <el-table-column type="index" label="序号" align="center" />
        <el-table-column prop="taskCode" label="工单编号" align="center" />
        <el-table-column prop="innerCode" label="设备编号" align="center" />
        <el-table-column prop="taskType.typeName" label="工单类型" align="center" />
        <el-table-column prop="createType" label="工单方式" align="center" />
        <!-- taskStatusTypeEntity.statusName -->
        <el-table-column property="taskStatus" label="工单状态" align="center" />
        <el-table-column prop="userName" label="运营人员" align="center" />
        <el-table-column prop="createTime" label="创建日期" align="center" />
        <!-- <el-table-column prop="address" label="操作" align="center" /> -->
        <el-table-column
          label="操作"
          align="center"
        >
          <template slot-scope="{row}">
            <el-button type="text" size="small" @click="viewDetails(row)">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页器 -->
      <paging-device v-show="searchList.totalPage >= 11" :page-index="pageIndex" :page-size="pageSize" :total-count="totalCount" :total-page="totalPage" @chengePageEvent="chengePageEvent" />
    </el-card>

  </div>

</template>

<script>

import { getOrderSearch } from '@/api/workOrder'
export default {
  data() {
    return {
      centerDialogVisible1: false, // 新建工单的弹出层
      centerDialogVisible2: false, // 工单详情的弹出层
      formData: {
        SerialNumber: '', // 搜索的工单编号
        taskStatus: '' // 搜集管理状态
      },
      searchList: {},
      pageIndex: 1, // 当前页码
      pageSize: 10, // 每页数量
      totalCount: 10, // 总数量
      totalPage: 10, // 总页数
      checkDetails: {}
    }
  },
  computed: {

  },
  mounted() {
    this.getOrderSearch()
    // console.log(this.status)
    this.$bus.$on('Fn', () => {
      // console.log('+++++++++++++', val)
      this.getOrderSearch()
    })
  },
  methods: {
    // 搜索的数据
    async onSubmit() {
      // console.log('submit!')

      const res = await getOrderSearch({ pageIndex: this.pageIndex, pageSize: 10, isRepair: false, taskCode: this.formData.SerialNumber, status: this.formData.taskStatus })
      console.log(res)

      // 调用判断方法
      this.judgeInfo(res.data.currentPageRecords)
      // 存在data里
      this.searchList = res.data
    },

    // 获取工单管理的数据
    async getOrderSearch() {
      try {
        const res = await getOrderSearch({ pageIndex: this.pageIndex, pageSize: 10, isRepair: false }) // taskCode: this.formData.SerialNumber, taskStatus: this.formData.taskStatus
        console.log(res)
        this.judgeInfo(res.data.currentPageRecords)
        // 分页器的数据
        this.pageIndex = Number(res.data.pageIndex)
        this.pageSize = Number(res.data.pageSize)
        this.totalCount = Number(res.data.totalCount)
        this.totalPage = Number(res.data.totalPage)

        // 把返回的数据保存在data
        this.searchList = res.data
      } catch (error) {
        console.log(error)
      }
    },

    // 判断返回来的数据
    judgeInfo(val) {
    // 后端返回的是0和1
      val.forEach(ele => {
      // console.log(ele)
        if (ele.createType === 0) {
          ele.createType = '自动'
        } else {
          ele.createType = '手动'
        }

        // 工单状态
        if (ele.taskStatus === 1) {
          ele.taskStatus = '待办'
        } else if (ele.taskStatus === 2) {
          ele.taskStatus = '进行'
        } else if (ele.taskStatus === 3) {
          ele.taskStatus = '取消'
        } else {
          ele.taskStatus = '完成'
        }
        // 去除时间的T和-
        ele.createTime = ele.createTime.toLocaleString().replace(/T/g, ' ').replace(/-/g, '.')
      })
    },

    // 分页器的下一页和上一页
    chengePageEvent(val) {
    // console.log(val)
      if (val === 1) {
        this.pageIndex = this.pageIndex + 1
        this.getOrderSearch()
      } else {
        this.pageIndex = this.pageIndex - 1
        this.getOrderSearch()
      }
    },

    // 点击查看详情
    viewDetails(row) {
      console.log(row)
      this.centerDialogVisible2 = true
      row.updateTime = row.updateTime.toLocaleString().replace(/T/g, ' ').replace(/-/g, '.')
      this.checkDetails = row
    }
  }
}

</script>

<style>
.el-dialog{
  border-radius: 10px !important;
}
</style>
