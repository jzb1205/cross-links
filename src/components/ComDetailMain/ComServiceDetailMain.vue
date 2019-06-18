<template>
    <div class="com-detail-main">
        <h3>{{dataMap.title}}</h3>
        <div class="detail">
            <div class="detailLeft">
                <div class="time">创建时间：<span>{{dataMap.createTime | timeFormat}}</span></div>
                <div class="time">服务费用：
                    <span v-if="dataMap.payType==='0'">免费</span>
                    <span v-else>{{dataMap.amount}}元</span>
                </div>
                <div class="time">
                    <span v-if="dataMap.name || dataMap.type">类型：{{dataMap.name?dataMap.name:dataMap.type}}</span>
                    <span v-if="dataMap.timeLimit">服务期限：{{dataMap.timeLimit}}</span>
                </div>
            </div>
            <div class="title-box-r">
                <button @click="toOption">立即办理</button>
            </div>
        </div>
        <div class="main">
            <div class="asideCom" v-if="dataMap.introduction">
                <p class="item-title">服务简介：</p>
                <div class="item-content-wrap f14">
                    {{dataMap.introduction}}
                </div>
            </div>
            <div class="asideCom" v-if="dataMap.content">
                <p class="item-title">服务内容：</p>
                <div class="item-content-wrap" v-html='dataMap.content'></div>
            </div>
            <div class="asideCom" v-if="dataMap.process">
                <p class="item-title">服务流程：</p>
                <div class="item-content-wrap">
                    <img class="processImg" :src="imgHttp+dataMap.process" alt="">
                </div>
            </div>
            <div class="asideCom" v-if='attachmentList.length>0' >
                <p class="item-title">附件下载：</p>
                <p class="affixList" v-for="it in attachmentList" :key="it.id">
                    <a :href="'http://47.101.183.77:8089/file/downloadFile?id='+it.id.toString()">{{it.name}}</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        dataMap:{
            type:Object,
            default:()=>{
                return {}
            }
        },
        attachmentList:{
            type:Array,
            default:()=>{
                return []
            }
        },
        id:{
            type:Number,
            default:0
        }
    },
    data(){
        return {
            imgHttp:this.$imgUrl
        }
    },
    methods:{
        toOption(){
            if (!sessionStorage.getItem('token')) {
                this.$message({
                    message: '您还未登陆，请先登录',
                    type: 'error'
                });
                setTimeout(()=>{
                    this.$router.push({
                        path:'/login',
                        query:{
                            type:0
                        }
                    })
                },1500)
                return;
            }
            this.$router.push({
                path:'/serviceContaner/serviceOrder',
                query:{
                    id:this.id
                }
            })
        },
        saveUso(){
            this.$post(this.$api.order.saveUso,{
                serviceType:this.dataMap.type,
                serviceAmount:this.dataMap.amount,
                serviceName:this.dataMap.name,
                formInfo:'', 
                serviceInfoId:this.dataMap.id
            }).then((res)=>{
                if (res.code === '000') {
                    this.$message({
                        message:  res.msg,
                        type: 'success'
                    });
                }else{
                    this.$message({
                        message: res.msg,
                        type: 'error'
                    });
                }
            })
        },
        downLoad(id){
            window.location.href = 'http://47.101.183.77:8089/file/downloadFile?id='+id.toString()
        }
    }
}
</script>

<style lang='less' scoped>
.com-detail-main{
    border: 1px solid #ddd;
    background: #fff;
    min-height:600px;
    margin-top:14px;    
    width: 1120px;
    padding: 40px;
    h3{
        text-align: center;
        color:#455;
        margin:15px 0 40px;
    }
    .detail{
        overflow: hidden;
        border-bottom:1px dashed #eee;
        padding-bottom:15px;
        .detailLeft{
            float: left;
            .time{
                font-size: 14px;
                color:#666;
                margin-left:20px;
                span:nth-of-type(2){
                    margin-left:10px;
                }
            }
        }
        .title-box-r{
            float: right;
            margin-top:13px;
            button{
                width: 98px;
                height:39px;
                line-height:39px;
                font-size: 15px;
                border-radius:4px;
                background: rgb(223, 56, 29);
                color:#fff;
                cursor: pointer;
            }
        }
    }
    .main{
        padding:0 20px;
        .asideCom{
            margin-top: 40px;
            .item-title{
                font-size: 16px;
            }
            .item-content-wrap{
                margin-top: 28px;    
                margin-left: 6%;
                width: 85%;
                font-size:14px;
                .item-content{
                    width:1005px;
                    margin:0 auto;
                }
                .processImg{
                    width:200px;
                }
            }
            .f14{
                font-size: 15px;
            }
            .affixList{
                margin-top:15px;
                margin-left: 6%;
                width: 85%;
            }
        }

    }

}
</style>
