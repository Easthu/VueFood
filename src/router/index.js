import Vue from 'vue'
import VueRouter from 'vue-router'
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
   	return VueRouterPush.call(this, to).catch(err=> err)
}
const Home = () =>import('components/Home')
const Classification = () =>import('components/Classification')
const Community = () =>import(  'components/Community')
const My = () =>import( 'components/My')
const CommunityNews = () =>import( 'components/CommunityNews')
const CommunityAdd = () =>import('components/CommunityAdd')
const MyHelp = () =>import('components/MyHelp')
const MyImfo = () =>import('components/MyImfo')
const MyRel = () =>import('components/MyRel')

Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {
      path: '/',
      // name: 'Home',
      redirect: '/home'
    },
    {
      path: '/home',
      // name: 'Home',
      component:Home
    },
    {
      path:'/classification',
      // name:'Classification',
      component:Classification
    },
    {
      path:'/community',
      // name:'Community',
      component:Community,
      children:[
        {
          path:"news",
          component:CommunityNews
        },
        {
          path:'add',
          component:CommunityAdd,
        }
      ]
    },
    {
      path:'/my',
      // name:'My',
      component:My,
      children:[
        {
          path:'help',
          component:MyHelp
        },
        {
          path:'imfo',
          component:MyImfo
        },
        {
          path:'rel',
          component:MyRel
        }
      ]
    }
  ]
})

export default router
