<template>
    <div class="home">
        <span class="header">每日美食</span>
        <Search></Search>
        <banner></banner>
        <Menu></Menu>
        <Menulist></Menulist>
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
</style>
<script>
import Search from '../Search'
import Banner from '../Banner'
import Menu from '../Menu'
import Menulist from '../Menulist'
// import{getData} from '../../api/api'
export default {
    // data(){
    //     return{
    //         list:[]
    //     }
    // },
    components:{Search,Banner,Menu,Menulist},
    // mounted(){
    //         getData().then((res)=>{
    //             this.list = res
    //             console.log(res)
    //         })
    // }
}
</script>