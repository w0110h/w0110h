<!--
 * @Author: wjf
 * @Date: 2022-08-23 15:47:51
 * @LastEditTime: 2022-09-09 13:29:19
 * @LastEditors: wjf
 * @Description:
-->
<template>
  <div>
    <button class="button">自定义的按钮</button>
    <tabelAdd></tabelAdd>
  </div>
</template>

<script>
import tabelAdd from './components/tabelAdd.vue'
export default {
  components: { tabelAdd },
  name: 'LearnIndex',

  data () {
    return {}
  },

  mounted () {},

  methods: {}
}
</script>

<style lang="scss" scoped>
.button {
  padding: 8px 10px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  cursor: pointer;
  color: #606266;
}
.button:focus {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.button:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
</style>
