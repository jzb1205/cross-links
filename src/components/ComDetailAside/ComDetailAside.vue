<template>
    <div class="com-detail-aside">
        <ul>
            <li v-for="item in asideList" :key="item.id">
                <a :href="'#'+item.id">{{item.name}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        asideList:{
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
.com-detail-aside{
    width:100px;
    float:left;
    margin-top:150px;
    text-align: center;
    ul{
        li{
            border-right:1px solid #ddd;
            cursor: pointer;
            a{
                width: 100px;
                line-height: 40px;
                font-size: 16px;
                color: #333;
            }
        }
    }
}
</style>
