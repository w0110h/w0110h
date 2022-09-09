<!--
 * @Author: wjf
 * @Date: 2022-09-09 13:24:24
 * @LastEditTime: 2022-09-09 15:25:15
 * @LastEditors: wjf
 * @Description: 掘金首页顶部导航栏
-->
<template>
  <div class="topNav">
<!-- https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg -->
    <div class="topNav-logo">
      这是logo
    </div>
    <div class="topNav-tab">
      这是左边导航栏
    </div>
    <div class="topNav-right"></div>
    这是右边的搜索框等
  </div>
</template>

<script>
export default {
  name: 'LearnTopNav',

  data () {
    return {

    }
  },

  mounted () {

  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .topNav{
      display: flex;
      color: #515767;
      justify-content: space-between;
      // height: 200px;
      border-bottom: 1px solid #f1f1f1;

      .topNav-logo{
        margin-left: 20px;
      }
  }
</style>
