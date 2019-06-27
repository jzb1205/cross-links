<template>
    <div class="com-detail-main">
        <h3>{{dataMap.title}}</h3>
        <div class="detail">
            <div class="time">{{$t("message.info.sj")}}：<span>{{dataMap.createTime | timeFormat}}</span></div>
            <div class="source">{{$t("message.info.ly")}}：<span>{{dataMap.source}}</span></div>
            <div class="tag">
                <el-tag v-for="(it,index) in tagList" :key="index">{{it}}</el-tag>
            </div>
        </div>
        <div class="infoContent" v-html='dataMap.content'></div>
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
        }
    },
    data(){
        return {
        }
    },
    computed:{
        tagList(){
            let tagArr = []
            if (this.dataMap.tag) {
                tagArr = this.dataMap.tag.split(',')
            }
            return tagArr
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
    h3{
        text-align: center;
        color:#455;
        margin:15px 0 40px;
    }
    .detail{
        overflow: hidden;
        border-bottom:1px dashed #ccc;
        padding-bottom:15px;
        .time,.source{
            float: left;
            font-size: 14px;
            color:#666;
            margin-left:20px;
        }
        .source{
            float: left;
        }
        .tag{
            float: right;
            margin-right:20px;
            .el-tag{
                margin-left:10px;  
                height: 22px;
                line-height: 20px;
                border-radius: 10px;
            }
        }
    }
    .infoContent{
        margin:20px;
    }

}
</style>
