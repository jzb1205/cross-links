<template>
    <div class="userWrap">
        <aside class="userAside">
            <ul>
                <li tag="li" 
                    :class="{'activeUser':curId === it.id}" 
                    @click="getCurId(it)"
                    v-for="it in userAside" 
                    :key="it.id">{{it.name}}
                </li>
            </ul>
        </aside>
        <div class="userMain">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            userAside:[
                {
                    id:'0',
                    path:'/userContanter',
                    name:'基本信息'
                },
                {
                    id:'1',
                    path:'/userContanter/orderMnage',
                    name:'订单管理'
                }
            ],
            curId:'0'
        }
    },
    methods:{
        getCurId(it){
            this.curId = it.id 
            this.$router.push(it.path)
        }
    }
}
</script>

<style lang='less' scoped>
.userWrap{
    overflow: hidden;
    width:1200px;
    margin:50px auto;
    .userAside{
        width:150px;
        float: left;
        background: #fff;
        li{
            text-align: center;
            line-height:50px;
            font-size: 16px;
            color:#333;
            cursor: pointer;
            &.activeUser{
                color:#fff;
                background: rgba(187, 17, 26);
            }
        }
    }
    .userMain{
        float: left;
        width:830px;
        margin-left: 20px;
        padding:50px 100px;
        background: #fff;
    }
}
</style>

