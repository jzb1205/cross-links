<template>
    <div class="service-order-main">
        <h4 class="t_header">{{$t("message.service.fwddxxtx")}}</h4>
        <div id="serve_aside_6" class="asideCom">
            <div class="item-content-wrap formTemplate f14" v-if="list.length>0" >
                <ul class="fromHead" :class="{'borderB':list.length==0}">
                    <li>{{$t("message.service.mc")}}</li>
                    <li>信息</li>
                </ul>
                <ul class="fromItem"
                        v-for="(it,index) in list" :key="index">
                    <li>
                        {{it.name}}
                    </li>
                    <li>
                        <el-input v-model="it.value"></el-input>
                    </li>
                </ul>
            </div>
            <p class="btn">
                <el-button type="primary" @click="saveUso">{{$t("message.service.qrdd")}}</el-button>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    components:{
    },
    data(){
        return {
            breadList:[
                {
                    path:'/information',
                    name:'通服务'
                },
                {
                    path:'',
                    name:'办理服务'
                }
            ],
            imgHttp:this.$imgUrl,
            list:[],
            dataMap:{}
        }
    },
    created(){
        this.querySiById()
    },
    methods:{
        querySiById(){
            this.$post(this.$api.service.querySiById,{
                id:this.$route.query.id
            }).then((res)=>{
                if (res.code === '000') {
                    this.dataMap = res.data
                    this.list = Object.assign([],this.dataMap && this.dataMap.formTemplate && JSON.parse(this.dataMap.formTemplate).dataList)
                }else{
                    this.$message({
                        message: '获取服务详情失败',
                        type: 'error'
                    });
                }
            })
        },
        saveUso(){
            let formList = this.dataMap && this.dataMap.formTemplate && JSON.parse(this.dataMap.formTemplate).dataList
            formList = Object.assign([],this.list)
            this.$post(this.$api.order.saveUso,{
                serviceType:this.dataMap.type,
                serviceAmount:this.dataMap.amount,
                serviceName:this.dataMap.name,
                formInfo:JSON.stringify(formList), 
                serviceInfoId:this.dataMap.id
            }).then((res)=>{
                if (res.code === '000') {
                    this.$message({
                        message: '服务下单成功',
                        type: 'success'
                    });
                }else{
                    this.$message({
                        message: '服务下单失败',
                        type: 'error'
                    });
                }
                this.$router.push({
                    path:'/serviceContaner/serviceDetail',
                    query:{
                        id:this.$route.query.id
                    }
                })
            })
        }
    }
}
</script>

<style lang='less' scoped>
.service-order-main{
    min-height:500px;
    width:1200px;
    margin:15px auto 25px;
    overflow: hidden;
    padding:50px;
    background: #fff;
    .t_header{    
        width: 70%;
        margin: 20px auto 35px;
        border-left:6px solid rgba(187, 17, 26);
        color:#333;
        padding-left:2%;
    }
    .asideCom{
        width:75%;
        margin:0 auto;
        .item-title{
            img{    
                width: 40px;
                height: 40px;
                border-radius: 50%;
                position: relative;
                top: 12px;
            }
            span{
                font-size: 16px;
            }
        }
        .item-content-wrap{
            margin:20px 0 20px 45px;
        }
        .pic{
            img{
                width: 200px;
                height:200px;
            }
        }
        .f14{
            font-size: 14px;
        }
        .formTemplate{
            .fromHead,.fromItem{
                display: flex;
                border:1px solid #ccc;
                border-bottom:none;
                li{
                    flex:1;
                    height:50px;
                    line-height: 50px;
                    text-align: center;
                    &:nth-of-type(1){
                        text-indent: 15px;
                    }
                    &:nth-last-of-type(1){
                        cursor: pointer;
                    }
                }
            }
            .fromItem{
                color:#666;
                &:nth-last-of-type(1){
                    border-bottom:1px solid #ccc;
                }
                .el-input{
                    width:220px;
                }
            }
            .fromHead{
                background: #f5f5f5;
                &.borderB{
                    border-bottom: 1px solid #ccc;
                }
            }
        }
        .btn{
            text-align: center;
            margin:55px auto 35px;
        }
    }
}
</style>
