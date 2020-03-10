<template>
    <div class="CommunityList" v-if="toggle">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="ul">
        <div class="li" v-for="(item,index) in list" :key="index" @click="jump(index)">
            <img :src="item.img" alt />
            <p>{{item.foodName}}</p>
        </div>
        </div>
    </van-list>
    </div>
</template>
<style lang="less" scoped>
@import "~style/index.less";
.CommunityList {
  margin-top: 0.88rem;
  margin-bottom: 0.98rem;
  .ul {
    margin: 0 0.15rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    .li {
      // position: relative;
      border-radius: 0.05rem;
      width: 50%;
      box-sizing: border-box;
      padding: 0.1rem 0.15rem;
      vertical-align: top;
      // float: left;
      display: inline-block;
      img {
        width: 100%;
        // height: 50%;
        // border-radius: 5rem;
      }
      p {
        height: 0.8rem;
        font-size: 0.28rem;
        padding-left: 0.3rem;
      }
      div {
        position: absolute;
        bottom: 0.96rem;
        left: 0.2rem;
        img {
          width: 0.42rem;
          height: 0.42rem;
          border-radius: 5rem;
        }
        span {
          font-size: 0.26rem;
          margin-left: 0.14rem;
          line-height: 0.42rem;
        }
      }
    }
  }
}
</style>
<script>
import { mapGetters, mapMutations, mapState } from "vuex";
import { getData } from "../../api/api";
// import { List } from 'vant'
export default {
    data() {
        return {
            unlist: [],
            loading: false,
            finished: false
        };
    },
    computed: {
        ...mapState(["list", "listIndex", "toggle"])
    },
    methods: {
        ...mapMutations(["changeIndex", "changeToggle"]),
        jump(index) {
            this.$router.push("/community/news");
            this.changeIndex(index);
            this.changeToggle(0);
        },
    ...mapMutations(["addList"]),
    onLoad() {
        // 异步更新数据
        // setTimeout 仅做示例，真实场景中一般为 ajax 请求
        setTimeout(() => {
            for (let i = 0; i < 10; i++) {
            this.unlist.push(this.unlist.length + 1);
            }

            // 加载状态结束
            this.loading = false;

            // 数据全部加载完成
            if (this.unlist.length >= 40) {
            this.finished = true;
            }
        }, 1000);
    }
  },
  created() {
    getData().then(res => {
      //   console.log(res)
      this.addList(res);
    });
  }
};
</script>