<template>
    <div class="user-wrap">
        <h3>用户基本信息设置</h3>
        <p v-for="it in userInfo" :key="it.label" class="item">
            <span>{{it.label}}</span>
            <el-input v-if="it.inputType === 'input'" v-model="it.value" :disabled="it.isOption === 0" :placeholder="it.placeholder"></el-input>
            <el-select v-if="it.inputType === 'select'" v-model="it.value">
                <el-option v-for="is in it.children" :key="is.id" :value="is.name">{{is.name}}</el-option>
            </el-select >
        </p>
        <p class="btn">
            <el-button @click='updateUiById'>保存</el-button>
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            userInfo:[
                {
                    label:'用户名：',
                    value:'',
                    type:'text',
                    isOption:1,
                    inputType:'input',
                    placeholder:"请输入用户名"
                },
                {
                    label:'密码：',
                    value:'',
                    type:'text',
                    isOption:0,
                    inputType:'input'
                },
                {
                    label:'邮箱：',
                    value:'',
                    type:'text',
                    isOption:1,
                    inputType:'input',
                    placeholder:"请输入邮箱"
                },
                {
                    label:'昵称：',
                    value:'',
                    type:'text',
                    isOption:1,
                    inputType:'input',
                    placeholder:"请输入昵称"
                },
                {
                    label:'性别：',
                    value:'',
                    type:'text',
                    isOption:1,
                    inputType:'select',
                    placeholder:"请选择性别",
                    children:[
                        {
                            id:'',
                            name:'保密'
                        },
                        {
                            id:'0',
                            name:'男'
                        },
                        {
                            id:'1',
                            name:'女'
                        },
                    ]
                },
                {
                    label:'真实姓名：',
                    value:'',
                    type:'text',
                    isOption:1,
                    inputType:'input',
                    placeholder:"请输入真实姓名"
                },
                {
                    label:'手机号码：',
                    value:'',
                    type:'text',
                    isOption:1,
                    inputType:'input',
                    placeholder:"请输入手机号码"
                },
                
            ],
            userInfoSession:sessionStorage.getItem('userInfo') && JSON.parse(sessionStorage.getItem('userInfo'))
        }
    },
    created(){
        this.userInfo[0].value = this.userInfoSession.userName
        this.userInfo[1].value = this.userInfoSession.password
        this.userInfo[2].value = this.userInfoSession.eMail
        this.userInfo[3].value = this.userInfoSession.nickName
        this.userInfo[4].value = this.userInfoSession.sex
        this.userInfo[5].value = this.userInfoSession.realName
        this.userInfo[6].value = this.userInfoSession.mobile
    },
    methods:{
        updateUiById(){
            let params = {
                id:this.userInfoSession.id,
                userName:this.userInfo[0].value,
                password:this.userInfo[1].value,
                eMail:this.userInfo[2].value,
                nickName:this.userInfo[3].value,
                sex:this.userInfo[4].value,
                realName:this.userInfo[5].value,
                mobile:this.userInfo[6].value
            }
            this.$post(this.$api.user.updateUiById,params).then((res)=>{
                this.$message({
                    message: '修改个人信息成功',
                    type: 'success'
                });
            })
        }
    },
}
</script>

<style lang='less' scoped>
.user-wrap{
    width:1000px;
    margin: 50px auto;
    padding:50px 100px;
    background: #fff;
    h3{
        border-left:6px solid rgba(187, 17, 26);
        color:rgba(187, 17, 26);
        padding-left: 20px;
        margin-bottom: 50px;
    }
    .item{
        width:500px;
        margin:0 auto;
        line-height:50px;
        span{
            display: inline-block;
            width:20%;
            text-align: right;
        }
        .el-input,.el-select{
            width:78%;
        }
    }
    .btn{
        margin:35px;
        text-align: center;
        .el-button{
            color: rgba(187, 17, 26);
            border-color: rgba(187, 17, 26);
            background-color: rgba(187, 17, 26,.2);;
            padding:12px 20px 12px 40px;
            letter-spacing: 20px;
            &:active{
                color: rgba(187, 17, 26);
                border-color: rgba(187, 17, 26);
            }
            &:focus,&:hover{
                border-color: rgba(187, 17, 26);
                background: rgba(187, 17, 26);
                color:#fff;
            }
        }
    }
}
</style>
