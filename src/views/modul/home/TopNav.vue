<!--
 * @Author: wjf
 * @Date: 2022-08-12 13:25:06
 * @LastEditTime: 2022-08-25 09:48:38
 * @LastEditors: wjf
 * @Description:
-->
<template>
  <div>
    <p @click="goBack"
       class="goBack">
      <i class="el-icon-back"></i>
      返回首页
    </p>
    <div class="TopNav">
      这是个购物车
      <el-table :data="dataList"
                style="width: 100%">
        <el-table-column prop="name"
                         label="物品"
                         width="180">
        </el-table-column>
        <el-table-column prop="num"
                         label="数量"
                         width="180">
                         <template slot-scope="scope">
                          <!-- <button key=""> </button> -->
                          <el-button @click="reduce(scope.row)" size="mini" :disabled='scope.row.num <= 0'>-</el-button>
                                   {{scope.row.num}}
                          <el-button @click="add(scope.row)" size="mini">+</el-button>
                         </template>
        </el-table-column>
        <el-table-column prop="price"
                         label="价格">
        </el-table-column>
      </el-table>
    </div>
    <div>总计{{priceSum}}元</div>
     <div class="tabs-wrap" style="width:50%">
      <el-tabs
        class="tab-select"
        v-model="activeName"
        @tab-click="changeTab"
      >
        <el-tab-pane
          v-for="(item, key) in tabSelectOptions"
          :key="key"
          :label="item.label || item.value"
          :name="item.code"
        >
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="block">
    <span class="demonstration">完整功能</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
    <el-form ref="form" :model="form" label-width="80px">
       <el-form-item label="名称" v-if="activeName === 'tab1'">
      <el-input v-if="activeName === 'tab1'" type='text' v-model="form.name">
      </el-input>
      </el-form-item>
      <el-form-item label="名称" v-if="activeName === 'tab2'">
      <el-input v-if="activeName === 'tab2'" type='text' v-model="form2.name"></el-input>
      </el-form-item>

    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'tab1',
      disabled: false,
      tabSelectOptions: [
        { label: 'tab1', code: 'tab1' },
        { label: 'tab2', code: 'tab2' }
      ],

      horizontal: 'value',
      activeIndex: '1',
      currentPage4: 4,
      form: {
        name: ''
      },
      form2: {
        name: ''
      },
      dataList: [
        { name: '香蕉', num: 12, price: 6 },
        { name: '苹果', num: 8, price: 9 },
        { name: '桃子', num: 15, price: 4 },
        { name: '山竹', num: 3, price: 30 },
        { name: '西瓜瓜', num: 59, price: 2.5 },
        { name: '火龙果', num: 18, price: 5 },
        { name: '荔枝', num: 20, price: 10 }
      ]
    }
  },
  computed: {
    getPriceSum () {
      return this.dataList.map(item => {
        return item.num * item.price
      })
    },
    priceSum () {
      return this.getPriceSum.reduce((item1, item2) => {
        return item1 + item2
      })
    }
  },
  mounted () {
    this.getDataList()
  },
  watch: {
  },
  methods: {
    //     test
    // POST /test
    // 接口ID：35026033
    // 接口地址：https://mock.apifox.cn/m1/1471061-0-default/test
    getDataList () {
      // eslint-disable-next-line quotes
      this.$http.post(`https://mock.apifox.cn/m1/1471061-0-default/test`)
        .then(({ data: res }) => {
          console.log(res)
        })
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    reduce (e) {
      e.num--
    },
    add (e) {
      e.num++
    },
    changeTab () {
    },
    goBack () {
      this.$router.push({
        name: 'home'
      })
    }
  }
}

</script>
<style lang="scss" scoped>
</style>
