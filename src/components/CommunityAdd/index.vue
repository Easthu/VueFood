<template>
    <div class="add">
        <div class="head">
            <p>
                <span class="iconfont" @click="back" >&#xe627;</span>
                发动态
            </p>
        </div>
        <div class="in">
            <p class="title">标题</p>
            <input type="text" placeholder="请输入标题（12字以内）" class="intitle">
            <p class="content">内容</p>
            <input type="textarea" placeholder="请输入内容" class="incontent">
            <img src="../../../public/images/5d521766d13e0_03.png" alt="">
            <span class="iconfont">&#xe6d9;</span>
            <span>显示城市</span>
            <div class="release">
                发布
            </div>
            <!-- <div class="end"></div> -->
        </div>
    </div>
</template>
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
    },
    created(){
    },
    
}
</script>
<style lang="less" scoped>
    .add{
        color: black;
        background: #f8f8f8;
        width: 7.5rem;
        box-sizing: border-box;
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
        .in{
            .title{
            height: 0.84rem;
            font-size: 0.26rem;
            line-height: 0.84rem;
            color: #6a6a6a ;
            padding: 0 0.3rem;
            width: 7.5rem;
            box-sizing: border-box;
            overflow-y:hidden
            }
            .intitle{
                border: none;
                padding: 0 0.3rem;
                background: #fff;
                height: 1rem;
                font-size: 0.28rem;
                line-height: 1rem;
                color: #dcdcdc;
                width: 7.5rem;
                box-sizing: border-box;
            }
            .content{
            height: 0.84rem;
            font-size: 0.26rem;
            line-height: 0.84rem;
            color: #6a6a6a ;
            padding: 0 0.3rem;
            width: 7.5rem;
            box-sizing: border-box;
            }
            .incontent{
                border: none;
                padding: 0 0.3rem;
                background: #fff;
                height: 3.4rem;
                font-size: 0.28rem;
                line-height: 1rem;
                color: #dcdcdc;
                width: 7.5rem;
                box-sizing: border-box;
            }
            img{
                width: 1.7rem;
                height: 1.7rem;
                border-radius: 0.1rem;
                display: block;
                margin: 0.63rem 0 0.46rem 0.3rem;
            }
            span{
                color: #b5b5b5;
                padding-right: 0.15rem;
                font-size: 0.24rem;
            }
            .iconfont{
                padding-left: 0.3rem;
                font-size: 0.34rem;
            }
            .end{
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                height: 1rem;
                background: #f8f8f8;
                z-index: 11;
            }
            .release{
                width: 6.4rem;
                margin: auto;
                margin-top:1.2rem  ;
                height: 0.9rem;
                border-radius: 0.45rem;
                text-align: center;
                font-size: 0.28rem;
                line-height: 0.9rem;
                background: #e0e0e0;
            }
        }
        
    }
</style>