<!--
 * @Author: wjf
 * @Date: 2022-08-16 15:02:50
 * @LastEditTime: 2022-09-05 15:37:54
 * @LastEditors: wjf
 * @Description:
-->
<template>
  <div class="topNav">
    <div class="left">
      <span>logo</span>
      <div v-for="item in topData"
           :key="item.id"
           class="menuItem">{{item.name}}</div>
    </div>
    <div class="center">
      <input type="text"
             class="centerInput">
      <button class="centerButton">搜索</button>
    </div>
    <div class="right">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img src="@/assets/img/me.jpg"
               alt="头像" width='30px'><i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>我的名称</el-dropdown-item>
          <el-dropdown-item divided>
            <span class="item-other">作品</span>
            <span class="item-other">获赞</span>
          </el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
   <div>
     <tabeladd></tabeladd>
   </div>
  </div>
</template>

<script>
// import tabeladd from './components/tabelAdd.vue'
export default {
  // components: { tabeladd },
  name: 'LearnIndex',

  data () {
    return {
      topData: [
        { id: 1, name: '主页' },
        { id: 2, name: '个人相册' },
        { id: 3, name: '前端资料' },
        { id: 4, name: '与你相关' }
      ]

    }
  },

  mounted () {

  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>
.topNav {
  width: 80%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .left {
    display: flex;
    justify-content: center;

    .menuItem {
      padding: 0 10px;
      white-space: nowrap;
      cursor: pointer;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 1;
      color: #666;
      transition: color 0.3;
    }
    .menuItem:hover {
      color: #000;
    }
    .active {
      color: #000;
      border-bottom: 2px solid #409eff;
    }
  }
  .centerInput {
    height: 20px;
    min-width: 200px;
    border-start-start-radius: 20px;
    border-end-start-radius: 20px;
    border: 1px solid #fc5531;
    border-right: none;
    padding: 5px 20px 5px;
    // border: aqua;
    // outline: 1px solid #666;
  }
  .centerInput:focus {
    border: 1px solid #fc5531;
    outline: none;
  }
  .centerButton {
    height: 32px;
    position: relative;
    top: 1px;
    width: 100px;
    color: #fff;
    border-end-end-radius: 16px;
    border-start-end-radius: 16px;
    background-color: #fc5531;
    border: none;
  }
  /deep/ .el-dropdown-menu {
    .el-dropdown-menu__item {
      .item-other {
        padding-right: 20px;
      }
    }
  }
}
</style>
