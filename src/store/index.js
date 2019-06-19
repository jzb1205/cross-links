
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
        navMap:[],
        beneMap:[]
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
        },
        getBeneMap(state,pload){
            state.beneMap = pload
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
                        if (pload.typeCode === 'infoBigType') {
                            let json = {
                                code: "",
                                menuTypeId: pload.typeCode,
                                sort: '',
                                status: "1",
                                type: null,
                                value: "全部类型",
                            }
                            res.data.unshift(json)
                        }
                        context.commit('getTypeData',res.data)
                    }else{
                        let json = {
                            code: "",
                            menuTypeId: pload.typeCode,
                            sort: '',
                            status: "1",
                            type: null,
                            value: "全部类型",
                        }
                        res.data.unshift(json)
                        context.commit('getSecSearchList',res.data)
                    }
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
            post(api.navigation.getNavigationList,pload).then(res=>{
                if (res.code === '000') {
                    context.commit('getNavMap',res.data)
                }
            })
        },
        getPolicyPage(context,pload){
            post(api.bene.getPolicyPage,pload).then(res=>{
                if (res.code === '000') {
                    context.commit('getBeneMap',res.data)
                }
            })
        }
    }
})
