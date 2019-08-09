<template>
    <div class="container">
        <p class="title">
            活动时间
        </p>
        <p class="title">
            本轮活动时间为2019年7月15日-2020年7月15日
        </p>
        <div class="zhanwei"></div>
        <p class="content">
            1、参与规则：活动期间，T日BTC/USDT涨跌的预测时间为T-1日13：00至T日13：00，T日13：00后至T+1日13：00前预测T+1日BTC/USDT涨跌，以此类推（T为交易日，以Binance.com USDT市场 BTC/USDT交易对结果为基准，若Binance.com USDT市场 BTC/USDT交易对当日无结果则以hbg.com 币币交易 BTC/USDT交易对结果为基准）。预测的胜负判定为T日00：00至T日21：00间BTC/USDT交易对涨幅大于等于0.00%，则预测的正确结果为上涨(简称“涨”);否则预测的正确结果为下跌(简称“跌”)。用户注册后使用积分参加对T日涨跌的预测。每次预测使用15积分，每个用户T日只能预测一次，做出预言后不可修改，积分使用后无法退还。
        </p>
        <p class="content">
            2、开奖规则：在T日的21：15左右预测结果揭晓。若预测成功，则按参与积分在所预测方的积分池的比例，瓜分当日预测积分，单日单一用户可瓜分最高积分上限为100分。若预测失败，则不加积分。积分一般在T日预测结果揭晓后48小时内到账。
        </p>
        <p class="content">
            3、奖品兑换：用户在活动期间内赚取的积分可到“奖品兑换”，根据用户的积分和等级可以兑换相应的奖品，标注“数量有限，先到先得”的奖品按照用户兑奖信息提交的时间为基准进行兑换。用户应在点击兑换按钮后完整填写相应的兑换信息，客服人员将在联系用户后确认用户身份进行兑奖，用户如填写错误的兑换信息造成兑换失败或客服一周内联系不上的，将视为弃奖。奖品需要经过第三方网站或机构进行兑换所产生的费用由兑奖用户承担。
        </p>
        <p class="content">
            4、排行规则：排行榜在T日预测结果揭晓时更新。参与活动后个人积分若进入前10名将在“全网战绩”排行榜中展现。同时点击用户邀请链接进入游戏的用户按照分数由高到低的前10名在“朋友战绩”排行榜中展现。排行榜按照用户积分数量进行排名，越多越靠前；当积分相同时，按照用户首次注册时间排名，注册时间越早排名越靠前。
        </p>
        <p class="content">
            5、签到分享：活动期间，签到分享中的“每日签到”、“分享有喜”、活动每天最多奖励一次，活动单个用户最多奖励200次，“一呼百应”活动单个用户最多奖励70次。
        </p>
        <p class="content">
            6、称号获取：称号等级一共分为12个等级，以用户在活动期间取得的最高连胜数为准，分别是：小白对应0连胜、骄傲的韭菜对应1连胜、成熟的韭菜对应2连胜、牛散对应3连胜、资本新贵对应4连胜、大户对应5连胜、投资家对应6连胜、华尔街精英对应7连胜、庄家对应8连胜、大佬对应9连胜、资本大鳄对应10连胜、中本聪对应11连胜及以上。
        </p>
        <p class="content">
            7、本公司声明条款详见免责声明。
        </p>

        <p class="content">
            <span class="a" @click="go('responsibility')">点击此处进入查看免责声明>></span>
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
    .title,.content{
        font-size:28upx;
        font-family:Noto Sans S Chinese;
        font-weight:400;
        line-height:42upx;
        color:rgba(15,15,15,1);
        opacity:1;
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