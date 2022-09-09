<!--
 * @Author: wjf
 * @Date: 2022-08-03 10:32:45
 * @LastEditTime: 2022-09-09 13:31:56
 * @LastEditors: wjf
 * @Description:
-->
<template>
  <div class="home">
    <div>
      <div class="tabButton">
        <div class="goButton">
          <el-button @click="goWatch">监听属性</el-button>
        </div>
        <div class="goButton">
          <el-button @click="goLifeFun">生命周期函数</el-button>
        </div>
        <div class="goButton">
          <el-button @click="goCar">购物车</el-button>
        </div>
        <div class="goButton">
          <el-button @click="goValueTrans">传值</el-button>
        </div>
        <div class="goButton">
          <el-button @click="goslotDemo">插槽</el-button>
        </div>
        <div class="goButton">
          <el-button @click="gotopNav">顶部导航栏</el-button>
        </div>
         <div class="goButton">
          <el-button @click="gobutton">自定义按钮</el-button>
        </div>
         <div class="goButton">
          <el-button @click="goJavaScript">goJavaScript</el-button>
        </div>
         <div class="goButton">
          <el-button @click="gojuejin">掘金</el-button>
        </div>
      </div>
      {{'这里是插值表达式'}}
    </div>
    <span>
      {{'插值表达式可以支持的值有变量，部分表达式，且，或，函数'}}{{'-------这是一个js语法区域，只能写一些js语法'}}
    </span>
    <HelloWorld />
    <h2>事件对象 event</h2>
    <el-button @click="eventFunction1">事件对象</el-button>
    <el-button @click="eventFunction2(1234,$event)">事件对象传参</el-button>
    <h2>事件修饰符 .self .stop .once .prevent</h2>
    <div @click.self="clickParent"
         class="clickParent">
      <div @click.stop="clickChild"
           class="clickChild"></div>
      <!-- .self 和 .stop 都可以用于组织事件冒泡，.self触发事件源的时候才会触发 .stop用于阻止冒泡事件 -->
    </div>
    <el-button @click.once="clickOnce">once</el-button>
    <!-- once 事件只会执行一次 -->
    <a @click.prevent="clickPrevent"
       href="https://www.baidu.com">prevent 百度一下</a>

    <div>
      <input type="text"
             @keyup.enter="enterFun">
    </div>
    <div>
      <h2>双向数据绑定</h2>
      <p>{{msg}}</p>
      <input type="text"
             v-model="msg">
      <p>{{text}}</p>
      <textarea v-model="text"></textarea>
      <div>
        <p>input,textarea,select v-model绑定的是value的值，checkbox，radio绑定的是checked的属性</p>
      </div>
    </div>
    <div>
      <h2>修饰符</h2>
      <p>.lazy .number .trim </p>
      {{msg1}}
      <input type="text"
             v-model.lazy="msg1">
      <!-- 不聚焦的时候或者按Enter的时候才会显示改变msg1 -->
      <p> {{msg2}}</p>
      <input type="text"
             v-model.number="msg2">
    </div>
    <div>
      <h2>computed,计算属性</h2>
      <!-- 通过关键词computed属性定义的一个个函数，并且一定要有一个返回值，使用方法和data当中的数据使用方法一致，甚至可以把它当成一个变量使用
        计算属性第一次使用的时候将结果缓存起来，在依赖的数据没有发生改变的时候不会执行函数，只会直接调用函数的结果，
        直到属性当中所依赖的data数据发生改变计算属性的结果才会重新求值
       -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'HomeView',
  data () {
    return {
      property: 'value',
      msg: 'Hello',
      text: '',
      msg1: 'lazy',
      msg2: ''
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    eventFunction1 () {
      console.log('事件对象', event)
    },
    eventFunction2 (val, event) {
      console.log('事件对象', val, event)
    },
    clickParent () {
      console.log('父盒子')
    },
    clickChild () {
      console.log('子盒子')
    },
    clickOnce () {
      console.log('once')
    },
    clickPrevent () {
      console.log('点击a标签，跳转百度')
    },
    enterFun () {
      console.log('按enter键了')
    },
    goWatch () {
      console.log(1111)
      this.$router.push({
        name: 'watchView'
      })
    },
    goLifeFun () {
      this.$router.push({
        name: 'lifeFun'
      })
    },
    goCar () {
      this.$router.push({
        name: 'TopNav'
      })
    },
    goValueTrans () {
      this.$router.push({
        name: 'valueTrans'
      })
    },
    goslotDemo () {
      this.$router.push({
        name: 'slotDemo'
      })
    },
    gotopNav () {
      this.$router.push({
        name: 'reallyTopNav'
      })
    },
    gobutton () {
      this.$router.push({
        name: 'customButton'
      })
    },
    // goJavaScript
    goJavaScript () {
      this.$router.push({
        name: 'javaScriptPretice'
      })
    },
    // gojuejin
    gojuejin () {
      this.$router.push({
        name: 'juejin'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.clickParent {
  width: 200px;
  height: 200px;
  background-color: aqua;

  .clickChild {
    width: 100px;
    height: 100px;
    background-color: green;
    margin: 0 auto;
  }
}
.tabButton {
  display: flex;
  padding: 20px;

  .goButton {
    padding-right: 20px;
  }
}
</style>
