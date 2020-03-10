<template>
    <div class="rel">
        <div class="head">
            <p>
                <span class="iconfont" @click="back" >&#xe627;</span>
                我的发布
            </p>
        </div>
        <div class="list" v-for="(item,index) in list" :key='index'>
            <div class="imfo">
                <img src="../../../public/f11.jpg" alt="">
                <div class="name">
                    <span>莉莉</span>
                    <p>16分钟前</p>
                </div>
            </div>
            <div class="li">
                    <p>
                        <span>{{item.foodName}}</span>,
                        <span>{{item.foodName}}</span>,
                        <span>{{item.foodName}}</span>,
                        <span>{{item.foodName}}</span>,
                        <span>{{item.foodName}}</span>,
                    </p>
                    <div class="img">
                        <img :src="item.img" alt="">
                        <img :src="item.img" alt="">
                        <img :src="item.img" alt="">
                    </div>
                    
                </div>
        </div>
        <!-- <div class="imfo" v-for="(item,index) in list" :key='index'>
                <img src="../../../public/f11.jpg" alt="">
                <div class="name">
                    <span>莉莉</span>
                    <p>16分钟前</p>
                </div>
                <span class="iconfont" >&#xe627;</span>
                <div class="list">
                    <p>
                        <span>{{item.foodName}}</span>
                        <span>{{item.foodName}}</span>
                        <span>{{item.foodName}}</span>
                        <span>{{item.foodName}}</span>
                    </p>
                    <img :src="item.img" alt="">
                    <img :src="item.img" alt="">
                    <img :src="item.img" alt="">
                </div>
        </div> -->
    </div>
</template>
<style lang="less" scoped>
.rel{
    background: #f8f8f8;
    // margin: 0 0.3rem;
    width: 7.5rem;
    height: 100vh;
    padding-top:0.94rem ;
    .head{  
        position: fixed;
        top: 0;
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
        .imfo{
            height: 0.8rem;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            height: 1.3rem;
            padding: 0 0.3rem;
            img{
                width: 0.8rem;
                height: 0.8rem;
                border-radius: 5rem;
            }
            .name{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                padding-left:0.3rem ;
                padding-top: 0.1rem;
                span{
                    font-size: 0.28rem;
                    color: black;
                }
                p{
                    font-size: 0.2rem;
                    color: #999999;
                }
            }
            .iconfont{
                margin-left: auto;
            }
        }
        .li{
            padding: 0 0.3rem;
            p{
                padding: 0.15rem 0;    
            }
            .img{
                display:flex;
                justify-content: space-around;
                img{
                    width: 30%;
                    border-radius:0.1rem ;
                }
            }
        }
    }
</style>
<script>
import { mapState, mapMutations } from 'vuex'
import { getData } from "../../api/api";
export default {
    computed:{
        ...mapState(['list','toggle'])
    },
    methods:{
        ...mapMutations(['addList','changeToggle']),
        back(){
            this.$router.go(-1)
            this.changeToggle(1)
        }
    },
    created() {
        getData().then(res => {
      //   console.log(res)
        this.addList(res);
        });
        // console.log(this.list)
    }
}
</script>