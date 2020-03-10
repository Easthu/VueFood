<template>
    <div class="menu">
        <ul>
            <li class="li1">
                <img src="../../../public/images/1_03.png" alt="">
                <img src="../../../public/images/5d521766d12fa_05.png" alt="">
            </li>
            <li class='li2'>
                <img src="../../../public/images/5d521766d12fa_09.png" alt="">
                <img src="../../../public/images/5d521766d12fa_11.png" alt="">
                <img src="../../../public/images/5d521766d12fa_13.png" alt="">
            </li>
        </ul>
    </div>
</template>
<style lang="less" scoped>
@import '~style/index.less';
.menu{
    display: flex;
    flex-flow: column;
    height: 4.32rem;
    padding: 0 0.3rem;
    li{
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-top: 0.16rem;
    }
    .li1{
        img{
            width: 3.36rem;
            height: 1.88rem;
            border-radius: 0.06rem;
        }
    }
    .li2{
        img{
            width: 2.18rem;
            height: 2.14rem;
            border-radius: 0.06rem;
        }
    }
}
</style>
<script>
export default {
    
}
</script>