<template>
    <div class="com-detail-main">
        <h3>{{dataMap.title}}</h3>
        <div class="detail">
            <div class="detailLeft">
                <div class="time">
                        {{$t("message.service.cjsj")}}：<span>{{dataMap.createTime | timeFormat}}</span></div>
                <div class="time">
                        {{$t("message.service.fwfy")}}：
                    <span v-if="dataMap.payType==='0'">免费</span>
                    <span v-else>{{dataMap.amount}}元</span>
                </div>
                <div class="time">
                    <span v-if="dataMap.name || dataMap.type">
                            {{$t("message.service.lx")}}：{{dataMap.name?dataMap.name:dataMap.type}}</span>
                    <span v-if="dataMap.timeLimit">
                            {{$t("message.service.fwqx")}}：{{dataMap.timeLimit}}</span>
                </div>
            </div>
            <div class="title-box-r">
                <button @click="toOption">
                        {{$t("message.service.ljbl")}}</button>
            </div>
        </div>
        <div class="main">
            <div class="asideCom" v-if="dataMap.introduction">
                <p class="item-title">
                        {{$t("message.service.fwjj")}}：</p>
                <div class="item-content-wrap f14">
                    {{dataMap.introduction}}
                </div>
            </div>
            <div class="asideCom" v-if="dataMap.content">
                <p class="item-title">
                        {{$t("message.service.fwlr")}}：</p>
                <div class="item-content-wrap" v-html='dataMap.content'></div>
            </div>
            <div class="asideCom" v-if="dataMap.process">
                <p class="item-title">
                        {{$t("message.service.fwlc")}}：</p>
                <div class="item-content-wrap">
                    <img class="processImg" @click='showPop=!showPop' :src="imgHttp+dataMap.process" alt="">
                </div>
            </div>
            <div class="asideCom" v-if='attachmentList.length>0' >
                <p class="item-title">
                        {{$t("message.service.fjxz")}}：</p>
                <p class="affixList" v-for="it in attachmentList" :key="it.id">
                    <a :href="'http://47.101.183.77:8089/file/downloadFile?id='+it.id.toString()">{{it.name}}</a>
                </p>
            </div>
        </div>
        <com-dialog-pop :imgUrl='dataMap.process' :showPop="showPop"></com-dialog-pop>
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <span>是否确认办理本业务？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveUso">确 定</el-button>
            </span>
            </el-dialog>
    </div>
</template>

<script>
import ComDialogPop from "@/components/ComDialogPop/ComDialogPop";
export default {
    components:{
        ComDialogPop
    },
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
            imgHttp:this.$imgUrl,
            showPop:false,
            dialogVisible:false
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
            if (this.dataMap.formTemplate === '{}') {
                this.dialogVisible = true
            }else{
                this.$router.push({
                    path:'/serviceContaner/serviceOrder',
                    query:{
                        id:this.id
                    }
                })
            }
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
                this.dialogVisible = false
            })
        },
        downLoad(id){
            window.location.href = 'http://47.101.183.77:8089/file/downloadFile?id='+id.toString()
        },
        handleClose(){
            this.dialogVisible = false
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
                font-size: 20px;
            }
            .item-content-wrap{
                margin-top: 28px;    
                margin-left: 6%;
                width: 85%;
                font-size:18px;
                .item-content{
                    width:1005px;
                    margin:0 auto;
                }
                .processImg{
                    width:200px;
                }
            }
            .f14{
                font-size: 18px;    
                color: #444;
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
