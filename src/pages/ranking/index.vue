<template>
    <div class="content">
        <div class="header">
            <img src="/static/bg.png" alt="" mode="widthFix">
            <div class="bottomHeader">
                <div class="rand">
                    <img :src="userInfo.avatarUrl" alt="">
                </div>
                <div class="box">
                    <div v-if="mingci!=0" class="niubi">
                        <p class="mingci">{{mingci}}</p>
                        <img src="/static/nb.png" alt="" mode="widthFix">
                    </div>
                    <div v-else class="song">未上榜</div>

                    <div class="textBox left_right_center">
                        <div class="font left_right_center">{{userInfo.name}}</div>
                        <div class="shu"></div>
                        <div class="font left_right_center">
                            已有积分
                            <div class="jifen">
                                <img src="/static/yx.png" alt="">{{userInfo.expSum}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bodys left_right_center">
            <div style="width:100%;">
                <div class="title">
                    <span class="font">已邀请好友</span>
                </div>
            </div>
            

            <div class="contenter" v-for="(item,idc) in friendList" :key="item.id">
                <div class="item column_center_center" v-if="idc==0">
                    <div class="head">
                        <div class="box"></div>
                        <div class="lingjie">
                            <img src="/static/lj.png" alt="" mode="widthFix">
                            <div class="font">{{idc+1}}</div>
                        </div>
                    </div>


                    <div class="zhanwei"></div>
                    <p class="t22">{{item.name}}</p>
                    <p class="t22">
                        <span>{{item.expSum}}</span>
                        <img :src="item.avatarUrl" alt="" style="position:relative;top:7upx;">
                    </p>
                </div>

                <div class="item column_center_center" v-if="idc==1">
                    <div class="head">
                        <div class="box"></div>
                        <div class="lingjie">
                            <img src="/static/lj2.png" alt="" mode="widthFix">
                            <div class="font">{{idc+1}}</div>
                        </div>
                    </div>

                    <div class="zhanwei"></div>
                    <p class="t22">{{item.name}}</p>
                    <p class="t22">
                        <span>{{item.expSum}}</span>
                        <img :src="item.avatarUrl" alt="" style="position:relative;top:7upx;">
                    </p>
                </div>

                <div class="item column_center_center" v-if="idc==2">
                    <div class="head">
                        <div class="box"></div>
                        <div class="lingjie">
                            <img src="/static/lj3.png" alt="" mode="widthFix">
                            <div class="font">{{idc+1}}</div>
                        </div>
                    </div>

                    <div class="zhanwei"></div>
                    <p class="t22">{{item.name}}</p>
                    <p class="t22">
                        <span>{{item.expSum}}</span>
                        <img :src="item.avatarUrl" alt="" style="position:relative;top:7upx;">
                    </p>
                </div>

                <div class="item column_center_center" v-if="idc>2">
                    <div class="head">
                        <div class="box"></div>
                        <div class="rand">
                            <div class="font">{{idc+1}}</div>
                            <!-- <img src="/static/lj3.png" alt="" mode="widthFix"> -->
                        </div>
                    </div>

                    <div class="zhanwei"></div>
                    <p class="t22">{{item.name}}</p>
                    <p class="t22">
                        <span>{{item.expSum}}</span>
                        <img :src="item.avatarUrl" alt="" style="position:relative;top:7upx;">
                    </p>
                </div>

            </div>



            
            <!-- <div class="item column_center_center">
                <div class="head">
                    <div class="box"></div>
                    <div class="lingjie">
                        <img src="/static/lj.png" alt="" mode="widthFix">
                        <div class="font">1</div>
                    </div>
                </div>


                <div class="zhanwei"></div>
                <p class="t22">上岛咖上岛</p>
                <p class="t22">
                    <span>1234</span>
                    <img src="/static/yx.png" alt="" style="position:relative;top:7upx;">
                </p>
            </div>
            <div class="item column_center_center">
                <div class="head">
                    <div class="box"></div>
                    <div class="lingjie">
                        <img src="/static/lj2.png" alt="" mode="widthFix">
                        <div class="font">2</div>
                    </div>
                </div>

                <div class="zhanwei"></div>
                <p class="t22">上岛咖上岛</p>
                <p class="t22">
                    <span>1234</span>
                    <img src="/static/yx.png" alt="" style="position:relative;top:7upx;">
                </p>
            </div>
            <div class="item column_center_center">
                <div class="head">
                    <div class="box"></div>
                    <div class="lingjie">
                        <img src="/static/lj3.png" alt="" mode="widthFix">
                        <div class="font">3</div>
                    </div>
                </div>

                <div class="zhanwei"></div>
                <p class="t22">上岛咖上岛</p>
                <p class="t22">
                    <span>1234</span>
                    <img src="/static/yx.png" alt="" style="position:relative;top:7upx;">
                </p>
            </div>

            <div class="item column_center_center" v-for="obj in 6" :key="obj">
                <div class="head">
                    <div class="box"></div>
                    <div class="rand">
                        <div class="font">4</div>
                    </div>
                </div>

                <div class="zhanwei"></div>
                <p class="t22">上岛咖上岛</p>
                <p class="t22">
                    <span>1234</span>
                    <img src="/static/yx.png" alt="" style="position:relative;top:7upx;">
                </p>
            </div> -->
            <!-- <div class="footer left_right_center">
                <div class="btns left_right_center">查看更多</div>
            </div> -->
        </div>



        <div class="bodys left_right_center" style="margin-top:30upx;">
            <div style="width:100%;">
                <div class="title">
                    <span class="font">全国排名</span>
                </div>
            </div>

            <div class="itemFlex left_right_center" v-for="(ob,idx) in chinaList" :key="ob.id">
                <div class="num left_right_center">{{idx}}</div>
                <div class="img left_right_center"><img src="/static/yx.png" alt="" mode="widthFix"></div>
                <div class="equma">{{ob.name}}</div>
                <div class="fen">{{ob.expSum}}</div>
                <div class="icon left_right_center"><img src="/static/yx.png" alt="" mode="widthFix"></div>
            </div>


            <!-- <div class="footer left_right_center">
                <div class="btns left_right_center">查看更多</div>
            </div> -->
        </div>
        
    </div>
</template>

<script>
    export default {
        data(){
            return {
                shifouniubi:true,
                chinaList:[],
                friendList:[],
            }
        },
        computed:{
            userInfo(){
                return this.$store.state.memberInfo
            },
            mingci(){
                return this.chinaList.findIndex(e=>e.id==this.userInfo.id)+1
            }
        },
        methods:{
            async zj(){
                let res = await this.$http.post('/memberinfo/getRanking')//获取全国积分排名
                let resd = await this.$http.post('/memberinfo/getRankingByInviter')//获取自己邀请好友排名
                if(res.s == 1){
                    console.log(res)
                    this.chinaList = res.d
                }
                if(resd.s == 1){
                    console.log(resd)
                    this.friendList = resd.d
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
    .bodys{
        flex-wrap:wrap;
        justify-content:flex-start;
        margin:80upx auto 0 auto;
        width:722upx;
        background:rgba(255,255,255,1);
        padding:1rpx 26upx 40upx 26upx;
        position:relative;
        .itemFlex{
            width:100%;
            height:80upx;
            padding:0 30upx;
            .num{
                width:52upx;
                font-size:22upx;
                font-family:Roboto;
                font-weight:900;
                color:rgba(34,30,41,1)
            }
            .img{
                width:96upx;
                img{
                    width:48upx;
                    border-radius: 50%;
                    overflow: hidden;
                }
            }
            .equma{
                width:300upx;
                font-size:28upx;
                font-family:PingFang SC;
                font-weight:400;
                color:rgba(34,30,41,1);
            }
            .fen{
                width:200upx;
                font-size:28upx;
                font-family:Roboto;
                font-weight:300;
                line-height:38upx;
                color:rgba(242,174,41,1);
                text-align:right;
            }
            .icon{
                width:76upx;
                img{
                    width:32upx;
                }
            }
        }
        .footer{
            position:absolute;
            bottom:0;
            height:80upx;
            left:0;
            width:100%;
            background:rgba(255,255,255,0.8);
            .btns{
                width:180upx;
                height:60upx;
                background:rgba(183,186,187,0.3);
                border-radius:30upx;
                font-size:22upx;
                font-family:PingFang SC;
                font-weight:300;
                color:rgba(183,186,187,1);
            }
        }
        .item{
            width:33%;
            height:180upx;
            .zhanwei{
                width:100%;
                margin-top:30upx;
            }
            .t22{
                line-height: 30rpx;
                span{
                    color:rgba(242, 174, 41, 1);
                }
                img{
                    width:32upx;
                    height:32upx;
                }
            }
            .head{
                width:74upx;
                height:74upx;
                background:rgba(0,0,0,0.5);
                border-radius:50%;
                .box{
                    width:100%;
                    height:100%;
                    border-radius:50%;
                    overflow:hidden;
                    img{
                        width:100%;
                    }
                }
                position:relative;
                .lingjie{
                    width:38upx;
                    position:absolute;
                    top:54upx;
                    left:50%;
                    margin-left:-18upx;
                    .font{
                        position:absolute;
                        width:100%;
                        top:0;
                        font-size:12upx;
                        font-family:Roboto;
                        font-weight:900;
                        line-height:20upx;
                        color:rgba(34,30,41,1);
                        text-align:center;
                    }
                }
                .rand{
                    width:28upx;
                    height:28upx;
                    background:rgba(222,222,222,1);
                    border-radius:50%;
                    font-size:12upx;
                    font-family:Roboto;
                    font-weight:900;
                    line-height:16upx;
                    color:rgba(34,30,41,1);
                    position:absolute;
                    top:54upx;
                    left:50%;
                    margin-left:-14upx;
                    text-align:center;
                }
            }
        }
        .title{
            width:300rpx;
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

    .header{
        width:750upx;
        height:284upx;
        position:relative;
        img{
            width:100%;
        }
        .bottomHeader{
            width:720upx;
            height:164upx;
            background:rgba(255,255,255,1);
            opacity:1;
            border-radius:4upx;
            left:15upx;
            position:absolute;
            bottom:-60upx;
            .rand{
                width:140upx;
                height:140upx;
                background:rgba(255,255,255,1);
                border:2upx solid rgba(112,112,112,1);
                border-radius:50%;
                opacity:1;
                position:absolute;
                top:-70upx;
                left:50%;
                margin-left:-70upx;
                overflow:hidden;
                img{
                    width:100%;
                }
            }
            .box{
                width:100%;
                height:100%;
                overflow:hidden;
                position:relative;
                
                .niubi{
                    width:67upx;
                    height:84upx;
                    position:absolute;
                    left:10upx;
                    top:0;
                    img{
                        width:100%;
                    }
                    .mingci{
                        position:absolute;
                        top:5upx;
                        left:0;
                        width:100%;
                        text-align:center;
                        line-height:38upx;
                        font-size:28upx;
                        font-family:Roboto;
                        font-weight:900;
                        color:rgba(34,30,41,1);
                    }
                }
                .song{
                    width:300upx;
                    line-height:38upx;
                    text-align:center;
                    font-size:22upx;
                    color:rgba(41,37,48,1);
                    background:rgba(216, 216, 216, 1);
                    position:absolute;
                    left:-110upx;
                    top:20upx;
                    transform:rotate(-45deg)
                }
                .textBox{
                    width:100%;
                    height:100%;
                    position:relative;
                    .font{
                        width:50%;
                        height:100%;
                        font-size:34upx;
                        font-family:PingFang SC;
                        font-weight:400;
                        line-height:48upx;
                        color:rgba(34,30,41,1);
                        position:relative;
                        .jifen{
                            position:absolute;
                            width:120upx;
                            height:40upx;
                            background:rgba(252,202,47,0.19);
                            border-radius:20upx;
                            text-align:center;
                            line-height:40upx;
                            font-size:28upx;
                            font-family:Roboto;
                            font-weight:300;
                            color:rgba(242,174,41,1);
                            left:50%;
                            bottom:15upx;
                            margin-left:-60upx;
                            img{
                                width:24upx;
                                height:24upx;
                            }
                        }
                    }
                    .shu{
                        position:absolute;
                        left:50%;
                        margin-left:-2upx;
                        top:82upx;
                        width:4upx;
                        height:30upx;
                        background:rgba(228,228,228,1);
                        border-radius:2upx;
                    }
                }
            }
        }
    }
    
</style>