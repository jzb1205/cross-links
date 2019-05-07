<template>
    <div class="com-inter">
        <ul>
            <li>常用网站</li>
            <li v-for="(item,index) in interList" :key="index">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            interList:[
                {
                    name:'百度',
                    path:'1'
                },
                {
                    name:'淘宝',
                    path:'2'
                },
                {
                    name:'国美电器',
                    path:'3'
                },
                {
                    name:'京东',
                    path:'4'
                },
                {
                    name:'12306购买网',
                    path:'5'
                }
            ]
        }
    }
}
</script>

<style lang='less' scoped>
.com-inter{
    width: 1200px;
    margin:0 auto 30px;
    background: #ddd;
    ul{
        height:60px;
        overflow: hidden;
        li{
            float: left;
            width: 160px;
            height:34px;
            box-shadow: 0 0 10px #ccc;
            background: #fff;
            border-radius:5px;
            line-height:34px;
            text-align: center;
            margin-top:13px;
            margin-right:60px;
            cursor: pointer;
            &:nth-of-type(1){
                width:110px;
                box-shadow: 0 0 10px #ddd;
                background: #ddd;
                border-radius:none;
                margin-right:0;
                cursor: default;
            }
            &:nth-last-of-type(1){
                margin-right:0;
            }
        }
    }
}
</style>
