<template>
    <div class="login-wrap" ref="loginBox">
        <div class="inner-wrap"  ref="innerBox">
            <ul class="register">
                <li v-for="it in curList" :key="it.label">
                    <span>{{it.label}}：</span>
                    <el-input :type="it.type" v-model="it.value"></el-input>
                </li>
                <p class="btn" v-show="type===0">
                    <el-button type="danger" @click="toHome(0)">登陆</el-button>
                </p>
                <p class="toOption" v-show="type===0">没有账号<span @click="type=1">去注册</span></p>
                <p class="btn" v-show="type===1">
                    <el-button type="danger" @click="toHome(1)">注册</el-button>
                </p>
                <p class="toOption" v-show="type===1">已有账号<span @click="type=0">去登陆</span></p>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { setTimeout } from 'timers';
import { sep } from 'path';
export default {
    data(){
        return{
            type:0,
            register:[
                {
                    label:'用户名',
                    value:'',
                    type:'text'
                },
                {
                    label:'密码',
                    value:'',
                    type:'password'
                },
                {
                    label:'联系电话',
                    value:'',
                    type:'text'
                }
            ],
            login:[
                
                {
                    label:'用户名',
                    value:'',
                    type:'text'
                },
                {
                    label:'密码',
                    value:'',
                    type:'password'
                }
            ],
            curList:[]
        }
    },
    mouted(){
    },
    created(){
        //回到登陆页面先清空token及登录信息
        sessionStorage.clear()
        // this.type = this.$route.query.type
        this.$nextTick(()=>{
            let width = window.screen.width;
            let height = window.screen.height;
            // this.$refs.loginBox.style.width = width-148+'px';
            this.$refs.loginBox.style.height = height-150+'px';
            this.$refs.innerBox.style.marginTop = (parseInt(this.$refs.loginBox.style.height) - 480)/2+'px';
        });
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
                    sessionStorage.setItem('token',res.data && res.data.token)
                    sessionStorage.setItem('userInfo',res.data && JSON.stringify(res.data.userInfo))
                    this.$message({
                        message: type==0?'登录成功':'注册成功',
                        type: 'success'
                    });
                    setTimeout(()=>{
                        this.$router.push('/home')
                    },1000)
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
        }
        
    }
}
</script>

<style lang='less' scoped>
.login-wrap{
    overflow: hidden;
    .inner-wrap{
        background: rgba(187, 17, 26);
        width:400px;
        margin:50px auto 0;
        padding:40px;
        border-radius:10px;
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
