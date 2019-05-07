<template>
    <div class="navigation">
        <div class="dis-img">
            <img src="../../assets/img/nav-banner.png"
                 alt="">
        </div>
        <div class="nav-main">
            <com-nav-list></com-nav-list>
        </div>
    </div>
</template>

<script>
import ComNavList from '@/components/ComNavList/ComNavList'
export default {
    components:{
        ComNavList,
    },
    data(){
        return {
        }
    }
}
</script>

<style lang='less' scoped>
.navigation{
  .dis-img {
    img {
      width: 100%;
      height: 330px;
    }
  }
  .nav-main {    
    width: 1160px;
    min-height: 700px;
    margin: 29px auto 0;
    padding: 25px 20px;
    border: 1px solid #f2f2f2;
    background: #fff;
  }
}
</style>
