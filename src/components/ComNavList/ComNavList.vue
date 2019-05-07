<template>
    <div class="com-nav-list" >
        <div class="com-nav-list-wrap" v-for="(item,index) in serviceList" :key="index">
            <p class="title">{{item.title}}</p>
            <ul class="list-block">
                <li class="list-item" v-for="it in item.children" :key="it.id">
                    <p class="nav-img"><img :src="it.imgUrl" alt="">
                    <p class="nav-name">{{it.name}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            serviceList:{
                goverList:{
                    title:'政务服务',
                    children:[
                        {
                            id:'0',
                            imgUrl:require(`../../assets/img/nav-img.png`),
                            name:'居住证办理',
                            path:'www.baidu.com'
                        },
                        {
                            id:'1',
                            imgUrl:require(`../../assets/img/nav-img.png`),
                            name:'护照办理',
                            path:'www.baidu.com'
                        },
                        {
                            id:'2',
                            imgUrl:require(`../../assets/img/nav-img.png`),
                            name:'外资公司登记',
                            path:'www.baidu.com'
                        },
                        {
                            id:'3',
                            imgUrl:require(`../../assets/img/nav-img.png`),
                            name:'食品安全企业标准备案',
                            path:'www.baidu.com'
                        },
                        {
                            id:'4',
                            imgUrl:require(`../../assets/img/nav-img.png`),
                            name:'企业名称预先核准登记',
                            path:'www.baidu.com'
                        }
                    ]
                },
                convenientList:{
                    title:'便民服务',
                    children:[
                        {
                            id:'0',
                            imgUrl:require(`../../assets/img/nav-img.png`),
                            name:'养老金',
                            path:'www.baidu.com'
                        },
                        {
                            id:'1',
                            imgUrl:require(`../../assets/img/nav-img.png`),
                            name:'医保金',
                            path:'www.baidu.com'
                        },
                        {
                            id:'2',
                            imgUrl:require(`../../assets/img/nav-img.png`),
                            name:'公积金',
                            path:'www.baidu.com'
                        },
                        {
                            id:'3',
                            imgUrl:require(`../../assets/img/nav-img.png`),
                            name:'机动车交通违法',
                            path:'www.baidu.com'
                        },
                        {
                            id:'4',
                            imgUrl:require(`../../assets/img/nav-img.png`),
                            name:'不动产信息登记',
                            path:'www.baidu.com'
                        }
                    ]
                },
                enterpriseList:{
                    title:'利企服务',
                    children:[
                        {
                            id:'0',
                            imgUrl:require(`../../assets/img/nav-img.png`),
                            name:'工商注册',
                            path:'www.baidu.com'
                        },
                        {
                            id:'1',
                            imgUrl:require(`../../assets/img/nav-img.png`),
                            name:'纳税申报',
                            path:'www.baidu.com'
                        },
                        {
                            id:'2',
                            imgUrl:require(`../../assets/img/nav-img.png`),
                            name:'社保办理',
                            path:'www.baidu.com'
                        },
                        {
                            id:'3',
                            imgUrl:require(`../../assets/img/nav-img.png`),
                            name:'企业信用',
                            path:'www.baidu.com'
                        },
                        {
                            id:'4',
                            imgUrl:require(`../../assets/img/nav-img.png`),
                            name:'企业年报',
                            path:'www.baidu.com'
                        }
                    ]
                }
            }
        }
    }
}
</script>

<style lang='less' scoped>
.com-nav-list{
    .com-nav-list-wrap{
        margin-top:20px;
        padding-bottom:40px;
        &:nth-of-type(1){
            margin-top: 8px;
        }
        .title{
            border-left:4px solid rgba(187, 17, 26);
            padding-left:12px;
        }
        .list-block{
            margin-top:30px;
            overflow: hidden;
            .list-item{
                width:214px;
                height:144px;
                border:1px solid #ddd;
                float: left;
                margin-left:10px;
                margin-right:5px;
                cursor: pointer;
                &:nth-of-type(5n){
                    margin-right: 0;
                }
                &:hover{
                    background: #f2f2f2;
                }
                .nav-img{
                    width:50px;    
                    margin: 0 auto;
                    margin-top:23px;
                }
                .nav-name{
                    text-align: center;    
                    margin-top: 20px;
                }
            }
        }
    }
}
</style>
