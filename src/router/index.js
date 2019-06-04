import Vue from 'vue'
import Router from 'vue-router'

import index from '../pages/index.vue'
//登录注册
import login from '../pages/login/login.vue'
//首页
import home from '../pages/home/home.vue'
//通惠政
import bene from '../pages/bene/bene.vue'
//通资讯
import information from '../pages/information/infomation.vue'
import informationDetail from '../pages/information/informationDetail.vue'
//通导航
import nav from '../pages/nav/nav.vue'
//通服务
import contaner from '../pages/contaner.vue'
import service from '../pages/service/service.vue'
import serviceDetail from '../pages/service/serviceDetail.vue'
//用户中心
import user from '../pages/user/user.vue'

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
                    path: '/home',
                    name: 'home',
                    component: home
                },
                {
                    path: '/bene',
                    name: 'bene',
                    component: bene
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
                    path: '/beneContaner',
                    name: 'beneContaner',
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
                    ]
                },
                {
                    path: '/user',
                    name: 'user',
                    component: user,
                    beforeEnter: (to, from, next) => {
                      verifyLogin(next);
                    }
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
    if (window.localStorage.getItem('userName')) {
      next();
    } else {
      next('/');
    }
  }