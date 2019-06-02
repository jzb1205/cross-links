// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
require('@/assets/css/reset.less')

import { post, get} from "./fetch/http";
import api from './fetch/api/index'
import comPagination from './components/comPagination/comPagination'
import Moment from 'moment'
import imgUrl from '../static/imgUrl'

Vue.component('com-pagination',comPagination)
Vue.use(ElementUI)

Vue.filter('timeFormat',function(value,type){
    if(!value) return
    let curType = type?type:'YYYY-MM-DD hh:mm:ss'
    return Moment().format(curType);
})
Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.$api = api
Vue.prototype.$imgUrl = imgUrl

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
