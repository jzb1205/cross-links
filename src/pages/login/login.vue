<template>
    <div class="login-wrap" ref="loginBox">
        <div class="inner-wrap"  ref="innerBox">
            <p class="title">{{$t(title)}}</p>
            <transition name="el-zoom-in-center">
                <ul class="register" v-if="show">
                    <li v-for="it in curList" :key="it.label">
                        <span>{{$t(it.label)}}：</span>
                        <el-input :type="it.type" v-model="it.value"></el-input>
                    </li>
                    <p class="btn" v-show="type===0">
                        <el-button type="danger" @click="toHome(0)">{{$t('message.login.dl')}}</el-button>
                    </p>
                    <p class="toOption" v-show="type===0">{{$t('message.login.myzh')}}<span @click="type=1">去{{$t('message.login.zc')}}</span></p>
                    <p class="btn" v-show="type===1">
                        <el-button type="danger" @click="toHome(1)">{{$t('message.login.zc')}}</el-button>
                    </p>
                    <p class="toOption" v-show="type===1">已有{{$t('message.login.zh')}}<span @click="type=0">去{{$t('message.login.dl')}}</span></p>
                </ul>
            </transition>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            type:0,
            show:false,
            registerData:[
                {
                    label:'message.login.yhm',
                    value:'',
                    type:'text'
                },
                {
                    label:'message.login.mm',
                    value:'',
                    type:'password'
                },
                {
                    label:'message.login.lxdh',
                    value:'',
                    type:'text'
                }
            ],
            loginData:[

                {
                    label:'message.login.yhm',
                    value:'',
                    type:'text'
                },
                {
                    label:'message.login.mm',
                    value:'',
                    type:'password'
                }
            ],
            curList:[],
            title:'message.login.dl'
        }
    },
    computed: {
        register(){
            return this.registerData
        },
        login(){
            return this.loginData
        },
    },
    mouted(){
    },
    created(){
        //回到登陆页面先清空token及登录信息
        sessionStorage.clear()
        setTimeout(()=>{
            this.show = true;
        },100)
        this.curList = this.login;
    },
    methods:{
        toHome(type){
            let len = this.curList.length;
            for (let index = 0; index < len; index++) {
                if (!this.curList[index].value) {
                    this.$message({
                        message: `${this.curList[index].label}不能为空`,
                        type: 'warning'
                    });
                    return;
                }

            }
            //type==0 登录  1 注册
            let url = type==0?this.$api.login.login:this.$api.login.register;
            let params = {
                userName:this.curList[0].value,
                password:this.curList[1].value
            }
            if (type === 1) {
                params.mobile = this.curList[2].value
            }
            this.$post(url,params).then((res)=>{
                if (res.code === '000') {
                    if (type===1) {
                        this.$message({
                            message: '注册成功',
                            type: 'success'
                        });
                        let params = {
                            userName:this.curList[0].value,
                            password:this.curList[1].value
                        }
                        this.toHome(type = 0)
                        setTimeout(()=>{
                            this.$router.push('/homeContaner')
                        },1000)
                    }else{
                        sessionStorage.setItem('token',res.data && res.data.token)
                        sessionStorage.setItem('userInfo',res.data && JSON.stringify(res.data.userInfo))
                        this.$message({
                            message: '登录成功',
                            type: 'success'
                        });
                        setTimeout(()=>{
                            this.$router.push('/homeContaner')
                        },1000)
                    }
                }else{
                    this.$message({
                        message: res.msg,
                        type: 'error'
                    });
                }
            })
        }

    },
    watch:{
        'type'(){
            this.curList = this.type !== 0?this.register:this.login
            this.title = this.type !== 0?'message.login.zc':"message.login.dl"
        }

    }
}
</script>

<style lang='less' scoped>
.login-wrap{
    overflow: hidden;
    min-width: 1200px;
    .inner-wrap{
        background: rgba(187, 17, 26);
        width:400px;
        margin:50px auto;
        padding:40px;
        border-radius:10px;
        .title{
            color: #fff;
            text-align: center;
            padding: 15px 0 20px;
            letter-spacing: 15px;
            font-size: 18px;
        }
        .register{
            li{
                line-height: 40px;
                span{
                    color:#fff;
                }
            }
        }
        .btn{
            text-align: center;
            .el-button--danger {
                color: rgba(187, 17, 26);
                background-color: #eee;
                border-color: #eee;
                margin-top:20px;
                width:100%;
                &:hover{
                    background: #fff;
                }
            }
        }
        .toOption{
            margin-top: 20px;
            text-align: center;
            color:#ddd;
            span{
                cursor: pointer;
                &:hover{
                    color:#fff;
                }
            }
        }
    }
}
</style>
