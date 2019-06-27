<template>
    <div class="com-inter">
        <ul>
            <li>{{$t('message.cywz.cywz')}}</li>
            <li v-for="(item,index) in interList" :key="index" @click="toLink(item.path)">{{$t(item.name)}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            inter:[
                {
                    name:'message.cywz.thw',
                    path:'http://www.taihainet.com/'
                },
                {
                    name:'message.cywz.tbzj',
                    path:'http://tailian.taiwan.cn/'
                },
                {
                    name:'message.cywz.gtb',
                    path:'http://www.gwytb.gov.cn/'
                },
                {
                    name:'message.cywz.jd',
                    path:'https://www.jd.com/?cu=true&utm_source=baidu-search&utm_medium=cpc&utm_campaign=t_262767352_baidusearch&utm_term=27669656391_0_ef7f0194c66d45c6b072824a6a4fb622'
                },
                {
                    name:'message.cywz.gpw12306',
                    path:'https://kyfw.12306.cn/otn/leftTicket/init'
                }
            ]
        }
    },
    computed: {
        interList(){
            return this.inter
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
