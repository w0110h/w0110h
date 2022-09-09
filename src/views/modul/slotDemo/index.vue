<!--
 * @Author: wjf
 * @Date: 2022-08-16 10:44:18
 * @LastEditTime: 2022-08-16 13:21:54
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
    <p>插槽的最大特性就是复用，好的插槽可以大大提高组件的可重用能力。</p>
    <p>插槽就是在子组件中挖个坑，坑里面放什么由父组件决定</p>
    <p>插槽分为匿名插槽，具名插槽，定义域查插槽</p>

    <p>$nextTick</p>
    <p>vue是异步渲染函数，data改变之后不会立即渲染dom，$nextTick会在dom渲染之后被触发</p>
    <p>$nextTick的作用是获取最新的dom节点</p>
  </div>
</template>
<script>
export default {
  name: 'LearnIndex',

  data () {
    return {

    }
  },

  mounted () {

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
