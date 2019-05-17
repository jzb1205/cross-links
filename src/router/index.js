import Vue from 'vue'
import Router from 'vue-router'

import index from '../pages/index.vue'
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
import serviceIndex from '../pages/service/index.vue'
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
            redirect:'/home',
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
                    path: '/information',
                    name: 'information',
                    component: information
                },
                {
                    path: '/nav',
                    name: 'nav',
                    component: nav
                },
                {
                    path: '/serviceIndex',
                    name: 'serviceIndex',
                    component: serviceIndex,
                    redirect:'/service',
                    children:[
                        {
                            path: '/service',
                            name: 'service',
                            component: service
                        },
                        {
                            path: '/serviceDetail',
                            name: 'serviceDetail',
                            component: serviceDetail
                        },
                    ]
                },
                {
                    path: '/user',
                    name: 'user',
                    component: user
                },
                {
                    path: '/informationDetail',
                    name: 'informationDetail',
                    component: informationDetail
                }
            ]
        }
    ]
})
