<template>
    <div class="information">
        <div class="dis-img">
            <img class="bg-img" src="../../assets/img/infomation-banner.jpg"
                 alt="">
        </div>
        <div class="info-main" id="info-main">
            <div class="tagL">
                <ul class="tag-list">
                    <li v-for="item in typeMap"
                        :key="item.id"
                        :class="{'active':curCode === item.code}"
                        @click="getTagId(item.code)">{{item.value}}</li>
                </ul>
            </div>
            <ul class="itemList">
                <li class="overflow" v-if="tableData.length>0" v-for="it in tableData" :key="it.id">
                    <div class="fl itemImg">
                        <img @click="toDetail(it.id)" :src="imgHttp+it.imgPath" alt="">
                    </div>
                    <div class="fl itemDetail">
                        <p class="title" @click="toDetail(it.id)" >{{it.title}}</p>
                        <p class="type">类型：<span>{{it.type}}</span></p>
                        <p class="tag" v-if="it.tag && it.tag.split(',').length>0">标签：<el-tag v-for="(is,index) in it.tag.split(',').slice(0,12)" :key="index">{{is}}</el-tag></p>
                        <p class="address">来源：<span>{{it.source}}</span></p>
                    </div>
                    <div class="fr detailBtn" @click="toDetail(it.id)">
                            查看详情
                    </div>
                </li>
            </ul>
            <com-pagination :rows='rows' :page='page' :total='total' @getList='getInfoListPage'></com-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            page:1,
            rows:10,
            total:0,
            curCode: '',
            tableData: [],
            imgHttp:this.$imgUrl
        }
    },
    mounted(){
        this.$nextTick(()=>{
            document.getElementsByClassName('bg-img')[0].style.height = (document.body.clientWidth/1920)*329
            let w = (document.body.clientWidth/1920)*1400
            document.getElementById('info-main').style.width = w
        })
    },
    created(){
        this.getInfoListPage()
        this.$store.dispatch('getType',{ typeCode:'infoBigType',class:"1"})
        if(this.typeMap.length>0){
            this.curCode = this.typeMap[0].code
        }
    },
    computed:{
        typeMap(){
            return this.$store.state.searchList;
        }
    },
    methods: {
        getTagId (code) {
            this.curCode = code;
            this.getInfoListPage()
        },
        
        toDetail(id){
            if (!id) {
                this.$message({
                    message:'资讯Id不能为空',
                    type:'error'
                })
                return;
            }
            this.$router.push({
                path:'/infoContaner/informationDetail',
                query:{
                    id:id
                }
            })
        },
        getInfoListPage(value){
            let params = {
                type:this.curCode,
                page:value && value.page || 1,
                rows:value && value.rows || 10
            }
            params.type = params.type === '0'?'':params.type
            this.$post(this.$api.information.getInfoListPage,params).then(res=>{
                if (res.code === '000') {
                    this.tableData = res.data && res.data.list || []
                    this.total = res.data && res.data.total
                }else{
                    this.$message({
                        message:'发布资讯失败',
                        type:'error'
                    })
                }
            })
        },
    }
}
</script>

<style lang='less' scoped>
@import url('../../assets/css/comList');
.information {
  .dis-img {
    img {
      width: 100%;
      min-width:1200px;
    }
  }
  .info-main {
    width: 1120px;
    min-height: 700px;
    margin: 29px auto 30px;
    padding: 20px 40px;
    border: 1px solid #f2f2f2;
    background: #fff;
    .tagL {
      margin-top: 12px;
      .tag-list {
        height: 40px;
        display: flex;
        li {
          flex: 1;
          width: 170px;
          height: 40px;
          text-align: center;
          line-height: 40px;
          font-size: 14px;
          color: #333;
          background: #ddd;
          margin-right: 15px;
          cursor: pointer;
          &:nth-last-of-type(1) {
            margin-right: 0;
          }
          &:hover,
          &.active {
            color: #fff;
            background: rgba(187, 17, 26);
          }
        }
      }
    }
  }
}
</style>
