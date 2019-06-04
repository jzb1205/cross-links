<template>
    <div class="com-nav">
        <div class="com-nav-wrap">
            <div class="logo"></div>
            <ul class="nav">
                <router-link class="nav-li" v-for="item in navList" @click="getCurPath" 
                    router-link-active='active' 
                    :class="{'router-link-active':curPathSlice === item.path}"
                    exact tag="li" 
                    :key="item.path" :to="item.path">
                    <p class="label">{{item.label}}</p>
                    <p class="name">{{item.name}}</p>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            navList:[
                {
                    path:'/home',
                    label:'首页',
                    name:'HOME',
                },
                {
                    path:'/infoContaner',
                    label:'通资讯',
                    name:'INFORMATION'
                },
                {
                    path:'/bene',
                    label:'通惠政',
                    name:'HUI ZHENG'
                },
                {
                    path:'/beneContaner',
                    label:'通服务',
                    name:'SERVICE'
                },
                {
                    path:'/nav',
                    label:'通导航',
                    name:'NAVIGATION'
                },
                {
                    path:'/user',
                    label:'个人中心',
                    name:'USER CENTER'
                }
            ],
            curpath:'/home',
            curPathSlice:''
        }
    },
    created(){
        this.curPathSlice = '/'+ this.$route.path.split('/')[1]
    },
    methods:{
        getCurPath(item){
            this.curpath = item.path;
        }
    },
    watch: {
        '$route.path'(){
            this.curPathSlice = '/'+ this.$route.path.split('/')[1]
        }
    },
}
</script>

<style lang='less' scoped>
.com-nav{
    background: #fff;
    .com-nav-wrap{
        width: 1200px;
        margin:0 auto;
        overflow: hidden;
        .logo{
            float: left;
            width: 235px;
            height:112px;
            background: url('../../assets/img/logo.png')no-repeat center center;
        }
        .nav{
            float: left;
            overflow: hidden;    
            height: 112px;
            .nav-li{
                float: left;
                line-height:26px;
                padding:0 36px;
                cursor: pointer;
                height:100%;
                color: rgb(171, 171, 171);
                p{
                    text-align: center;
                    &.label{
                        margin-top:39px;
                    }
                }
                &.router-link-active{
                    background: rgba(187, 17, 26);
                    color:#fff;
                }
            }
        }
    }
}
</style>
