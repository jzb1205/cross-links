<template>
    <div class="com-nav">
        <div class="com-nav-wrap">
            <div class="logo" @click="$router.push('/homeContaner')"></div>
            <ul class="nav">
                <router-link class="nav-li" v-for="item in navList" @click="getCurPath" 
                    router-link-active='active' 
                    :class="{'router-link-active':curPathSlice === item.path}"
                    exact tag="li" 
                    :key="item.path" :to="item.path">
                    <div class="wrap"></div>
                    <div class="content">
                        <p class="label">{{$t(item.label)}}</p>
                        <p class="name">{{item.name}}</p>
                    </div>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            navData:[
                {
                    path:'/homeContaner',
                    label:'message.navList.firstPage',
                    name:'HOME',
                },
                {
                    path:'/infoContaner',
                    label:'message.navList.info',
                    name:'INFORMATION'
                },
                {
                    path:'/benContaner',
                    label:'message.navList.bene',
                    name:'POLICY'
                },
                {
                    path:'/serviceContaner',
                    label:'message.navList.service',
                    name:'SERVICE'
                },
                {
                    path:'/nav',
                    label:'message.navList.nav',
                    name:'NAVIGATION'
                }
            ],
            curpath:'/homeContaner',
            curPathSlice:''
        }
    },
    created(){
        this.curPathSlice = '/'+ this.$route.path.split('/')[1]
    },
    computed: {
        navList(){
            return this.navData
        }
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
                width:192px;
                cursor: pointer;
                height:100%;
                color: rgb(171, 171, 171);
                position: relative;
                overflow: hidden;
                .wrap,.content{
                    width:192px;  
                    height: 112px;
                }
                .content{
                    position: relative;
                    z-index: 103;
                }
                .wrap{
                    width: 100%;
                    height:4px;
                    position: absolute;
                    top:108px;
                    left:0;
                    z-index: 102;
                    background: rgba(187, 17, 26);
                    margin-left:-192px;
                    transition: all ease .4s;
                }
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
                &:hover{
                    .wrap{
                        margin-left:0;
                    }
                }
            }
        }
    }
}
</style>
