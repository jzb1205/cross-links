<template>
    <div class="com-header">
        <div class="com-header-wrap">
            <div class="address">
                <i class="el-icon-location-outline"></i>
                <span>厦门</span>
                <i class="el-icon-arrow-down"></i>
            </div>
            <div class="languge">
                <span>无障碍</span>
                <span>繁体</span>
                <span>English</span>
            </div>
            <div class="search">
                <input type="text" placeholder="全文搜索" v-model="searchText">
                <span><i class="el-icon-search"></i></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'component-header',
    data () {
        return {
            searchText: ''
        }
    }
}
</script>

<style lang='less' scoped>
.com-header {
  height: 38px;
  overflow: hidden;
  line-height: 38px;
  background: rgba(187, 17, 26);
  color: #fff;
  font-size:14px;
  .com-header-wrap {
    width: 1200px;
    margin: 0 auto;
    div {
      display: inline-block;
      &.address {
        float: left;
        cursor: pointer;
      }
      &.languge,&.search {
        float: right;
      }
      &.search {
        margin-right:50px;
        position: relative;
        z-index: 1;
        input{
            width:242px;
            height:24px;
            padding:0 10px;
        }
        span{
            position: absolute;
            z-index: 2;    
            top: 9px;
            height: 24px;
            right: 0;
            display: inline-block;
            width: 22px;
            line-height: 24px;
            i{
                color: #333;
                font-size: 16px;
                cursor: pointer;
            }
        }
      }
      &.languge {
        span{
            cursor: pointer;
            margin-right:20px;
        }
      }
    }
  }
}
</style>
