import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../public/icon/iconfont.css'
import axios from './utilis/axios'
import { List } from 'vant';

Vue.use(List);
Vue.config.productionTip = false
Vue.prototype.$axios = axios
// 讲axios挂载到vue的原型上，组件继承于实例，所以vue的原型上的属性，组件也有

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
