<!--
 * @Author: wjf
 * @Date: 2022-08-15 16:53:52
 * @LastEditTime: 2022-08-16 09:26:10
 * @LastEditors: wjf
 * @Description:
-->
<template>
  <div>
    我是子组件
    <div>
      {{num}}
    </div>

    <div>
      子组件传给父组件
      <p>子组件调用事件，this.$emit触发父组件的自定义事件并传参</p>
    </div>
    <div v-for="(item,index) in num"
         :key="index">
      {{item}}
    </div>
    <el-button @click="add">添加</el-button>
  </div>
</template>
<script>
export default {
  name: 'LearnChildrenVal',
  props: ['num'],

  data () {
    return {

    }
  },

  mounted () {

  },

  methods: {
    add () {
      this.$emit('parentFun', '520')
    }
  }
}
</script>
<style lang="sass" scoped>
</style>
