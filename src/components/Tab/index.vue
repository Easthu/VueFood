<template>
    <div class="tab" v-if="toggle">
        <router-link to="/home" tag="div" active-class="sel" @click="back">
            <span class="iconfont">&#xe600;</span>
            <span>首页</span> 
        </router-link>
        <router-link to="/classification" tag="div" active-class="sel" @click="back">
            <span class="iconfont">&#xe6c6;</span>
            <span>分类</span>
        </router-link>
        <router-link to="/community" tag="div" active-class="sel" @click="back">
            <span class="iconfont">&#xe67b;</span>
            <span>社区</span>
        </router-link>
        <router-link to="my" tag="div" active-class="sel" @click="back">
            <span class="iconfont">&#xe607;</span>
            <span>我的</span>
        </router-link>

    </div>
</template>
<style lang="less" scoped>
    @import '~style/index.less';
    .tab{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 0.98rem;;
        display: flex;
        align-items: center;
        justify-content: space-around;
        // line-height: 49px;
        color: #cccccc;
        font-size: 0.22rem;
        background: @w;
        div{
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-flow: column;
            .iconfont{
                font-size: 0.38rem;
            }
        }
    }
    .sel{
        color: #ff6000;
    }
</style>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
    computed:{
        ...mapState(['toggle'])
    },
    methods:{
        ...mapMutations(['changeToggle']),
        back(){
            this.changeToggle(1)
        }
    }
}
</script>