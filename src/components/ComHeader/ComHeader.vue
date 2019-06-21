<template>
    <div class="com-header">
        <div class="com-header-wrap">
            <!-- <div class="address">
                <img src="../../assets/img/icon-location.png" alt="">
                <span>{{locationCity}}</span>
                <i class="el-icon-arrow-down"></i>
            </div> -->
            <div class="loginNotice" v-if="isShow">
                <div class="token" v-if="isLogin">
                    <span @click="$router.push('/userContanter')">{{userName}}</span>
                    |
                    <span @click="tologin(0)">注销</span>
                </div>
                <div  v-else class='token'>
                    <span @click="tologin(0)">{{ $t("message.login") }}</span>
                    |
                    <span @click="tologin(1)">{{ $t("message.register") }} </span>
                </div>
            </div>
            <div class="languge">
                <!-- <span>无障碍</span>
                <span>繁体</span>
                <span>English</span> -->
                <span @click="$router.push('/aboutMe')">关于我们</span>
                <span @click="$router.push('/userContanter')">个人中心</span>
                <select v-model="lang" @change='selectLanguage'>
                    <option value="cn">简体中文</option>
                    <option value="tw">繁体</option>
                </select>
            </div>
            <!-- <div class="search">
                <input type="text" placeholder="全文搜索" v-model="searchText">
                <span><i class="el-icon-search"></i></span>
            </div> -->
        </div>
    </div>
</template>

<script>
// import BMap from 'BMap'
export default {
    name: 'component-header',
    data () {
        return {
            searchText: '',
            locationCity:'加载中...',
            isLogin:sessionStorage.getItem('token') || '',
            userName:sessionStorage.getItem('userInfo') && JSON.parse(sessionStorage.getItem('userInfo')).userName || {},
            isShow:'false',
            lang:'cn',
            langCN:'cn',
            langTW:'tw'
        }
    },
    mounted() {
        // this.dz()
    },
    methods: {
        dz() {
            var that=this
            var geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition(function getinfo(position) {
            	let city = position.address.city; //获取城市信息       
            	let province = position.address.province;
                console.log(city)
            	that.locationCity=city		//将城市名称保存到locationCity中
            	that.$store.commit('hqwz',city)
            }, function(e) {        
            	that.locationCity='定位失败'
            }, {
            	provider: 'baidu',
            });
        },
        tologin(type){
            sessionStorage.clear()
            this.$router.push({
                path:'/login',
                query:{
                    type:type
                }
            })
        },
        selectLanguage(){
            if (this.lang === 'cn') {
                this.$i18n.locale = this.langCN
                localStorage.lang = this.langCN
                console.log(this.$i18n)
            }else{
                this.$i18n.locale = this.langTW
                localStorage.lang = this.langTW
                console.log(this.$i18n)
            }
        }
    },
    watch:{
        '$route.fullPath'(){
            this.isLogin = sessionStorage.getItem('token') || ''
            this.userName = sessionStorage.getItem('userInfo') && JSON.parse(sessionStorage.getItem('userInfo')).userName || {}
            this.isShow = !this.$route.fullPath.includes('/login')
        }
    }
}
</script>

<style lang='less' scoped>
.com-header {
  min-width: 1200px;
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
        img{
            width: 12px;
            position: relative;
            top: 3px;
            margin-right: 4px;
        }
      }
      &.loginNotice{
          margin-left:15px;
          font-size: 12px;
          &>div{
              span{
                  cursor: pointer;
                  margin-left:5px;
                  margin-right:5px;
                  &:hover{
                      color:#ddd;
                  }
              }
          }
      }
      &.languge,&.search {
        float: right;
      }
      &.languge{
        span{
            font-size: 12px;
            &:hover{
                cursor: pointer;
                color:#ddd;
            }
        }
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