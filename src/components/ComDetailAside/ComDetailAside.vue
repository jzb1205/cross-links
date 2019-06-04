<template>
    <div class="com-detail-aside">
        <ul>
            <li v-for="(item,index) in asideList" :key="item.id" @click="getId(index)" :class='{"active":curIndex === index}'>
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
            curIndex:0
        }
    },
    methods:{
        getId(index){
            this.curIndex = index
        }
    }
}
</script>

<style lang='less' scoped>
.com-detail-aside{
    width:120px;
    float:left;
    min-width:100px;
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
            &.active{
                background: rgba(187, 17, 26);
                color:#fff;
                a{
                    color:#fff;
                }
            }
        }
    }
}
</style>
