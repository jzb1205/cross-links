// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
require('@/assets/css/reset.less')

import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import { post, get} from "./fetch/http";
import api from './fetch/api/index'
import comPagination from './components/comPagination/comPagination'
import Moment from 'moment'
import imgUrl from '../static/imgUrl'
import VDistpicker from 'v-distpicker'
import comDIstPicker from './components/comDIstPicker/comDIstPicker'

Vue.component('com-pagination',comPagination)
Vue.component('v-distpicker', VDistpicker);
Vue.component('com-dist-picker',comDIstPicker)
Vue.use(ElementUI)

Vue.filter('timeFormat',function(value,type = 'YYYY-MM-DD'){
    if (value) {
        return Moment(value).format(type)
    } else {
        return value
    }
})
Vue.filter('dateformat', function (dataStr, pattern) {
    if (dataStr) {
      return moment(dataStr).format(pattern)
    } else {
      return dataStr
    }
  })
Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.$api = api
Vue.prototype.$imgUrl = imgUrl

import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
import messages from './i18n/langs/'
const i18n = new VueI18n({
  locale: localStorage.lang?localStorage.lang:'cn',
  messages
})

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: {
    App
  },
  template: '<App/>'
})
