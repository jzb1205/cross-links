import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import message from './langs'

// const i18n = new VueI18n({
//     locale:localStorage.lang || 'cn',
//     message
// })
import 
const i18n = new VueI18n({
    locale: localStorage.lang || 'cn',  // 语言标识
    messages: {
        'cn': require('./langs/cn'),
        'tw': require('./langs/tw')
    }
})
export default i18n