<template>
    <div class="content">
        <e-header></e-header>
        <div class="cont">
            <div class="title">
                <span class="font">个人战绩</span>
            </div>
            
            <div class="item">
                <div class="up">
                    <div class="left">买涨</div>
                    <div class="right">涨</div>
                </div>
                <div class="down">
                    <div class="left">
                        <span class="time">2019年12月31日 10:30:24</span>
                    </div>
                    <div class="right">
                        <span class="fen">胜利 <span class="huang">+30</span> 积分</span>
                    </div>
                </div>
            </div>

            <div class="item">
                <div class="up">
                    <div class="left">买涨</div>
                    <div class="right">涨</div>
                </div>
                <div class="down">
                    <div class="left">
                        <span class="time">2019年12月31日 10:30:24</span>
                    </div>
                    <div class="right">
                        <span class="fen">胜利 -30 积分</span>
                    </div>
                </div>
            </div>

            <div class="item action" v-for="obj in 3" :key="obj">
                <div class="up">
                    <div class="left">买跌</div>
                    <div class="right">跌</div>
                </div>
                <div class="down">
                    <div class="left">
                        <span class="time">2019年12月31日 10:30:24</span>
                    </div>
                    <div class="right">
                        <span class="fen">胜利 <span class="huang">+30</span> 积分</span>
                    </div>
                </div>
            </div>
            <div class="gengduo">
                <div class="btns">查看更多</div>
            </div>
        </div>

        <div class="sheng">
            <div class="item blue">
                <div class="up">10</div>
                <div class="down">最高连胜</div>
            </div>
            <div class="item yellow">
                <div class="up">10</div>
                <div class="down">总胜</div>
            </div>
            <div class="item red">
                <div class="up">100</div>
                <div class="down">总负</div>
            </div>
        </div>

        <div class="zhanwei"></div>
    </div>
</template>

<script>
    import EHeader from '@/component/header'
    export default {
        components:{EHeader},
        methods:{
            async zj(){
                let res = await this.$http.post('/userWager/list')
                if(res.s == 1){
                    console.log(this.list)
                }
            }
        },
        onShow(){
            this.zj()
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/styles/index.scss";
    .zhanwei{
        width:750rpx;
        height:180rpx;
        background:rgba(107,24,24,1);
    }
    .sheng{
        width:100%;
        padding:24rpx 14rpx;
        flex-direction: row;
        display:flex!important;
        align-items:center;
        justify-content:space-around;
        flex-wrap:wrap;
        .item{
            width:216rpx;
            height:118rpx;
            border-radius:4rpx;
            .up{
                height:56rpx;
                font-size:40rpx;
                font-style:italic;
                color:#fff;
                font-family:Roboto-BlackItalic;
                font-weight:700;
                text-align:center;
                line-height:52rpx;
            }
            .down{
                height:56rpx;
                font-size:22rpx;
                font-family:PingFangSC-Thin;
                color:rgba(255,255,255,1);
                line-height:32px;
                text-align:center;
            }
        }
        .blue{
            .up{
                background:linear-gradient(342deg,rgba(70,137,216,1) 0%,rgba(155,202,255,1) 100%);
            }
            .down{
                background:rgba(83, 141, 232, 1);
            }
        }
        .yellow{
            .up{
                background:linear-gradient(342deg,rgba(70,137,216,1) 0%,rgba(155,202,255,1) 100%);
            }
            .down{
                background:rgba(83, 141, 232, 1);
            }
        }
        .red{
            .up{
                background:linear-gradient(342deg,rgba(70,137,216,1) 0%,rgba(155,202,255,1) 100%);
            }
            .down{
                background:rgba(83, 141, 232, 1);
            }
        }
    }
    .cont{
        width:722rpx;
        margin:20rpx 14rpx;
        background:#fff;
        min-height:50rpx;
        padding:1rpx 26rpx;
        position:relative;
        .gengduo{
            position:absolute;
            bottom:0;
            left:0;
            width:100%;
            height:100rpx;
            padding:20rpx 0;
            background:rgba(255,255,255,0.5);
            .btns{
                width:180rpx;
                height:60rpx;
                background:rgba(183,186,187,0.3);
                border-radius:30rpx;
                font-size:22rpx;
                font-family:PingFangSC-Thin;
                font-weight:100;
                color:rgba(183,186,187,1);
                line-height:60rpx;
                margin:0 auto;
                text-align:center;
            }
        }
        .item{
            .up{
                flex-direction: row;
                display:flex!important;
                align-items:center;
                justify-content:space-between;
                .left{
                    font-size:34rpx;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(41,37,48,1);
                    line-height:48rpx;
                }
                .right{
                    width:70rpx;
                    height:34rpx;
                    background:rgba(93,230,166,0.3);
                    border-radius:17rpx;
                    font-size:22rpx;
                    font-family:Roboto-Regular;
                    font-weight:400;
                    color:rgba(39,156,101,1);
                    line-height:34rpx;
                    text-align: center;
                }
            }
            .down{
                flex-direction: row;
                display:flex!important;
                align-items:center;
                justify-content:space-between;
                margin-top:10rpx;
                .left{
                    font-size:28rpx;
                    font-family:Roboto-Light;
                    font-weight:300;
                    color:rgba(41,37,48,0.3);
                    line-height:38rpx;
                }
                .right{
                    font-size:28rpx;
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(41,37,48,1);
                    line-height:40rpx;
                }
            }
        }
        .action{
            .up{
                .right{
                    background:rgba(252,98,98,0.3);
                    color:rgba(252,98,98,1);
                }
            }
        }
        .title{
            width:520rpx;
            height:2rpx;
            background:rgba(183, 186, 187, 1);
            margin:40rpx auto;
            text-align:center;
            .font{
                position:relative;
                font-size:28rpx;
                top:-28rpx;
                background:#fff;
                padding:0 64rpx;
            }
        }
    }
</style>