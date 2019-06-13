<template>
    <div class="com-more-condition">
        <div class="tag">
            <ul class="tag-list" v-if="tagList.length>0">
                <li v-for="item in list"
                    :key="item.id"
                    :class="{'active':curCode === item.code}"
                    @click="getTagId(item.code)">{{item.value}}</li>
            </ul>
            <p class="switch" @click="openAll" v-if="tagList.length>12">
                {{btnTxt}}
                <i v-if="!switchChange" class="el-icon-arrow-down"></i>
                <i v-else class="el-icon-arrow-up"></i>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        tagList:{
            type:Array,
            default:[]
        },
        curTab:{
            type:String,
            default:'0'
        }
    },
    data(){
        return {
            list:[],
            curCode:'0',
            btnTxt:'全部展开',
            switchChange:false
        }
    },
    created(){
    },
    methods:{
        getTagId(code){
            this.curCode = code;
            this.$emit('getChildTag',code)
        },
        openAll(){ 
            if (!this.switchChange) {
                this.list = this.tagList;
                this.btnTxt = "收起";
                this.switchChange = true;
            }else{
                this.list = this.tagList;
                this.list = this.tagList.slice(0,12);
                this.btnTxt = "全部展开";
                this.switchChange = false;
            }
        }
    },
    watch:{
        'tagList':{
            handler(newValue,oldValue){
                this.list = this.tagList
                this.openAll()
            },
            deep:true
        },
        'curTab'(){
            this.curCode = this.curTab
        }
    }
}
</script>

<style lang="less" scoped>
.com-more-condition{
    .tag {
        margin-top: 12px;
        .tag-list {
            min-height: 40px;
            overflow: hidden;
            li {
                float: left;
                width: 170px;
                height: 40px;
                text-align: center;
                line-height: 40px;
                font-size: 14px;
                color: #333;
                background: #ddd;
                margin-right: 20px;
                margin-bottom: 15px;
                cursor: pointer;
                &:nth-of-type(6n) {
                    margin-right: 0;
                }
                &:hover,
                &.active {
                    color: #fff;
                    background: rgba(187, 17, 26);
                }
            }
        }
        .switch{
            height: 40px;
            text-align: center;
            line-height: 40px;
            font-size: 14px;
            color: #333;
            background: #ddd;
            cursor: pointer;
            &:hover {
                color: #fff;
                background: rgba(187, 17, 26);
            }
        }
    }
}

</style>

