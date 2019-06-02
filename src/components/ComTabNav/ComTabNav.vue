<template>
    <div class="tab-nav">
        <span v-for="item in tablist" :key="item.id" 
            :class="{'active':item.code === curCode}" 
            @click="getCurId(item)">
            {{item.value}}
        </span>
    </div>
</template>

<script>
export default {
    props:{
        tablist:{
            type:Array,
            default:[]
        }
    },
    data(){
        return {
            curCode:'0'
        }
    },
    methods:{
        getCurId(item){
            this.curCode = item.code;
            this.$emit('getChildType',item.code)
        }
    }
}
</script>

<style lang="less" scoped>
.tab-nav{
    width: 1200px;
    height: 55px;
    margin: 275px auto 0;
    background: rgba(240, 180, 66, .1);
    display: flex;
    position: relative;
    span{
        flex:1;
        height: 55px;
        line-height: 55px;
        align-self:center;
        text-align: center;
        color: #fff;
        cursor: pointer;
        &:hover,&.active{
            background: #f2f2f2;
            color:rgba(187, 17, 26);
        }
    }
}
</style>

