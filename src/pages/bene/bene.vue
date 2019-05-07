<template>
    <div class="bene">
        <div class="dis-img">
            <com-tab-nav :tablist='tablist' @getChildType='getChildType'></com-tab-nav>
        </div>
        <div class="info-main">
            <com-more-condition :tagList='tagList'></com-more-condition>
            <div class="listContion">
                <div class="left">
                        a
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ComTabNav from '@/components/ComTabNav/ComTabNav'
import ComMoreCondition from '@/components/ComMoreCondition/ComMoreCondition'
export default {
    components:{
        ComTabNav,
        ComMoreCondition
    },
    data(){
        return {
            tablist:[
                {
                    id:0,
                    name:'个人办事'
                },
                {
                    id:1,
                    name:'法人办事'
                },
                {
                    id:2,
                    name:'惠台政策'
                },
            ],
            curType:0,
            tagList: [
                {
                    id: '',
                    tagName: '全部类型'
                },
                {
                    id: '0',
                    tagName: '时政要闻'
                },
                {
                    id: '1',
                    tagName: '财经动态'
                },
                {
                    id: '2',
                    tagName: '民生广角'
                },
                {
                    id: '3',
                    tagName: '海峡两岸'
                },
                {
                    id: '4',
                    tagName: '其他'
                },
                {
                    id: '5',
                    tagName: '时政要闻'
                },
                {
                    id: '6',
                    tagName: '财经动态'
                },
                {
                    id: '7',
                    tagName: '民生广角'
                },
                {
                    id: '8',
                    tagName: '海峡两岸'
                },
                {
                    id: '9',
                    tagName: '其他'
                },
                {
                    id: '10',
                    tagName: '时政要闻'
                },
                {
                    id: '11',
                    tagName: '财经动态'
                },
                {
                    id: '12',
                    tagName: '民生广角'
                },
                {
                    id: '13',
                    tagName: '海峡两岸'
                },
                {
                    id: '14',
                    tagName: '其他'
                }
            ],
            curTab:'',
        }
    },
    methods:{
        getChildType(value){
            this.curType = value;
        },
        getChildTag(value){
            this.curTab = value;
        }
    }
}
</script>

<style lang="less" scoped>
.bene{
    .dis-img {
        width: 100%;
        height: 330px;
        background: url('../../assets/img/nav-banner.png');
        overflow: hidden;
        .tab-nav{
            width: 1200px;
            height: 55px;
            margin: 275px auto 0;
            background: rgba(240, 180, 66, .5);
            display: flex;
        }
    }
    .info-main {
        width: 1180px;
        min-height: 700px;
        margin: 29px auto 30px;
        padding: 20px 10px;
        border: 1px solid #f2f2f2;
        background: #fff;
    }
}
</style>
