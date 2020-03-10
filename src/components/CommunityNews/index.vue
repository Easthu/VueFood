<template>
    <div class="news">
        <div class="head">
            <p>
                <span class="iconfont" @click="back" >&#xe627;</span>
                详情
            </p>
        </div>
        <div class="list">
            <p class="title">{{news.foodName}}</p>
            <div class="imfo">
                <img :src="news.img" alt="">
                <div class="name">
                    <span>{{news.group}}</span>
                    <p>16分钟前</p>
                </div>
            </div>
            <div class="step">
                <p v-for="(item,index) in news.step" :key='index'>{{item.text}}</p>
                <img :src="news.img" alt="">
                <!-- <p v-for="(item,index) in news.step" :key='index'>{{item.text}}</p> -->
            </div>
        </div>
        <div class="end">
            <ul>
                <li>
                    <span class="iconfont" >&#xe664;</span>
                    <p>562</p>
                </li>
                <li>
                    <span class="iconfont" >&#xe637;</span>
                    <p>562</p>
                </li><li>
                    <span class="iconfont" >&#xe63b;</span>
                    <p>562</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import{getData} from '../../api/api'
export default {
    data(){
        return{
            news:[]
        }
    },
    computed:{
        ...mapState(['list','listIndex','toggle'])
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
    mounted(){
        getData().then((res)=>{
            this.news = res.list[this.listIndex]
        })
    }
}
</script>
<style lang="less" scoped>
    .news{
        color: black;
        // position: fixed;
        // bottom: 0;
        // top: 0;
        // left: 0;
        // right: 0;
        background: white;
        // z-index: 11;
        .head{
            height: 0.94rem;
            width: 100%;
            text-align: center;
            line-height: 0.94rem;
            font-size: 0.3rem;
            color: black;
            font-weight: 600;
            border-bottom:0.01rem solid  #dededf;
            .iconfont{
                position: absolute;;
                left: 0.3rem;
                top: 0.3rem;
                line-height: 0.3rem;
            }
        }
        .list{
            margin: 0 0.3rem;
            .title{
                // text-align: center;
                height: 1.04rem;
                line-height: 1.04rem;
                font-size: 0.42rem;
                font-weight: 600;
            }
            .imfo{
                height: 0.8rem;
                display: flex;
                img{
                    width: 0.8rem;
                    height: 0.8rem;
                    border-radius: 5rem;
                }
                .name{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
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
            }
        }
        .end{
            position: fixed;
            bottom: 0;
            background: white;
            left: 0;
            right: 0;
            z-index: 11;
            height: 1rem;
            ul{
                display: flex;
                justify-content: space-around;
                align-items: center;
                li{
                    display: flex;
                    align-items: center;
                    font-size: 0.3rem;
                    line-height: 1rem;
                    span{
                        padding-right: 0.1rem;
                        font-size: 0.5rem;
                    }
                }
            }
        }
    }
</style>