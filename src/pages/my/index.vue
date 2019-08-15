<template>
    <div class="content">
        <e-header></e-header>
        
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

        <div class="cont" style="min-height:600upx;">
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
                            <span class="huang" v-if="obj.result==1">+{{obj.takePoint}}</span>
                            <span class="fen" v-else> -{{obj.takePoint}}</span>
                         积分</span>
                    </div>
                </div>
            </div>

            <p v-if="list.length==0" class="text-center t22 fct" style="padding:20upx 0">暂无数据</p>

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
            <div class="gengduo" v-if="param.pageNum<=navigateLastPage">
                <div class="btns" @click="add">查看更多</div>
            </div>
        </div>
        <button style="border:0"  class="fx_btns" open-type='share'>邀请好友</button>

        

        <!-- <div class="zhanwei"></div> -->
    </div>
</template>

<script>
    import EHeader from '@/component/header'
    export default {
        components:{EHeader},
        data(){
            return {
                list:[],
                param:{
                    pageNum:1,
                    pageSize:10
                },
                flag:false,
                navigateLastPage:2
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
                this.flag = true
                let res = await this.$http.post('/userWager/list',this.param)
                if(res.s == 1){
                    this.list = this.list.concat(res.d.list)
                    this.$forceUpdate()
                    this.flag = false
                    this.navigateLastPage = res.d.nextPage;
                }
            },
            add(){
                if(this.flag) return
                this.param.pageNum++
                if(this.param.pageNum>this.navigateLastPage){
                    return
                } 
                this.zj()
            }
        },
        onShareAppMessage(options) {
            return {
                title: `分享给好友`,
                path:`/pages/index/index?id=${this.userInfo.id}`,

            }
        },
        onHide(){
            this.param.pageNum = 1
            this.list = []
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
        justify-content:space-between;
        flex-wrap:wrap;
        .item{
            width:216upx;
            height:118upx;
            border-radius:4upx;
            .up{
                height:68upx;
                font-size:40upx;
                font-style:italic;
                color:#fff;
                font-family:Roboto-BlackItalic;
                font-weight:700;
                text-align:center;
                line-height:68upx;
            }
            .down{
                height:50upx;
                font-size:22upx;
                font-family:PingFangSC-Thin;
                color:rgba(255,255,255,1);
                line-height:56upx;
                text-align:center;
            }
        }
        .blue{
            .up{
                background:linear-gradient(342deg,#4689D8 0%,#9BCAFF 100%);
            }
            .down{
                background:#538DE8;
            }
        }
        .yellow{
            .up{
                background:linear-gradient(342deg,#FDE372 0%,#FCB52F 100%);
            }
            .down{
                background:#F7AC20;
            }
        }
        .red{
            .up{
                background:linear-gradient(342deg,#F78B48 0%,#FFB372 100%);
            }
            .down{
                background:#F78339;
            }
        }
    }
    .cont{
        width:722upx;
        margin:0upx 14upx;
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
    .fx_btns{
        width:720upx;
        margin:56upx auto;
        line-height:140upx;
        font-size:52upx;
        font-family:PingFangSC-Semibold;
        font-weight:600;
        color:rgba(0,0,0,1);
        border-radius:0;
        background:#FCB52F;
    }
</style>