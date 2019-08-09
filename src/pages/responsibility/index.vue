<template>
    <div class="container">
        <p class="title">
            活动时间
        </p>
        <div class="zhanwei"></div>
        <p class="content">
            活动：指猜涨跌服务平台（以下简称“猜涨跌”）的经营者字节星辰网络科技（沈阳）有限公司（以下称“本公司”）提供的基于互联网及微信小程序、微信公众号向用户提供的相关服务。活动平台包括基于互联网的猜涨跌小程序、猜涨跌公众号，猜涨跌官方网站相关应用、服务等。在您参与活动前，请仔细阅读本《免责声明》全部内容。凡以任何方式登陆浏览本公司提供的内容或直接、间接使用活动内容者，视为同意本《免责声明》。
        </p>
        <p class="content">
            1.禁止利用活动进行赌博赌博、诈骗活动等违法违规行为；若在活动前后发现违法违规行为，不仅限于冒用欺诈、赌博、传播色情、冒用他人身份等用户，本公司有权取消活动参与资格及奖品兑换资格。
        </p>
        <p class="content">
            2.根据{{'<'}}关于防范比特币风险的通知>（2013年12月3日　人民银行、工信部、银监会、证监会、保监会　银发〔2013〕289号）比特币的属性:“比特币具有没有集中发行方、总量有限、使用不受地域限制和匿名性等四个主要特点。虽然比特币被称为“货币”，但由于其不是由货币当局发行，不具有法偿性与强制性等货币属性，并不是真正意义的货币。从性质上看，比特币应当是一种特定的虚拟商品，不具有与货币等同的法律地位，不能且不应作为货币在市场上流通使用。”本活动中所涉及到的比特币等虚拟货币均为虚拟商品。依据《中华人民共和国电信条例》和《互联网信息服务管理办法》规定，本活动不涉及任何比特币及虚拟货币的比特币登记、交易等服务。

        </p>
        <p class="content">
            3.如有发现任何机构或个人冒用本公司或本公司工作人员在网络上非法从事投资咨询业务，请及时与本公司联系，本公司保留对侵权机构或个人追究法律责任的权利。
        </p>
        <p class="content">
            4.请避免违规刷积分行为（包括但不限于虚假分享，注册，邀请）如发现刷积分行为，主办方有权取消用户的活动参与资格及奖品兑换资格。
        </p>
        <p class="content">
            5.本公司对活动力求准确、完整和及时，但并不对其准确性、完整性和及时性做出任何保证。对任何因直接或间接参考活动内容造成的损失本公司不承担任何法律责任。本公司亦不保证所设置的外部链接的合法性和安全性。任何机构或者个人通过活动页面的链接而获得其他网站内容，其风险责任自负，本公司对此不承担任何法律责任。
        </p>
        
    </div>
</template>

<script>
    export default {
        methods:{
            go(data){
                uni.navigateTo({
                    url:`/pages/${data}/index`
                })
            },
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        background:#fff;
        padding:30upx 24upx;
    }
    .content{
        font-size:28upx;
        font-family:Noto Sans S Chinese;
        font-weight:400;
        line-height:42upx;
        color:rgba(15,15,15,1);
        opacity:1;
    }
    .title{
        font-size:37upx;
        font-family:Source Han Sans CN;
        font-weight:bold;
        line-height:62upx;
        color:rgba(0,0,0,1);
        text-align:center;
    }
    .content{
        margin-bottom:40upx;
        .a{
            font-size:28upx;
            font-family:Noto Sans S Chinese;
            font-weight:400;
            line-height:42upx;
            color:rgba(29,80,200,1);
            text-decoration:underline;
            opacity:1;
        }
    }
    .zhanwei{
        width:100%;
        height:40upx;
    }
</style>