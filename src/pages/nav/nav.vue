<template>
    <div class="navigation">
        <div class="nav-dis-img">
            <img src="../../assets/img/nav-banner.jpg"
                 alt="">
        </div>
        <div class="nav-main">
            <div class="com-nav-list-wrap" v-for="(item,index) in dataList" :key="index">
                <p class="title">{{item.title}}</p>
                <ul class="list-block">
                    <li class="list-item" v-for="it in item.children" :key="it.id" @click="toLink(it.url)">
                        <div class="nav-img"><img :src="imgHttp+it.icon" alt=""></div>
                        <div class="nav-name">
                            <p>{{it.name}}</p>
                        </div>
                    </li>
                </ul>
            </div>
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
                    children:[]
                },
                convenientList:{
                    title:'便民服务',
                    children:[]
                },
                enterpriseList:{
                    title:'利企服务',
                    children:[]
                }
            },
            imgHttp:this.$imgUrl
        }
    },
    mounted(){
        document.getElementsByClassName('nav-dis-img')[0].style.height = (document.body.clientWidth/1920)*329;
    },
    created(){
        this.getNavigationList()
    },
    computed:{
        dataList(){
            let list = this.$store.state.navMap || []
            this.serviceList.goverList.children = []
            this.serviceList.convenientList.children = []
            this.serviceList.enterpriseList.children = []
            if (list && list.length>0) {
                list.map((item)=>{
                    switch (item.type) {
                        case '0':
                            this.serviceList.goverList.children.push(item)
                            break;
                    
                        case '1':
                            this.serviceList.convenientList.children.push(item)
                            break;
                    
                        default:
                            this.serviceList.enterpriseList.children.push(item)
                            break;
                    }
                })
            }
            return this.serviceList
        },
    },
    methods:{
        async getNavigationList(){
            await this.$store.dispatch('getNavigationList',{})
        },
        toLink(url){
            window.location.href = url
        }
    }
}
</script>

<style lang='less' scoped>
.navigation{
  .nav-dis-img {
    img {
      width: 100%;
      min-width:1200px;
    }
  }
  .nav-main {    
    width: 1160px;
    min-height: 700px;
    margin: 29px auto 0;
    padding: 25px 20px;
    border: 1px solid #f2f2f2;
    background: #fff;
    
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
                position: relative;
                width:214px;
                height:144px;
                border:1px solid #ddd;
                float: left;
                margin-left:10px;
                margin-right:5px;
                margin-bottom:15px;
                overflow: hidden;
                cursor: pointer;
                &:nth-of-type(5n){
                    margin-right: 0;
                }
                &:hover{
                    background: #f2f2f2;
                }
                .nav-img{  
                    margin: 0 auto;
                    img{    
                        width: 216px;
                        height: 146px;
                    }
                }
                .nav-name{
                    width:100%;
                    height:100%;
                    text-align: center;  
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 50%;
                    background: rgba(0,0,0,.4);
                    margin-left:-240px;
                    margin-top:-150px;
                    transition: all ease-in-out .4s;
                    &>p{
                        margin-top: 26%;
                        color:#fff;
                        width:90%;
                        margin-left: 5%;
                    }
                }
                &:hover{
                    box-shadow: 0 0 10px #666;
                    .nav-name{
                        margin-left:0;
                        margin-top:0;
                        transform: rotate(720deg)
                    }
                }
            }
        }
    }
  }
}
</style>
