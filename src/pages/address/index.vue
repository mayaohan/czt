<template>
    <div class="content">
        <div class="cont">
            <input class="yc placeholder" type="text" placeholder="在此输入您的称呼" placeholder-class="placeholder" />
        </div>
        <div class="cont">
            <input class="yc placeholder" type="text" placeholder="在此输入您的手机号" placeholder-class="placeholder" />
        </div>
        <div class="cont area">
            <textarea class="yc" type="text" placeholder="在此输入您的代币钱包收货地址，可多行输入" placeholder-class="placeholder"></textarea>
        </div>

        <div class="sheng">
            <div class="btns text-center">确认无误，提交信息</div>
        </div>

        <div class="zhanwei"></div>
    </div>
</template>

<script>
    import EHeader from '@/component/header'
    export default {
        components:{EHeader}
    }
</script>

<style>
    .placeholder{
        font-size:24upx;
        font-family:Roboto-Regular;
        font-weight:400;
        color:rgba(106,106,106,0.7);
        line-height:70upx;
    }
</style>

<style lang="scss" scoped>
    @import "@/styles/index.scss";
    .zhanwei{
        width:750upx;
        height:180upx;
        background:rgba(107,24,24,1);
    }
    .sheng{
        width:100%;
        flex-direction: row;
        display:flex!important;
        align-items:center;
        justify-content:space-around;
        flex-wrap:wrap;
        margin-bottom:600upx;
        .btns{
            width:360upx;
            line-height:70upx;
            background:rgba(252,202,47,1);
            border-radius:4upx;
            margin:0 auto;
            font-size:28upx;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(34,30,41,1);
        }
        
    }
    .cont{
        width:694upx;
        margin:56upx auto;
        background:#fff;
        min-height:70upx;
        padding:1upx 26upx;
        position:relative;
        .yc{
            width:100%;
            height:70upx;
        }
    }
    .cont.area{
        height:278upx;
        padding:18upx 20upx;
        .yc{
            width:100%;
            height:228upx;
            font-size:24upx;
            font-family:Roboto-Regular;
            font-weight:400;
            color:rgba(106,106,106,0.7);
        }
    }
</style>