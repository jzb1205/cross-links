<template>
    <div class="information">
        <div class="dis-img">
            <img class="bg-img" src="../../assets/img/infomation-banner.jpg"
                 alt="">
        </div>
        <div class="info-main">
            <div class="tag">
                <ul class="tag-list">
                    <li v-for="item in tagList"
                        :key="item.id"
                        :class="{'active':curTagId === item.id}"
                        @click="getTagId(item.id)">{{item.tagName}}</li>
                </ul>
            </div>
            <div class="table-list">
                <el-table :data="tableData"
                      style="width: 100%">
                    <el-table-column prop="title"
                                    label="标题">
                    </el-table-column>
                    <el-table-column prop="date"
                                    label="发布时间"
                                    width="220">
                    </el-table-column>
                    <el-table-column prop="name"
                                    width="220"
                                    label="信息来源">
                    </el-table-column>
                    <el-table-column prop="type"
                                    width="220"
                                    label="类型">
                    </el-table-column>
                    <el-table-column width="120"
                                    label="操作">
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination
                    background
                    :page-size="100"
                    layout="prev, pager, next"
                    :total="1000">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
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
                }
            ],
            curTagId: '',
            tableData: [
                {   
                    title:'和国防经费国家和方式',
                    date: '2016-05-02',
                    name: '王小虎',
                    type:'时政要闻'
                }, 
                {
                    title:'和国防经费国家和方式',
                    date: '2016-05-02',
                    name: '王小虎',
                    type:'时政要闻'
                }, 
                {
                    title:'和国防经费国家和方式',
                    date: '2016-05-02',
                    name: '王小虎',
                    type:'时政要闻'
                }, 
                {
                    title:'和国防经费国家和方式',
                    date: '2016-05-02',
                    name: '王小虎',
                    type:'时政要闻'
                }
            ]
        }
    },
    mounted(){
        document.getElementsByClassName('bg-img')[0].style.height = (document.body.clientWidth/1920)*329;
    },
    created(){
        
    },
    methods: {
        getTagId (id) {
            this.curTagId = id;
        }
    }
}
</script>

<style lang='less' scoped>
.information {
  .dis-img {
    img {
      width: 100%;
    //   height: 330px;
    }
  }
  .info-main {
    width: 1180px;
    min-height: 700px;
    margin: 29px auto 30px;
    padding: 25px 10px;
    border: 1px solid #f2f2f2;
    background: #fff;
    .tag {
      margin-top: 12px;
      .tag-list {
        height: 40px;
        display: flex;
        li {
          flex: 1;
          width: 180px;
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
    .table-list{
        margin-top:30px;
    }
  }
}
</style>
