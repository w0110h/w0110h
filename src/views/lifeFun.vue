<!--
 * @Author: wjf
 * @Date: 2022-08-12 09:37:16
 * @LastEditTime: 2022-08-15 17:41:57
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
    <h2>生命周期函数</h2>
    <!-- <div>
      <p>vue的生命周期：从vue实例创建到实例销毁这段时间经历的过程</p>
      <p>vue的生命周期钩子函数，在完整的vue的各个阶段都可以注册的函数，并且所有的生命周期函数都和data平级</p>
      <h3>beforeCreate</h3>
      <p>创建实例之前，执行完这个钩子函数，实例才会创建</p>
      <h3>created</h3>
      <p>创建实例之后，可以获取到创建的实例的内容，执行完这个钩子函数，才会捕获页面上的内容，准备渲染页面</p>
      <h3>beforeMount</h3>
      <p>挂在数据之前，拿到这个页面的结构，准备渲染到页面上之前，执行完这个钩子，就会把准备好的数据渲染到这个页面上去</p>
      <h3>mounted</h3>
      <p>挂载数据之后，data中的数据已经渲染到该渲染的标签上了</p>
      <h3>beforeUpdate</h3>
      <p>更新数据之前，当该实例的内容被更新后，会在更新之前执行这个钩子函数</p>
      <h3>updated</h3>
      <p>实例内容被更新后，渲染完毕页面会执行这个钩子</p>
    </div> -->
    <div>{{msg}}</div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      msg: '生命周期'
    }
  },
  beforeCreate () {
    console.log('实例创建之前')
    console.log('数据', this.$data)
    console.log('结构', this.$el)
  },
  created () {
    console.log('实例创建之后')
    console.log('数据', this.$data)
    console.log('结构', this.$el)
  },
  beforeMount () {
    console.log('挂载数据之前')
    console.log('数据', this.$data)
    console.log('结构', this.$el)
  },
  mounted () {
    console.log('挂载数据之后')
    console.log('数据', this.$data)
    console.log('结构', this.$el)
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
<style lang='scss' scoped>
</style>
