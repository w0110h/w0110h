<!--
 * @Author: wjf
 * @Date: 2022-08-11 15:11:31
 * @LastEditTime: 2022-08-15 17:41:56
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
    <h2>watch: 监听属性</h2>
    <p>监听属性，某和数值发生改变的时候，我们监听他改变的同步事件</p>
    <el-button @click="clickMsg">
      watch
    </el-button>
    <!-- 在函数发生改变的时候会直接调用监听属性里面的handler函数，监听的值没有发生改变的时候不会执行函数 -->

    <div>
      <h2>过滤器 filter</h2>
      <p>对某些数据进行过滤，格式化，比如：大小写切换，为日期指定格式，小数保留几位小数等</p>
      <p>过滤器本质是一个方法，其使用相当于是方法的调用</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'watchView',
  data () {
    return {
      msg: '1'
    }
  },

  watch: {
    msg: {
      handler (newVal, oldVal) {
        console.log(newVal)
        console.log(oldVal)
      },
      immediate: true,
      deep: true // 当监听一个对象的改变的时候，普通的watch无法监听到对象内部的属性的改变，此时就需要deep属性对对象进行深度监听
    }
  },
  methods: {
    goBack () {
      this.$router.push({
        name: 'home'
      })
    },
    clickMsg () {
      this.msg++
    }
  }

}
</script>
<style lang="scss" scoped>
</style>
