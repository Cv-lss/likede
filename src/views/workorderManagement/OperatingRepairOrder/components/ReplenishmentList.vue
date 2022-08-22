<template>
  <div>
    <el-table
      :data="list"
      height="360"
      style="width: 100%;"
      :border="false"
      class="customer-no-border-table"
      highlight-current-row
      :header-cell-style="{ background: ' rgb(243, 246, 251)',width:'500px', height: '50px' }"
    >
      <el-table-column prop="channelCode" label="货道编号" width="110" align="center" />

      <el-table-column prop="" label="商品名称" width="110" align="center">
        <template slot-scope="{row}">
          {{ row.sku===null?'-' : row.sku.brandName }}
        </template>
      </el-table-column>

      <el-table-column prop="currentCapacity" label="当前数量" width="110" align="center">
        <template slot-scope="{row}">
          {{ row.sku===null?'-' : row.currentCapacity }}
        </template>
      </el-table-column>

      <el-table-column prop="maxCapacity" label="还可添加" width="110" align="center">
        <template slot-scope="{row}">
          {{ row.sku === null?'-' : row.maxCapacity }}
        </template>
      </el-table-column>

      <el-table-column prop="" label="补满数量" width="200">
        <template slot-scope="{row}">
          <el-input-number v-if="row.sku!=null" v-model="row.maxCapacity" controls-position="right" :min="0" :max="10" @change="handleChange" />
          <span v-else>货道暂无商品</span>
        </template>
      </el-table-column>
    </el-table>

    <!-- //按钮 -->
    <div class="tableBtn">
      <el-button class="cancelBtn" type="info" @click="$parent.$parent.dialogTableVisible=false">取消</el-button>
      <el-button type="warning" @click="ShutDownDialog(1)">确认</el-button>
    </div>

  </div>
</template>

<script>

export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      min: 0,
      max: 10

    }
  },
  methods: {
    handleChange(value) {
      console.log(value)
    },

    ShutDownDialog() {
      this.$emit('ShutDownDialog')
    }
  }
}
</script>

<style >
.tableBtn {
    margin-left: 220px;
    margin-top: 35px;
}

/*去掉表格单元格边框*/
.customer-no-border-table th {
    border: none;
}

.customer-no-border-table td,
.customer-no-border-table th.is-leaf {
    border: none;

}

/*表格最外边框*/
.customer-no-border-table .el-table--border,
.el-table--group {
    border: none;
}

/*头部边框*/
.customer-no-border-table thead tr th.is-leaf {
    border: 0px solid #EBEEF5;
    border-right: none;
}

.customer-no-border-table thead tr th:nth-last-of-type(2) {
    border-right: 0px solid #EBEEF5;
}

/*表格最外层边框-底部边框*/
.customer-no-border-table .el-table--border::after,
.customer-no-border-table .el-table--group::after {
    width: 0;
}

.customer-no-border-table::before {
    width: 0;
}

.customer-no-border-table .el-table__fixed-right::before,
.el-table__fixed::before {
    width: 0;
}

.customer-no-border-table .el-table__header tr th {
    background: #fff;
    color: #333333;
    padding: 3px;
    font-weight: 550;
    height: 36px;
    border: 0px;
    font-size: 15px;
}

/* //滚动条的宽度 */
::-webkit-scrollbar {
  width: 7px;

}
/* //滚动条的滑块 */
::-webkit-scrollbar-thumb {
  background-color: #a1a3a9;
  height: 50px;
  border-radius: 3px;
}

</style>
