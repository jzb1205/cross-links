<template>
    <el-dialog
        :visible.sync="showPop"
        width="70%"
        :before-close="handleClose">
        <img class="processImg" :src="imgHttp+imgUrl" alt="加载中">
    </el-dialog>
</template>

<script>
export default {
    props:{
        imgUrl:{
            type:String,
            default:''
        },
        showPop:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            dialogVisible:'false',
            imgHttp:this.$imgUrl
        }
    },
    methods: {
        handleClose(done) {
            done();
        }
    },
}
</script>

<style lang='less' scoped>
/deep/ .el-dialog__body{
    text-align: center;
}
</style>
