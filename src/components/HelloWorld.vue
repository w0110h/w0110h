<!--
 * @Author: wjf
 * @Date: 2022-08-03 10:32:45
 * @LastEditTime: 2022-08-11 10:23:36
 * @LastEditors: wjf
 * @Description:
-->
<template>
  <div>
    我是一个公共组件
    <el-button type="primary"
               @click="goAbout">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {

    }
  },
  methods: {
    goAbout () {
      this.$router.push({
        name: 'about'
      }
      )
    }
  }
}
</script>
<style scoped lang="scss">
</style>
