<template>
    <div class="com-detail-main">
        <div class="title-box">
            <div class="title-box-l">
                <p class="title">关于出入境事项的申请审批</p>
                <p class="service-type">台湾居民来往大陆的通行证签发</p>
                <p class="base">基本编码：465156156151</p>
                <p class="base">实施编码：562+62626+62+6</p>
            </div>
            <div class="title-box-r">
                <button>立即办理</button>
            </div>
        </div>
        <div :id="item.id"  v-for="item in asideList" :key="item.id" class="item">
            <div class="item-title">
                <img src="@/assets/img/logo.png" alt="">
                <span>{{item.name}}</span>
            </div>
            <div class="item-content-wrap">
                <div class="item-content">
                    <ul>
                        <li>
                            <span class="item-detail-title">事项类型</span>
                            <span class="item-detail-val">行政许可</span>
                        </li>
                        <li>
                            <span class="item-detail-title">事项类型</span>
                            <span class="item-detail-val">行政许可</span>
                        </li>
                        <li>
                            <span class="item-detail-title">事项类型</span>
                            <span class="item-detail-val">行政许可</span>
                        </li>
                        <li>
                            <span class="item-detail-title">事项类型</span>
                            <span class="item-detail-val">行政许可</span>
                        </li>
                        <li>
                            <span class="item-detail-title">事项类型</span>
                            <span class="item-detail-val">行政许可</span>
                        </li>
                        <li>
                            <span class="item-detail-title">事项类型</span>
                            <span class="item-detail-val">行政许可</span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span class="item-detail-title">事项类型</span>
                            <span class="item-detail-val">行政许可</span>
                        </li>
                        <li>
                            <span class="item-detail-title">事项类型</span>
                            <span class="item-detail-val">行政许可</span>
                        </li>
                        <li>
                            <span class="item-detail-title">事项类型</span>
                            <span class="item-detail-val">行政许可</span>
                        </li>
                        <li>
                            <span class="item-detail-title">事项类型</span>
                            <span class="item-detail-val">行政许可</span>
                        </li>
                        <li>
                            <span class="item-detail-title">事项类型</span>
                            <span class="item-detail-val">行政许可</span>
                        </li>
                        <li>
                            <span class="item-detail-title">事项类型</span>
                            <span class="item-detail-val">行政许可</span>
                        </li>
                        <li>
                            <span class="item-detail-title">事项类型</span>
                            <span class="item-detail-val">行政许可</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        asideList:{
            type:Array,
            default:[]
        }
    },
    data(){
        return {
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
    .item{
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
            .item-content{
                width:1005px;
                margin:0 auto;
            }
        }
    }
}
</style>
