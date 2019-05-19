<template>
    <div class="user-wrap">
        <h3>用户基本信息设置</h3>
        <p v-for="it in userInfo" :key="it.label" class="item">
            <span class="label">{{it.label}}</span>
            <el-input v-model="it.value"></el-input>
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
                    value:''
                },
                {
                    label:'密码：',
                    value:''
                },
                {
                    label:'邮箱：',
                    value:''
                },
                {
                    label:'昵称：',
                    value:''
                },
                {
                    label:'性别：',
                    value:''
                },
                {
                    label:'真实姓名：',
                    value:''
                },
                {
                    label:'手机号码：',
                    value:''
                },
                {
                    label:'用户ID ：',
                    value:''
                },
                
            ]
        }
    }
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
        .el-input{
            width:78%;
        }
    }
}
</style>
