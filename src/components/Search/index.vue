<template>
    <div class="search">
        <span class="iconfont">&#xe848;</span>
        <input type="text" placeholder="搜索你想吃的">
        <span class="button">搜索</span>
    </div>
</template>
<style lang="less" scoped>
@import '~style/index.less';
.search{
  margin: 1rem 0.30rem 0.34rem 0.30rem;
  border-radius: 0.5rem;
  background-color: #f0f0f0;
  height: .64rem;
  width:6.9rem;
  line-height: .64rem;
  padding: 0 0 0 0.24rem;
  box-sizing: border-box;
  .iconfont{
  font-size: 0.31rem;
  }
  input{
    border: none;
    background:#f0f0f0 ;
    padding-left: 0.24rem;
  }
  .button{
    width: 1.18rem;
    float: right;
    text-align: center;
    background: #d3d3d3;
    border-radius:0 0.5rem 0.5rem 0;
  }
}
</style>
<script>
export default {
    
}
</script>