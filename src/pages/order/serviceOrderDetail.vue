<template>
    <div class="publishInformation pushlishPage">
        <h3>服务订单详情</h3>
        <div class="itemList">
            <div class="searchItem">
                <p class="searchLabel"><i class="require">*</i>服务类型：</p>
                <div class="searchValue">
                    <span>{{dataMap.serviceType}}</span>
                </div>
            </div>
            <div class="searchItem">
                <p class="searchLabel"><i class="require">*</i>服务名称：</p>
                <div class="searchValue">
                    <span>{{dataMap.serviceName}}</span>
                </div>
            </div>
            <div class="searchItem">
                <p class="searchLabel"><i class="require">*</i>服务费用：</p>
                <div class="searchValue">
                    <span>{{dataMap.serviceAmount}}</span>元
                </div>
            </div>
            <div class="searchItem">
                <p class="searchLabel">付款状态：</p>
                <div class="searchValue">
                    <span v-for="is in payStatus"
                                  :key="is.id"
                                  v-if="is.id === dataMap.payStatus">{{is.name}}</span>
                </div>
            </div>
            <div class="searchItem">
                <p class="searchLabel">服务状态：</p>
                <div class="searchValue">
                    <span v-for="is in serviceStatus"
                                  :key="is.id"
                                  v-if="is.id === dataMap.status">{{is.name}}</span>
                </div>
            </div>
            <div class="searchItem">
                <p class="searchLabel">表单信息：</p>
                <div class="searchValue radio">
                    <div class="item-content-wrap formTemplate f14" v-if="dataMap.formInfo &&  JSON.parse(dataMap.formInfo)  &&  JSON.parse(dataMap.formInfo).length>0" >
                        <ul class="fromHead">
                            <li>名称</li>
                            <li>信息</li>
                        </ul>
                        <ul class="fromItem"
                                v-for="(it,index) in JSON.parse(dataMap.formInfo)" :key="index">
                            <li>
                                {{it.name}}
                            </li>
                            <li>
                                {{it.value}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            dataMap:{},
            payStatus:[
                {
                    id:'0',
                    name:'待支付'
                },
                {
                    id:'1',
                    name:'已支付'
                }
            ],
            serviceStatus:[
                {
                    id:'0',
                    name:'无效'
                },
                {
                    id:'1',
                    name:'有效'
                }
            ]

        };
    },
    created () {
        this.getUsoDetailById()
        this.$store.dispatch('getType',{ typeCode:'serviceBigType',class:"1"})
    },
    computed:{
        typeMap(){
            return this.$store.state.searchList;
        }
    },
    methods: {
        //修改数据详情
        getUsoDetailById () {
            this.$post(this.$api.order.getUsoDetailById, {
                id: this.$route.query.id
            }).then(res => {
                if (res.code === '000' && res.data) {
                    this.dataMap = Object.assign({},res.data)
                } else {
                    this.$message({
                        message: '获取服务订单信息失败',
                        type: 'error'
                    })
                }
            })
        }
    }
}
</script>

<style lang='less' scoped>
.pushlishPage {
  h3 {
    padding-left: 35px;
    border-left: 6px solid rgba(187, 17, 26);
    color: rgba(187, 17, 26);
  }

    .searchItem {
        display: flex;
        margin: 10px 0;
        .searchLabel {
            flex: 1;
            min-width: 150px;
            text-align: end;
            margin-right: 20px;
            font-size: 14px;
            color: #333;
            line-height: 35px;
            i {
                color: red;
                padding: 0 5px;
            }
        }

        .searchValue {
            flex: 5;
            font-size: 14px;
            line-height: 35px;
        }
    }
}

.formTemplate{
    width:500px;
    .fromHead,.fromItem{
        display: flex;
        border:1px solid #ccc;
        border-bottom:none;
        li{
            flex:1;
            height:35px;
            line-height: 35px;
            text-align: center;
            &:nth-of-type(1){
                text-indent: 15px;
            }
            &:nth-last-of-type(1){
                cursor: pointer;
            }
        }
    }
    .fromItem{
        color:#666;
        &:nth-last-of-type(1){
            border-bottom:1px solid #ccc;
        }
    }
    .fromHead{
        background: #f5f5f5;
        &.borderB{
            border-bottom: 1px solid #ccc;
        }
    }
}
</style>
