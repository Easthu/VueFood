<template>
    <div class="Community">
        <div class="first" v-if='toggle'>
            <span class="header">社区</span>
            <CommunityList></CommunityList>
            <div class="plus" @click="release">
                <span>+</span>
                <p>发动态</p>
            </div>
        </div>
        <div class="second">
            <router-view></router-view>
        </div>
    </div>
</template>
<style lang="less" scoped>
@import '~style/index.less';
.header{
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 0.88rem;;
    line-height: 0.88rem;
    font-size: .34rem;
    color: @black-2;
    font-weight: 600;
    background: @w;
    z-index: 9;
}
.plus{
    position: fixed;
    right: 0.3rem;
    width: 1.02rem;
    height: 1.02rem;
    background: #ff6000;
    border-radius: 5rem;
    bottom: 3.28rem;
    text-align: center;
    display: flex;
    color: #fff;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // padding: 0.1rem 0;
    box-sizing: border-box;
    span{
        font-size: 0.7rem;
        line-height: 0.7rem;
        margin-top: -0.3rem;

    }
    p{
        font-size:0.24rem;
        line-height: 0.24rem;
        // margin-top: -0.1rem;
    }
}
</style>
<script>
import CommunityList from '../CommunityList'
import { mapState, mapMutations } from 'vuex'
export default {
    components:{CommunityList},
    computed:{
        ...mapState(['toggle'])
    },
    methods:{
        ...mapMutations(['changeToggle']),
        release(){
            this.$router.push('/community/add')
            this.changeToggle(0)
        }
    }
}
</script>