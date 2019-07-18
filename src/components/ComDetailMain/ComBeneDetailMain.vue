<template>
    <div class="com-detail-main">
        <h3>{{dataMap.title}}</h3>
        <div class="detail">
            <div class="detailLeft">
                <div class="timeL time">{{$t("message.bene.cjsj")}}：<span>{{dataMap.createTime | timeFormat}}</span></div>
                <div class="timeR time">
                    <div class="baseInfoT">
                        <span v-if="dataMap.source">{{$t("message.bene.hzly")}}：{{dataMap.source}}</span>
                        <span v-if="dataMap.type">{{$t("message.bene.hzlx")}}：{{dataMap.type}}</span>
                        <span v-if="dataMap.provinceName">{{$t("message.bene.szqy")}}：{{dataMap.provinceName}}</span>
                    </div>
                    <div class="tag" v-if="tagList.length>0">
                        <el-tag v-for="(it,index) in tagList" :key="index">{{it}}</el-tag>
                    </div>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="asideCom" v-if="dataMap.content">
                <p class="item-title">{{$t("message.bene.hzlr")}}：</p>
                <div class="item-content-wrap" v-html='dataMap.content'></div>
            </div>
            <div class="asideCom" v-if='attachmentList.length>0' >
                <p class="item-title">{{$t("message.bene.fjxz")}}：</p>
                <p class="item-content-wrap" v-for="it in attachmentList" :key="it.id">
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
    computed:{
        tagList(){
            let tagArr = []
            if (this.dataMap.tag) {
                tagArr = this.dataMap.tag.split(',')
            }
            return tagArr.slice(0,6)
        }
    },
    methods:{
        toOption(){
            let flag = !this.dataMap.formTemplate
            if (flag) {
                this.saveUso()
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
            overflow: hidden;
            .time{
                font-size: 14px;
                color:#666;
                margin-left:20px;
                span:nth-of-type(2){
                    margin-left:10px;
                }
            }
            .timeL{
                float: left;
            }
            .timeR{
                float: right;
                text-align: right;
                .tag{
                    margin-top: 10px;
                    .el-tag{
                        margin-left:10px;  
                        height: 22px;
                        line-height: 20px;
                        border-radius: 10px;
                    }
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
                margin-top: 20px;
                margin-left: 6%;
                width: 94%;
                font-size:14px;
                .item-content{
                    width:1005px;
                    margin:0 auto;
                }
            }
            .f14{
                font-size: 18px;    
                color: #444;
            }
        }

    }

}
</style>
