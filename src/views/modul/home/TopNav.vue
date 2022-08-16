<!--
 * @Author: wjf
 * @Date: 2022-08-12 13:25:06
 * @LastEditTime: 2022-08-15 17:41:59
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
        </el-table-column>
        <el-table-column prop="price"
                         label="价格">
        </el-table-column>
      </el-table>
    </div>
    <div>总计{{priceSum}}元</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      horizontal: 'value',
      activeIndex: '1',
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
  methods: {
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
