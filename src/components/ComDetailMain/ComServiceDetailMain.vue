<template>
    <div class="com-detail-main">
        <div class="title-box">
            <div class="title-box-l">
                <p class="title">{{dataMap.title}}</p>
                <p class="service-type">{{dataMap.introduction}}</p>
                <p class="base">基本编码：{{dataMap.baseCoding}}</p>
                <p class="base">实施编码：{{dataMap.implementCoding}}</p>
            </div>
            <div class="title-box-r">
                <button @click="toOption">立即办理</button>
            </div>
        </div>
        <div id="serve_aside_0" class="asideCom">
            <div class="item-title">
                <img src="@/assets/img/logo.png" alt="">
                <span>服务类型</span>
            </div>
            <div class="item-content-wrap f14">
                {{dataMap.type}}
            </div>
        </div>
        <div id="serve_aside_1" class="asideCom">
            <div class="item-title">
                <img src="@/assets/img/logo.png" alt="">
                <span>服务名称</span>
            </div>
            <div class="item-content-wrap f14">
                {{dataMap.name}}
            </div>
        </div>
        <div id="serve_aside_2" class="asideCom">
            <div class="item-title">
                <img src="@/assets/img/logo.png" alt="">
                <span>服务状态</span>
            </div>
            <div class="item-content-wrap f14">
                {{dataMap.status==='0'?'无效':"有效"}}
            </div>
        </div>
        <div id="serve_aside_3" class="asideCom">
            <div class="item-title">
                <img src="@/assets/img/logo.png" alt="">
                <span>服务费用</span>
            </div>
            <div class="item-content-wrap f14">
                {{dataMap.amount}}
            </div>
        </div>
        <div id="serve_aside_4" class="asideCom">
            <div class="item-title">
                <img src="@/assets/img/logo.png" alt="">
                <span>服务简介</span>
            </div>
            <div class="item-content-wrap f14">
                {{dataMap.introduction}}
            </div>
        </div>
        <div id="serve_aside_5" class="asideCom">
            <div class="item-title">
                <img src="@/assets/img/logo.png" alt="">
                <span>服务内容</span>
            </div>
            <div class="item-content-wrap" v-html='dataMap.content'></div>
        </div>
        <div id="serve_aside_7" class="asideCom">
            <div class="item-title">
                <img src="@/assets/img/logo.png" alt="">
                <span>服务流程</span>
            </div>
            <div class="item-content-wrap">
                <img :src="imgHttp+dataMap.process" alt="">
            </div>
        </div>
        <div id="serve_aside_8" class="asideCom">
            <div class="item-title">
                <img src="@/assets/img/logo.png" alt="">
                <span>服务期限</span>
            </div>
            <div class="item-content-wrap f14">
                {{dataMap.timeLimit | timeFormat}}
            </div>
        </div>
        <div id="serve_aside_9" class="asideCom">
            <div class="item-title">
                <img src="@/assets/img/logo.png" alt="">
                <span>附件下载</span>
            </div>
            <p class="affixList" v-if='attachmentList.length>0' v-for="it in attachmentList" :key="it.id">
                <a :href="$imgUrl+it.urlPath+it.realName" :download="it.realName">{{it.realName}}</a>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        asideList:{
            type:Array,
            default:[]
        },
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
            default:''
        }

    },
    data(){
        return {
            imgHttp:this.$imgUrl
        }
    },
    methods:{
        toOption(){
            this.$router.push({
                path:'/serviceContaner/serviceOrder',
                query:{
                    id:this.id
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
    min-width:900px;
    max-width:1400px;
    padding:40px 42px;
    .title-box{
        overflow: hidden;
        .title-box-l{
            float: left;
            .title{
                font-size: 22px;
                color:#292929;
            }
            .service-type{
                font-size: 14px;
                line-height: 40px;
                color:#333;
            }
            .base{
                font-size: 12px;
                color:#666;
            }
        }
        
        .title-box-r{
            float: right;
            button{
                margin-top: 30px;
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
    .asideCom{
        margin-top: 40px;
        .item-title{
            img{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                position: relative;
                top: 12px;
            }
            span{
                margin-left:10px;
                font-size: 20px;
            }
        }
        .item-content-wrap{
            margin-top: 28px;    
            margin-left: 6%;
            width: 85%;
            font-size:14px;
            img{
                width:200px;
            }
            .item-content{
                width:1005px;
                margin:0 auto;
            }
        }
        .f14{
            font-size: 14px;
            color:#666;
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
            }
            .fromHead{
                background: #f5f5f5;
                &.borderB{
                    border-bottom: 1px solid #ccc;
                }
            }
        }
        .affixList{
            margin-top:15px;
            margin-left: 6%;
            width: 85%;
        }
    }
}
</style>
