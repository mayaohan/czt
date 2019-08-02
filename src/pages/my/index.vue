<template>
    <div class="content">
        <e-header></e-header>
        <div class="cont">
            <div class="title">
                <span class="font">个人战绩</span>
            </div>
            
            <div class="item" v-for="obj in list" :key="obj.id">
                <div class="up">
                    <div class="left">{{obj.type==0?'买跌':'买涨'}}</div>
                    <div class="right">{{obj.type==0?'跌':'涨'}}</div>
                </div>
                <div class="down">
                    <div class="left">
                        <span class="time">{{obj.createDate | formatTime}}</span>
                    </div>
                    <div class="right">
                        <span class="fen">胜利 
                        <span class="huang" v-if="obj.result==1">+30</span>
                        <span class="fen" v-else> -30 积分</span>
                         积分</span>
                    </div>
                </div>
            </div>

            <!-- <div class="item">
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
            </div> -->
            <div class="gengduo">
                <div class="btns">查看更多</div>
            </div>
        </div>

        <div class="sheng">
            <div class="item blue">
                <div class="up">{{userInfo.topWinTime}}</div>
                <div class="down">最高连胜</div>
            </div>
            <div class="item yellow">
                <div class="up">{{userInfo.sumWinTime}}</div>
                <div class="down">总胜</div>
            </div>
            <div class="item red">
                <div class="up">{{userInfo.sumFailTime}}</div>
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
        data(){
            return {
                list:[]
            }
        },
        computed:{
            userInfo(){
                return this.$store.state.memberInfo
            }
        },
        filters:{
            formatTime (number) {
                let format = 'Y年M月D日 h:m:s'
                let time = new Date(number)
                console.log(time)
                let newArr = []
                let formatArr = ['Y', 'M', 'D', 'h', 'm', 's']

                const formatNumber =(n)=> {
                    n = n.toString()
                    return n[1] ? n : '0' + n;
                }
                newArr.push(time.getFullYear())
                newArr.push(formatNumber(time.getMonth() + 1))
                newArr.push(formatNumber(time.getDate()))

                newArr.push(formatNumber(time.getHours()))
                newArr.push(formatNumber(time.getMinutes()))
                newArr.push(formatNumber(time.getSeconds()))

                for (let i in newArr) {
                    format = format.replace(formatArr[i], newArr[i])
                }
                return format;
            }
        },
        methods:{
            async zj(){
                let res = await this.$http.post('/userWager/list')
                if(res.s == 1){
                    this.list = res.d
                }
            },
        },
        onShow(){
            this.zj()
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/styles/index.scss";
    .zhanwei{
        width:750upx;
        height:180upx;
        background:rgba(107,24,24,1);
    }
    .sheng{
        width:100%;
        padding:24upx 14upx;
        flex-direction: row;
        display:flex!important;
        align-items:center;
        justify-content:space-around;
        flex-wrap:wrap;
        .item{
            width:216upx;
            height:118upx;
            border-radius:4upx;
            .up{
                height:56upx;
                font-size:40upx;
                font-style:italic;
                color:#fff;
                font-family:Roboto-BlackItalic;
                font-weight:700;
                text-align:center;
                line-height:52upx;
            }
            .down{
                height:56upx;
                font-size:22upx;
                font-family:PingFangSC-Thin;
                color:rgba(255,255,255,1);
                line-height:56upx;
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
        width:722upx;
        margin:20upx 14upx;
        background:#fff;
        min-height:50upx;
        padding:1upx 26upx;
        position:relative;
        .gengduo{
            position:absolute;
            bottom:0;
            left:0;
            width:100%;
            height:100upx;
            padding:20upx 0;
            background:rgba(255,255,255,0.5);
            .btns{
                width:180upx;
                height:60upx;
                background:rgba(183,186,187,0.3);
                border-radius:30upx;
                font-size:22upx;
                font-family:PingFangSC-Thin;
                font-weight:100;
                color:rgba(183,186,187,1);
                line-height:60upx;
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
                    font-size:34upx;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(41,37,48,1);
                    line-height:48upx;
                }
                .right{
                    width:70upx;
                    height:34upx;
                    background:rgba(93,230,166,0.3);
                    border-radius:17upx;
                    font-size:22upx;
                    font-family:Roboto-Regular;
                    font-weight:400;
                    color:rgba(39,156,101,1);
                    line-height:34upx;
                    text-align: center;
                }
            }
            .down{
                flex-direction: row;
                display:flex!important;
                align-items:center;
                justify-content:space-between;
                margin-top:10upx;
                .left{
                    font-size:28upx;
                    font-family:Roboto-Light;
                    font-weight:300;
                    color:rgba(41,37,48,0.3);
                    line-height:38upx;
                }
                .right{
                    font-size:28upx;
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(41,37,48,1);
                    line-height:40upx;
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
            width:520upx;
            height:2upx;
            background:rgba(183, 186, 187, 1);
            margin:40upx auto;
            text-align:center;
            .font{
                position:relative;
                font-size:28upx;
                top:-28upx;
                background:#fff;
                padding:0 64upx;
            }
        }
    }
</style>