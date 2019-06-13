<template>
    <div class="userWrap">
        <aside class="userAside">
            <ul>
                <li tag="li" 
                    :class="{'activeUser':curId === it.id}" 
                    @click="getCurId(it)"
                    v-for="it in userAside" 
                    :key="it.id">
                    <span class="wrap"></span>
                    <span>{{it.name}}</span>
                    
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
    position: relative;
    .userAside{    
        position: absolute;
        top: 0;
        left: 0;
        width:150px;
        float: left;
        background: #fff;
        li{
            text-align: center;
            line-height:50px;
            font-size: 16px;
            position: relative;
            color:#333;
            cursor: pointer;
            span{
                display: block;
                width:100%;
                height:100%;
                position: relative;
                z-index: 103;
            }
            .wrap{
                position: absolute;
                top:0;
                left:0;
                z-index: 102;
                background: rgba(187, 17, 26);
                margin-left:-150px;
                transition: all ease .4s;
            }
            &.activeUser{
                color:#fff;
                background: rgba(187, 17, 26);
            }
            &:hover{
                color:#fff;
                .wrap{
                    margin-left:0;
                }
            }
        }
    }
    .userMain{
        float: left;
        width:830px;
        margin-left: 170px;
        padding:50px 100px;
        background: #fff;
    }
}
</style>

