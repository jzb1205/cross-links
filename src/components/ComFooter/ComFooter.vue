<template>
    <div class="com-footer">
        <div class="com-footer-wrap">
            <div class="top">
                <div class="top-left">
                    <p class="link">
                        <span>关于两岸通</span>
                        <span>商贸通服务</span>
                        <span>推广服务</span>
                        <span>帮助中心</span>
                        <span>友情链接</span>
                        <span>联系我们</span>
                    </p>
                    <p class="bf">
                        技术支持：厦门回拨网络科技有限公司 || 闵ICP备123156号-1
                    </p>
                </div>
                <div class="top-right">
                    <ul>
                        <li>
                            <p class="qr-img"><img src="../../assets/img/qr.png" alt=""></p>
                            <p class="qr-txt">官方微博</p>
                        </li>
                        <li>
                            <p class="qr-img"><img src="../../assets/img/qr.png" alt=""></p>
                            <p class="qr-txt">官方微信</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="bottom">
            所有权&nbsp;©&nbsp;两岸通（WWW.LATONG.COM.CN）
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
    color:#fff;
    .com-footer-wrap{
        width: 1200px;
        height:116px;
        margin:0 auto;
        .top{
            overflow: hidden;
            .top-left{
                float: left;
                margin-left:240px;
                font-size: 14px;
                .link{
                    margin-top:44px;
                    span{
                        padding:0 20px;
                        border-right:1px solid #fff;
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
                float: left;
                margin-left:130px;
                ul{
                    overflow: hidden;
                    li{
                        float: left;
                        margin-top:17px;
                        margin-right:25px;
                        .qr-img{
                            width:66px;
                            height:66px;
                        }
                        .qr-txt{
                            text-align: center;
                            margin-top:7px;
                        }

                    }
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
