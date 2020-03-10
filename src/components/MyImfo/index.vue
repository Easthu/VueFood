<template>
    <div class="imfo">
        <div class="head">
            <p>
                <span class="iconfont" @click="back" >&#xe627;</span>
                个人信息
            </p>
        </div>
        <div class="hand">
            <span class='left'>头像</span>
            <img src="../../../public/f1.jpg" alt="">
            <span class="iconfont">&#xe615;</span>
        </div>
        <div class="name">
            <span class='left'>昵称</span>
            <p>张三</p>
            <span class="iconfont">&#xe615;</span>
        </div>
        <div class="sex">
            <span class='left'>性别</span>
            <p>选择</p>
            <span class="iconfont">&#xe615;</span>
        </div>
        <div class="phone">
            <span class='left'>电话</span>
            <p>去绑定</p>
            <span class="iconfont">&#xe615;</span>
        </div>
        <div class="intro">
            <p>简介</p>
            <span>介绍一下你自己吧</span>
        </div>
        <div class="success">
            保存
        </div>
    </div>
</template>
<style lang="less" scoped>
.imfo{
    background: #f8f8f8;
    // margin: 0 0.3rem;
    width: 7.5rem;
    height: 100vh;
    .head{
            height: 0.94rem;
            width: 100%;
            text-align: center;
            line-height: 0.94rem;
            font-size: 0.3rem;
            color: black;
            font-weight: 600;
            border-bottom:0.01rem solid  #dededf;
            background: #fff;
            .iconfont{
                position: absolute;;
                left: 0.3rem;
                top: 0.3rem;
                line-height: 0.3rem;
            }
        }
    .hand{
        height: 1.6rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 0 0.3rem;
        background: #fff;
        .left{
            font-size: 0.3rem;
            color: black;
            font-weight: 600;
            margin-right: auto;
        }
        img{
            width: 1.2rem;
            height: 1.2rem;
            border-radius: 0.6rem;
            margin-right:0.3rem;
        }
    }    
    .sex{
        height: 1rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        background: #fff;
        padding: 0 0.3rem;
        .left{
            font-size: 0.3rem;
            color: black;
            font-weight: 600;
            margin-right: auto;
        }
        p{
            color: #7f7f7f;
        }
    }   
    .name{
        height: 1rem;
        display: flex;
        align-items: center;
        padding: 0 0.3rem;
        background: #fff;
        justify-content: flex-end;
        .left{
            font-size: 0.3rem;
            color: black;
            font-weight: 600;
            margin-right: auto;
        }
        p{
            color: #7f7f7f;
        }
    }   
    .phone{
        height: 1rem;
        display: flex;
        background: #fff;
        padding: 0 0.3rem;
        align-items: center;
        justify-content: flex-end;
        margin: 0.15rem 0;
        .left{
            font-size: 0.3rem;
            color: black;
            font-weight: 600;
            margin-right: auto;
        }
        p{
            color: #7f7f7f;
        }
    } 
    .intro{
            background: #fff;
            padding: 0 0.3rem;
            height: 4.5rem;
        p{
            font-size: 0.3rem;
            font-weight: 600;
            color: black;
            line-height: 1rem;
        }
    }
    .success{
                position: fixed;
                bottom: 1.6rem;
                left: 0.85rem;
                height: 0.9rem;
                width: 5.8rem;
                border-radius: 0.45rem;
                text-align: center;
                line-height: 0.9rem;
                background:linear-gradient(to right ,rgba(255,100,0,1),rgba(255,185,66));
            }
    }
</style>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
    computed:{
        ...mapState(['toggle'])
    },
    methods:{
        ...mapMutations(['changeToggle']),
        back(){
            this.$router.go(-1)
            this.changeToggle(1)
        }

    }
}
</script>