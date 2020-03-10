<template>
  <div id="app">
    <!-- 头部 -->
    <!-- <Header></header> -->
    <!-- 内容 -->
    <router-view></router-view>
    <!-- 选项卡 -->
    <tab></tab>

  </div>
</template>

<style lang="less">
#app {
  font-size: 16px;
}
</style>
<script>
// import Header from '../src/components/Header'
import Tab from '../src/components/Tab'
export default {
  components:{Tab}
}
</script>
