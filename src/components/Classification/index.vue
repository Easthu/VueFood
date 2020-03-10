<template>
    <div class="clsaaification">
     <span class="header">全部分类</span>
    <ul>
        <li>
            <p>肉类</p>
            <div class="circle">
                <span>鸡肉</span>
                <span>鱼肉</span>
                <span>鸭肉</span>
                <span>牛肉</span>
                <span>猪肉</span>
                <span>羊肉</span>
                <span>兔肉</span>
                <span>其他</span>
            </div>
        </li>
        <li>
            <p>素菜</p>
            <div class="circle">
                <span>土豆</span>
                <span>白菜</span>
                <span>藕</span>
                <span>萝卜</span>
                <span>黄瓜</span>
                <span>青椒</span>
                <span>莴笋</span>
                <span>其他</span>
            </div>
        </li>
        <li>
            <p>热门</p>
            <div class="circle">
                <span>山药</span>
                <span>鸡蛋</span>
                <span>披萨</span>
                <span>蛋挞</span>
                <span>曲奇</span>
                <span>布丁</span>
                <span>吐司</span>
                <span>其他</span>
            </div>
        </li>
    </ul>
    </div>
</template>
<style lang="less" scoped>
@import '~style/index.less';
.clsaaification{
    margin: 0 0.3rem;
    text-align: center;
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
    ul{
        margin: 0.88rem 0 0 0;
        li{
            margin-bottom: 0.2rem;
            p{
                height: 0.6rem;
                font-weight: 600;
                font-size: 0.32rem;
                padding-top:0.28rem;
                line-height: 0.32rem;
                box-sizing: border-box;
            }
            .circle{
                display: flex;
                align-items: center;
                justify-content: space-around;
                flex-flow: wrap;
                span{
                    color: #707070;
                    display: inline-block;
                    width: 1.1rem;
                    height: 1.1rem;
                    border-radius: 5rem;
                    border: 2px solid #d2d2d2;
                    box-sizing: border-box;
                    margin: 0.2rem;
                    line-height: 1.06rem;
                }
            }
        }
    }
}

</style>
<script>
export default {
    
}
</script>