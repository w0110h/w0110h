<!-- eslint-disable no-debugger -->
<!--
 * @Author: wjf
 * @Date: 2022-08-26 09:25:08
 * @LastEditTime: 2022-09-09 09:28:05
 * @LastEditors: wjf
 * @Description: 表格合并
-->
<template>
  <div>
    <el-table ref="table"
              :data="dataList"
              :show-header= false
              style="width: 100%"
              :span-method="arraySpanMethod">
      <el-table-column prop="oldGoodsName" label='公司名称'>
        <template slot-scope="scope">
          <div  v-if="!scope.row.more3">
            <div class="tableImg" >
              <img :src="scope.row.goodsUrl" alt="" Width="40px" height="40px">
            </div>
          </div>
           <div v-else class="goBack" @click="moreShow">展示剩余{{scope.row.more3}}件<i class="el-icon-arrow-down"></i></div>
        </template>
      </el-table-column>
      <el-table-column prop="oldGoodsName" label='公司名称'>
        <template slot-scope="scope">
        <div class="tablemain" v-if="!scope.row.more3">
            <div class="main-ellipsis">
              {{ scope.row.oldGoodsName}}
            </div>
            <div>
              <span>备件编码:</span>
              {{scope.row.goodsCode}}
            </div>
            <div>
              <span>型号:</span>
              {{scope.row.goodsCode}}
            </div>
        </div>
      </template>
      </el-table-column>
      <el-table-column prop="oldGoodsName" label='公司名称'>
        <template slot-scope="scope">
          {{ scope.row.discount}}
        </template>
      </el-table-column>
      <el-table-column prop="oldGoodsName" label=''>
        <template slot-scope="scope">
          {{ scope.row.discount}}
        </template>
      </el-table-column>
      <el-table-column prop="oldGoodsName" label='公司名称'>
        <template slot-scope="scope">
          {{ scope.row.discount}}
        </template>
      </el-table-column>
      <el-table-column prop="oldGoodsName" label='公司名称'>
        <template slot-scope="scope">
          {{ scope.row.discount }}
        </template>
      </el-table-column>
      <el-table-column prop="oldGoodsName" label='公司名称'>
        <template slot-scope="scope">
          {{ scope.row.discount}}
        </template>
      </el-table-column>
      <el-table-column prop="oldGoodsName" label='公司名称'>
        <template slot-scope="scope">
          {{ scope.row.discount}}
        </template>
      </el-table-column>
      <el-table-column prop="oldGoodsName" label='公司名称'>
        <template slot-scope="scope">
          {{ scope.row.discount}}
        </template>
      </el-table-column>
      <el-table-column prop="oldGoodsName" label='公司名称'>
        <template slot-scope="scope">
          {{ scope.row.discount }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'JavaScriptPretice-tableBox',

  data () {
    return {
    }
  },
  props: {
    tableList: {
      type: Array,
      default: () => {
        return []
      }
    },
    showHeader: {
      // 是否展示表头
      type: Boolean
    },
    orderJson: {
      type: Object
    }
  },
  computed: {
    dataList: {
      get () {
        if (this.tableList.length > 3) {
          const arr = this.tableList.slice(0, 3)
          arr.push({ more3: this.tableList.length - 3 })
          return arr
        } else {
          return this.tableList
        }
      },
      set (val) {
        return val
      }
    }
  },

  mounted () {
  },

  methods: {
    arraySpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 7 || columnIndex === 8 || columnIndex === 9) {
        return {
          rowspan: 5,
          colspan: 1
        }
      }
    },
    moreShow () {
      this.tableList.forEach((item, index) => {
        if (index > 2) {
          this.dataList.push(item)
        } else if (this.dataList.length > this.tableList.length) {
          this.dataList.splice(4, 2)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.tableImg{
  float: left;
  text-align: center;
}
.tablemain{
  .main-ellipsis{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

  }
}
</style>
