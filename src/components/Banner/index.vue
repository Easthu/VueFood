<template>
    <div class="banner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" 
                v-for="(item,index) in banners" 
                :key="index">
                   <img :src="item.img" alt="">
                   </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
@import '~style/index.less';
@import "~swiper/css/swiper.min.css";
.banner{
    // margin: .64rem;
    .swiper-container {
        text-align: center;
        img{
            width: 6rem;
            height: 3rem;
        }
    
}  
}
</style>
<script>
import Swiper from 'swiper'
import{getData} from '../../api/api'
import { mapState , mapMutations} from 'vuex'
export default {
    data(){
        return{
            banners:[],
        }
    },
    computed:{
        ...mapState(['list'])
    },
    mounted(){
        this.initBanner()
    },
    methods:{
        ...mapMutations(['addList']),
        initBanner(){
            new Swiper ('.swiper-container', {
                loop: true, // 循环模式选项
            }) 
        },
    },
    watch:{
    banners(){
      //网络数据已经请求成功
      this.$nextTick(()=>{
        this.initBanner();
        
      })
    }
  },
    mounted(){
        // console.log(this.list)
        getData().then((res)=>{
            this.addList(res)
            // console.log(this.list)
            for (let index = 0; index < 5; index++) {
               this.banners.push(this.list[index]);
            }
            // console.log(this.banners)
        })
    }
}        
</script>