<template>
    <div class="com-inter">
        <ul>
            <li v-for="(item,index) in interList" :key="index">{{item.name}}</li>
            <li>dsfadsaf</li>
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
                },
                {
                    name:'百度百科',
                    path:'6'
                }
            ]
        }
    }
}
</script>

<style lang='less' scoped>
.com-inter{
    width: 1200px;
    margin:0 auto;
    background: #ddd;
    ul{
        height:60px;
        line-height:60px;
        overflow: hidden;
        li{
            float: left;
        }
    }
}
</style>
