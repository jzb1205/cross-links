import Vue from 'vue'
import Router from 'vue-router'

import index from '../pages/index.vue'
//登录注册
import login from '../pages/login/login.vue'
//首页
import home from '../pages/home/home.vue'
import serviceItem from '../pages/home/serviceItem.vue'
//通惠政
import bene from '../pages/bene/bene.vue'
import beneDetail from '../pages/bene/beneDetail.vue'
//通资讯
import information from '../pages/information/infomation.vue'
import informationDetail from '../pages/information/informationDetail.vue'
//通导航
import nav from '../pages/nav/nav.vue'
//通服务
import contaner from '../pages/contaner.vue'
import service from '../pages/service/service.vue'
import serviceDetail from '../pages/service/serviceDetail.vue'
import serviceOrder from '../pages/order/serviceOrder.vue'
import serviceOrderDetail from '../pages/order/serviceOrderDetail.vue'
//用户中心
import userContanter from '../pages/user/index.vue'
import user from '../pages/user/user.vue'
import orderMnage from '../pages/user/orderMnage.vue'

//关于我们
import aboutMe from '../pages/aboutMe/aboutMe.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index,
            redirect:'/login',
            children: [
                {
                    path: '/homeContaner',
                    name: 'homeContaner',
                    component: contaner,
                    children:[
                        {
                            path: '',
                            name: 'home',
                            component: home
                        },
                        {
                            path: 'serviceItem',
                            name: 'serviceItem',
                            component: serviceItem
                        },
                    ]
                },
                {
                    path: '/benContaner',
                    name: 'benContaner',
                    component: contaner,
                    children:[
                        {
                            path: '',
                            name: 'bene',
                            component: bene
                        },
                        {
                            path: 'beneDetail',
                            name: 'beneDetail',
                            component: beneDetail
                        },
                    ]
                },
                {
                    path: '/infoContaner',
                    name: 'infoContaner',
                    component: contaner,
                    children:[
                        {
                            path: '',
                            name: 'information',
                            component: information
                        },
                        {
                            path: 'informationDetail',
                            name: 'informationDetail',
                            component: informationDetail
                        },
                    ]
                },
                {
                    path: '/nav',
                    name: 'nav',
                    component: nav
                },
                {
                    path: '/serviceContaner',
                    name: 'serviceContaner',
                    component: contaner,
                    children:[
                        {
                            path: '',
                            name: 'service',
                            component: service
                        },
                        {
                            path: 'serviceDetail',
                            name: 'serviceDetail',
                            component: serviceDetail
                        },
                        {
                            path: 'serviceOrder',
                            name: 'serviceOrder',
                            component: serviceOrder
                        },
                    ]
                },
                {
                    path: '/userContanter',
                    name: 'userContanter',
                    component: userContanter,
                    children:[
                        {
                            path: '',
                            name: 'user',
                            component: user
                        },
                        {
                            path: 'orderMnage',
                            name: 'orderMnage',
                            component: orderMnage
                        },
                        {
                            path: 'serviceOrderDetail',
                            name: 'serviceOrderDetail',
                            component: serviceOrderDetail
                        }
                    ],
                    beforeEnter: (to, from, next) => {
                      verifyLogin(next);
                    }
                },
                {
                    path: '/aboutMe',
                    name: 'aboutMe',
                    component: aboutMe
                },
                {
                    path: '/login',
                    name: 'login',
                    component: login
                },
            ]
        },
    ]
})


// 未登录状态，个人中心全都跳转login
function verifyLogin(next) {
    if (window.sessionStorage.getItem('token')) {
      next();
    } else {
      next('/');
    }
  }