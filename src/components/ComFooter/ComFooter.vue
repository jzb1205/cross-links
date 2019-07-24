<template>
    <div class="com-footer">
        <div class="com-footer-wrap">
            <div class="top">
                <div class="top-left">
                    <p class="link">
                        <span @click="$router.push('/aboutMe')">关于两岸通</span>
                        <!--<span @click="$router.push('/aboutMe')">商贸通服务</span>-->
                        <!--<span @click="$router.push('/aboutMe')">推广服务</span>-->
                        <!--<span @click="$router.push('/aboutMe')">帮助中心</span>-->
                        <span @click="$router.push('/aboutMe')">友情链接</span>
                        <span @click="$router.push('/aboutMe')">联系我们</span>
                    </p>
                    <p class="bf">
                        技术支持：厦门慧博网络科技 | | 闽ICP备16012684号-1
                    </p>
                </div>
                <div class="top-right">
                    <p class="qr-img"><img src="../../assets/img/qr.png" alt=""></p>
                    <p class="qr-txt">官方微信</p>
                </div>
            </div>
        </div>
        <div class="bottom">
            版权所有 © 两岸通(www.latong.com.cn)
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.com-footer{
    background: rgba(187, 17, 26);
    height:151px;
    color:#ddd;
    min-width: 1200px;
    .com-footer-wrap{
        width: 1200px;
        height:116px;
        margin:0 auto;
        .top{
            overflow: hidden;
            width: 942px;
            margin: 0 auto;
            position: relative;
            .top-left{
                margin: 0 auto;
                font-size: 14px;
                .link{
                    margin-top:44px;
                    text-align: center;
                    span{
                        padding:0 20px;
                        color:#ddd;
                        border-right:1px solid #fff;
                        cursor: pointer;
                        &:hover{
                            color:#fff;
                        }
                        &:nth-last-of-type(1){
                            border:none;
                        }
                    }
                }
                .bf{
                    text-align: center;
                    line-height:40px;
                }
            }
            .top-right{
                position: absolute;
                z-index: 200;
                top: 11px;
                right: 0;
                .qr-img{
                    width:66px;
                    height:66px;
                    img{
                        width:66px;
                        height:66px
                    }
                }
                .qr-txt{
                    text-align: center;
                    margin-top:7px;
                }
            }
        }
    }
    .bottom{
        background: #444;
        height:35px;
        line-height: 35px;
        text-align: center;
    }
}
</style>
