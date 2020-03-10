<template>
    <div class="menulist">
        <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        >
            <ul>
                <li v-for="(item,index) in list" :key='index'>
                    <p>{{item.foodName}}</p>
                    <div class="img">
                        <img :src="item.img" alt="">
                        <img :src="item.img" alt="">
                        <img :src="item.img" alt="">
                    </div>
                </li>
            </ul>
        </van-list>
    </div>
</template>
<style lang="less" scoped>
@import '~style/index.less';
.menulist{
    margin: 0.3rem;
    width: 6.9rem;
    border-top:1px solid #f0f0f0 ;
    border-bottom:1px solid #f0f0f0 ;
    margin-bottom: 0.98rem;
    ul{
        li{
            p{
                font-size: 0.32rem;
                line-height: 0.89rem;
                font-weight: 600;
            }
            .img{
                display: flex;
                justify-content: space-around;
                align-items: center;
                img{
                    width: 2.21rem;
                    height: 2.12rem;
                    border-radius: 0.06rem;
                }
            }
        }
    }
}
</style>
<script>
import { getData } from '../../api/api'
import { mapState } from 'vuex'
export default {
    data() {
        return {
        loading: false,
        finished: false,
        refreshing: false,
        menuList:[],
        };
    },
    computed:{
        ...mapState(['list'])
    },
    created(){
        // console.log(this.list)
       
    },
    methods:{
        
         onLoad() {
        setTimeout(() => {
            if (this.refreshing) {
            this.list = [];
            this.refreshing = false;
            }

            for (let i = 0; i < 10; i++) {
            this.list.push(this.list.length + 1);
            }
            this.loading = false;

            if (this.list.length >= 40) {
            this.finished = true;
            }
        }, 1000);
        },
        onRefresh() {
        // 清空列表数据
        this.finished = false;

        // 重新加载数据
        // 将 loading 设置为 true，表示处于加载状态
        this.loading = true;
        this.onLoad();
        }
    }
}
</script>