<!--
 * @Author: wjf
 * @Date: 2022-09-01 09:58:03
 * @LastEditTime: 2022-09-05 18:13:54
 * @LastEditors: wjf
 * @Description:
-->
<template>
  <div class="tableMain">
    <!-- <el-table
    :data="tableData"
    border
    show-summary> -->
    <!-- <el-table-column
      prop="id"
      label="ID"
      fixed='left'
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名">
    </el-table-column>
    <el-table-column
      prop="amount1"
      sortable
      label="数值 1">
    </el-table-column>
    <el-table-column
      prop="amount2"
      sortable
      label="数值 2">
    </el-table-column>
    <el-table-column
      prop="amount3"
      sortable
      label="数值 3">
    </el-table-column>
  </el-table> -->

  <el-table
    :data="tableData"
    border
    height="300"
    :summary-method="getSummaries"
    show-summary
    style="width: 100%; ">
    <el-table-column
      prop="id"
      label="ID"
      fixed='left'
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名">
    </el-table-column>
    <el-table-column
      prop="amount1"
      label="数值 1（元）">
    </el-table-column>
    <el-table-column
      prop="amount2"
      label="数值 2（元）">
    </el-table-column>
    <el-table-column
      prop="amount3"
      label="数值 3（元）">
    </el-table-column>
  </el-table>
 </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        id: '12987122',
        name: '王小虎',
        amount1: '234',
        amount2: '3.2',
        amount3: 10
      }, {
        id: '12987123',
        name: '王小虎',
        amount1: '165',
        amount2: '4.43',
        amount3: 12
      }, {
        id: '12987124',
        name: '王小虎',
        amount1: '326666666666664',
        amount2: '1.9',
        amount3: 9
      }, {
        id: '12987125',
        name: '王小虎',
        amount1: '621',
        amount2: '2.2',
        amount3: 17
      }, {
        id: '12987126',
        name: '王小虎',
        amount1: '539',
        amount2: '4.1',
        amount3: 15
      }]
    }
  },
  methods: {
    getSummaries (param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '总价'
          return
        }
        const values = data.map(item => Number(item[column.property]))
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
          sums[index] += ''
        } else {
          sums[index] = '-'
        }
      })

      return sums
    }
  }
}
</script>
<style lang="scss" scoped>
.tableMain{
  width: 800px;
  height: 200px;
  margin: 0 auto;
}
  /deep/ .el-table {
  display: flex;
  flex-direction: column;
}
/deep/ .el-table__header-wrapper {
  order: 1;
}
/deep/ .el-table__body-wrapper {
  order: 1;
}
/deep/ .el-table__fixed-body-wrapper{
// top:89px !important;
 top: 93px !important;
}
/deep/ .el-table__fixed-header-wrapper{
    position: absolute;
    left: 0;
    top: 45px;
    z-index: 3;
}
/deep/ .el-table__fixed-footer-wrapper{
// z-index: 0;
  top: -4px;
  z-index: 3;
//  top: 50px;
}
/deep/ .el-table__footer-wrapper {
    margin-top: -4px;
}
</style>
