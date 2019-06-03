
import Vue from 'vue'
import Vuex from 'vuex'
import { post, get} from "@/fetch/http"
import api from '@/fetch/api/index'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isCollapse: true,
        searchList:[],
        secSearchList:[],
        serviceMap:{},
        infoMap:{},
        navMap:[]
    },
    mutations: {
        getIsCollapse(state,pload){
            state.isCollapse = pload.isCollapse
        },
        getTypeData(state,pload){
            state.searchList = pload
        },
        getSecSearchList(state,pload){
            state.secSearchList = pload
        },
        getServiceMap(state,pload){
            state.serviceMap = pload
        },
        getInfoMap(state,pload){
            state.infoMap = pload
        },
        getNavMap(state,pload){
            state.navMap = pload
            console.log(state.navMap)
        }
    },
    actions: {
        getType(context,pload){
            let param = {
                typeCode:pload.typeCode
            }
            post(api.common.getMtListByTc,param).then((res)=>{
                if (res.code === '000') {
                    if (pload.class === '1') {
                        context.commit('getTypeData',res.data)
                    }else{
                        context.commit('getSecSearchList',res.data)
                    }
                    console.log(res.data)
                }
            })
        },
        querySiListPage(context,pload){
            post(api.service.querySiListPage,pload).then(res=>{
                if (res.code === '000') {
                    context.commit('getServiceMap',res)
                }
            })
        },
        getInfoListPage(context,pload){
            post(api.information.getInfoListPage,pload).then(res=>{
                if (res.code === '000') {
                    context.commit('getInfoMap',res)
                }
            })
        },
        getNavigationList(context,pload){
            post(api.navigation.getNavigationList,{}).then(res=>{
                if (res.code === '000') {
                    context.commit('getNavMap',res.data)
                }
            })
        }
    }
})
