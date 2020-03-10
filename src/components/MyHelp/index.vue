<template>
    <div class="help">
        <div class="head">
            <p>
                <span class="iconfont" @click="back" >&#xe627;</span>
                绑定手机号
            </p>
        </div>
        <div class="bind">
                <p>绑定手机号后</p>
                <p>下次登录可使用手机号码</p>
            </div>
            <div class="phone">
                +86
                <span class="iconfont">&#xe615;</span>
                <input type="text" placeholder="手机号">
            </div>
            <div class="txt">
                <input type="text" placeholder="短信验证码">
                <span>获取</span>
            </div>
            <div class="success">
                完成
            </div>
    </div>
</template>
<style lang="less" scoped>
.help{
    background: #fff;
    padding: 0 0.3rem;
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
        .bind{
                padding-top: 1rem;
                text-align: center;
            p{
                padding-bottom: 0.16rem;
                font-size: 0.24rem;
                line-height: 0.24rem; 
                color: #666666;
            }
        }
        .phone{
            margin-top: 0.35rem;
            border-bottom: 1px solid  #e7e7e7;
            color: #000;
            padding-bottom: 0.25rem;
            padding-top: 1.1rem;
            .iconfont{
                color: #999999;
                padding-right: 0.17rem;
            }
            input{
                border: none;
                border-left: 1px solid #e9e9e9;
                height: 0.3rem;
                line-height: 0.3rem;
                padding-left: 0.24rem;
                color: #999999;
            }
            
        }
        .txt{
                border-bottom: 1px solid  #e7e7e7;
                height: 1.4rem;
                box-sizing: border-box;
                // padding-bottom: 0.25rem;
                padding-top: 0.55rem;
                input{
                    border: none;
                    height: 0.3rem;
                    line-height: 0.3rem;
                    width: 4.8rem;
                    color: #999999;
                }
                span{
                    width: 1.45rem;
                    height: 0.7rem;
                    display: inline-block;
                    background: #ff6806;
                    border-radius: 0.35rem;
                    text-align: center;
                    color: #fff;
                    font-size: 0.3rem;
                    line-height: 0.7rem;
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
                background: #e8e8e8;
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