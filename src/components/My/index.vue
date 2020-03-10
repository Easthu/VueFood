<template>
    <div class="my" >
        <div class="first" v-if='toggle'>
            <span class="header">我的</span>
            <div class="name">
                <img src="../../../public/f9.jpg" alt="">
                <div class="imfo">
                    <div class="lv3">
                        <p>昵称</p>
                        <span>LV3</span>
                    </div>
                    <p>18412345678</p>
                </div>
                <span class="iconfont">&#xe615;</span>
            </div>
            <ul>
                <li>
                    <span class="iconfont">&#xe628;</span>
                    <p>我的发布</p>
                    <span class="iconfont fin">&#xe615;</span>
                </li>
                <li>
                    <span class="iconfont">&#xe637;</span>
                    <p>我的收藏</p>
                    <span class="iconfont fin">&#xe615;</span>
                </li>
                <li>
                    <span class="iconfont">&#xe630;</span>
                    <p>我的关注</p>
                    <span class="iconfont fin">&#xe615;</span>
                </li>
                <li>
                    <span class="iconfont">&#xe64c;</span>
                    <p>系统设置</p>
                    <span class="iconfont fin">&#xe615;</span>
                </li>
                <li @click="help">
                    <span class="iconfont" >&#xe606;</span>
                    <p>帮助中心</p>
                    <span class="iconfont fin">&#xe615;</span>
                </li>
            </ul>
            <div class="loginout">
                退出登录
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
.name{
    margin: 1.18rem 0.3rem 0.3rem 0.3rem;
     background:linear-gradient(to right ,rgba(255,100,0,1),rgba(255,185,66));
    height: 2rem;
    width: 6.9rem;
    border-radius: 0.2rem;
    padding: 0.54rem 0.2rem;
    box-sizing: border-box;
    display: flex;
    img{
        width: 0.92rem;
        height: 0.92rem;
        border-radius: 5rem;
        border: 2px solid #fff;
    }
    .imfo{
        display: flex;
        flex-direction: column;
        margin-left: 0.3rem;
        align-items: center;
        width: 2rem;
        justify-content: space-around;
        align-items: flex-start;

        .lv3{
            display: flex;
            justify-content: center;
            align-items: center;
            p{
                font-size: 0.34rem;
                color: #fff;
                padding-right: 0.18rem;
                line-height: 0.34rem;
            }
            span{
                width: 0.62rem;
                height: 0.34rem;
                border-radius: 0.17rem;
                background: #fff;
                color: #ff6806;
                font-size: 0.16rem;
                text-align: center;
            }
        }
        p{
            color: #fff;
        }
    }
    .iconfont{
        margin-left: auto;
        line-height: 1rem;
        font-size: 0.4rem;
    }
}
ul{
    width: 7.5rem;
    padding: 0.5rem;
    box-sizing: border-box;
    li{
        height: 0.84rem;
        display: flex;
        align-items: center;
        color: black;
        span{
            font-size: 0.4rem;
        }
        p{
            font-size: 0.28rem;
            padding-left: 0.25rem;
        }
        .fin{
            margin-left: auto;
            color: #000;
        }
    }
}
.loginout{
    width: 4.52rem;
    height: 0.9rem;
    margin: auto;
     background:linear-gradient(to right ,rgba(255,100,0,1),rgba(255,185,66));
    border-radius: 0.45rem ;
    text-align: center;
    line-height: 0.9rem;
    margin-top: 0.75rem;
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
        help(){
            this.$router.push('/my/help')
            this.changeToggle(0)
        }
    }
}
</script>