<template>
    <div class="user-wrap">
        <h3>用户基本信息设置</h3>
        <p v-for="it in userInfo" :key="it.label" class="item">
            <span>{{$t(it.label)}}：</span>
            <el-input v-if="it.inputType === 'password'" type="password" v-model="it.value" :disabled="it.isOption === 0" :placeholder="it.placeholder"></el-input>
            <el-input v-if="it.inputType === 'input'" v-model="it.value" :disabled="it.isOption === 0" :placeholder="it.placeholder"></el-input>
            <el-select v-if="it.inputType === 'select'" v-model="it.value">
                <el-option v-for="is in it.children" :key="is.id" :value="is.name">{{is.name}}</el-option>
            </el-select >
        </p>
        <p class="btn">
            <el-button @click='updateUiById'>{{$t('message.userCenter.bc')}}</el-button>
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            userInfoData:[
                {
                    label:'message.userCenter.yhm',
                    value:'',
                    type:'text',
                    isOption:1,
                    inputType:'input',
                    placeholder:"请输入用戶名"
                },
                {
                    label:'message.userCenter.mm',
                    value:'******',
                    type:'text',
                    isOption:0,
                    inputType:'password'
                },
                {
                    label:'message.userCenter.yx',
                    value:'',
                    type:'text',
                    isOption:1,
                    inputType:'input',
                    placeholder:"请输入邮箱"
                },
                {
                    label:'message.userCenter.nc',
                    value:'',
                    type:'text',
                    isOption:1,
                    inputType:'input',
                    placeholder:"请输入昵称"
                },
                {
                    label:'message.userCenter.xb',
                    value:'',
                    type:'text',
                    isOption:1,
                    inputType:'select',
                    placeholder:"请选择",
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
                    label:'message.userCenter.zsxm',
                    value:'',
                    type:'text',
                    isOption:1,
                    inputType:'input',
                    placeholder:"请输入真实姓名"
                },
                {
                    label:'message.userCenter.sjhm',
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
    computed: {
        userInfo(){
            return this.userInfoData
        }
    },
    created(){
        this.userInfo[0].value = this.userInfoSession.userName
        this.userInfo[1].value = '******'
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
                // password:this.userInfo[1].value,
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
