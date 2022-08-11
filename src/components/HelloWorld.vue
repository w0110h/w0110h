<!--
 * @Author: wjf
 * @Date: 2022-08-03 10:32:45
 * @LastEditTime: 2022-08-03 13:12:30
 * @LastEditors: wjf
 * @Description:
-->
<template>
  <div>
    HelloWorld
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
