<template>
    <div class="content">
        <div style="width:100%;height:26rpx;"></div>

        <div class="item" v-for="obj in 6" :key="obj">
            <p class="t34">群友PK</p>
            <p class="t24 bottom">每天找两个微信群群友 <span style="padding-left:28rpx;"> 积分+5</span></p>
            <div class="right">签到</div>
        </div>
        <div class="zhanwei"></div>
        <div class="fanhui" @click="back">返回</div>
    </div>
</template>

<script>
    export default {
        name:'child',
        data(){
            return {

            }
        },
        methods:{
            back(){
                uni.navigateBack({
                    delta:1
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/styles/index.scss";
    .zhanwei{
        width:750rpx;
        height:180rpx;
        background:rgba(107,24,24,1);
        margin-top:170rpx;
    }
    .item{
        width:694rpx;
        margin:10rpx auto;
        background:#fff;
        border-radius:8rpx;
        position:relative;
        padding:24rpx;
        .bottom{
            margin-top:15rpx;
            color:rgba(55,57,75,1);
        }
        .right{
            position:absolute;
            right:16rpx;
            top:50%;
            margin-top:-25rpx;
            width:142rpx;
            height:50rpx;
            background:rgba(252,202,47,1);
            border-radius:26rpx;
            font-size:28rpx;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:50rpx;
            text-align:center;
        }
        
    }
    .fanhui{
        margin:74rpx auto;
        width:100%;
        height:34rpx;
        font-size:34rpx;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(252,202,47,1);
        text-align:center;

    }
</style>