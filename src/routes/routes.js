/* 
所有路由配置的数组

路由组件懒加载:
    1). 在打包时路由组件会被单独打包(代码分割: code split)
    2). 默认不请求加载路由组件打包文件, 当请求需要路由组件时才请求加载
1. import动态引入: 
    import(模块路径)
    结果: 被引入的模块会被单独打包(代码分割: code split)
2. 配置的路由组件是函数(返回动态加载的路由组件模块)
    函数开始是不执行(开始不请求加载单独打包的路由组件模块代码)
    当请求对应路径需要显示组件界面时, 去加载路由组件打包文件

作用: 减小首屏需要加载的js文件 ==> 显示更快
*/

import GoodDetail from '../components/GoodDetail/GoodDetail.vue'
import Imgs from '../components/GoodDetail/Imgs.vue'
import Parameter from '../components/GoodDetail/Parameter.vue'
import Questions from '../components/GoodDetail/Questions.vue'
import Search from '../components/search/search.vue'

// 必买清单
import MustBuy from '../pages/mustBuy/mustBuy.vue'
import CareChoice from '../pages/mustBuy/channel/channel.vue'
import CoolMachine from '../pages/mustBuy/channel/phone.vue'
import Electrics from '../pages/mustBuy/channel/electrics.vue'
import Supermarket from '../pages/mustBuy/channel/supermarket.vue'
import Closes from '../pages/mustBuy/channel/closes.vue'
import Category from '../pages/category/category.vue'
import Home from '../pages/Home/Home.vue'
import Profile from '../pages/profile/profile.vue'
import ShopCar from '../pages/shopCar/shopCar.vue'



export default [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/category',
        component: Category, 
    },
    {
        path:'/mustBuy',
        component: MustBuy,
        children:[
            {
                path:'careChoice',
                component: CareChoice,
            },
            {
                path:'coolMachine',
                component: CoolMachine,
            },
            {
                path:'electrics',
                component: Electrics,
            },
            {
                path:'supermarket',
                component: Supermarket,
            },
            {
                path:'closes',
                component: Closes,
            },
            {
                path:'',
                redirect: 'careChoice',
            }
        ]
    },
    {
        path:'/shopCar',
        component: ShopCar,
    },
    {
        path:'/profile',
        component: Profile,
    },
    {
        path:'',
        redirect: 'home',
    },
    {
        path:'/search',
        component: Search,
    },
    {
        path:'/gooddetail',
        component: GoodDetail,
        children:[
            {
                path:'imgs',
                component: Imgs,
            },
            {
                path:'parameter',
                component: Parameter,
            },
            {
                path:'questions',
                component:Questions,
            },
            {
                path:'',
                redirect: 'imgs', 
            }
        ]
    }
]



//   //   name: 'shop',
//   //   path: '/shop/:id',
//   //   props: true, // 将所有params参数转换成标签属性传递给子路由组件
//   //   // props: toRoute => ({id: toRoute.params.id})
//   //   component: Shop,
//   //   // children: [
//   //   //   {
//   //   //     path: 'goods',
//   //   //     component: Goods
//   //   //   },
// ]