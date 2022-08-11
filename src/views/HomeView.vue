<!--
 * @Author: wjf
 * @Date: 2022-08-03 10:32:45
 * @LastEditTime: 2022-08-03 13:43:27
 * @LastEditors: wjf
 * @Description:
-->
<template>
  <div class="home">
    <HelloWorld />

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
