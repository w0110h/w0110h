<!-- eslint-disable vue/multi-word-component-names -->
<!--
 * @Author: wjf
 * @Date: 2022-08-15 16:51:31
 * @LastEditTime: 2022-08-16 09:52:41
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
    <div>
      我是父组件
    </div>
    <el-button @click="num++">
      +1
    </el-button>
    <el-button @click="num--">
      -1
    </el-button>
    <child :num='num'
           @parentFun='parentFun'>
    </child>
    <div>
      ref通信，父组件调用子组件的函数，通过ref通信
    </div>
  </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'
import child from './childrenVal.vue'

export default {
  data () {
    return {
      property: 'value',
      num: ['10', '20', '30']
    }
  },
  components: { child },
  methods: {
    parentFun (val) {
      this.num.push(val)
    },
    goBack () {
      this.$router.push({
        name: 'home'
      })
    }

  }

}
</script>
