<template>
    <div class="com-bread-crumbs">
        <ul>
            <i class="location"></i>
            <router-link exact tag='li' :to="item.path" v-for="(item,index) in breadList" :key="item.path">
                {{item.name}}
                <span v-if="index!==breadList.length-1">></span>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        breadList:{
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
.com-bread-crumbs{
    ul{
        overflow: hidden;
        .location{    
            width: 14px;
            height: 20px;
            display: inline-block;
            float: left;
            margin: 0 10px 0 5px;
            background: url('./../../assets/img/icon-location-red.png')no-repeat;
        }
        li{
            float: left;
            cursor: pointer;
        }
    }
}
</style>
