import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store =  new Vuex.Store({
  state: {
    list:[],
    listIndex:0,
    toggle:1,
  },
  mutations: {
    addList(state, params) {
      //params=要播放的歌曲列表
      for (let index = 0; index < 40; index++) {
        state.list.push(params.list[index])
        
      }
    },

    changeIndex(state,params){
      state.listIndex = params
    },
    changeToggle(state,params){
      state.toggle = params
    }
  },
  actions: {
  },
  modules: {
  }
});
export default store;