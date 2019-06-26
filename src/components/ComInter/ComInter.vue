<template>
    <div class="com-inter">
        <ul>
            <li>常用网站</li>
            <li v-for="(item,index) in interList" :key="index" @click="toLink(item.path)">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            interList:[
                {
                    name:'台海网',
                    path:'http://www.taihainet.com/'
                },
                {
                    name:'台胞之家',
                    path:'http://tailian.taiwan.cn/'
                },
                {
                    name:'国台办',
                    path:'http://www.gwytb.gov.cn/'
                },
                {
                    name:'京东',
                    path:'https://www.jd.com/?cu=true&utm_source=baidu-search&utm_medium=cpc&utm_campaign=t_262767352_baidusearch&utm_term=27669656391_0_ef7f0194c66d45c6b072824a6a4fb622'
                },
                {
                    name:'12306购买网',
                    path:'https://kyfw.12306.cn/otn/leftTicket/init'
                }
            ]
        }
    },
    methods:{
        toLink(url){
            window.location.href = url
        }
    }
}
</script>

<style lang='less' scoped>
.com-inter{
    width: 1232px;
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
