<template>
    <div class="conte">
        <!-- 个人信息及头像 -->
        <div class="header left_right_center">
            <div class="avatarpanel">
                <img v-if="userInfo.avatarUrl" class="avatar" :src="userInfo.avatarUrl"/>
                <img v-else mode="widthFix" class="avatar" src="/static/users.png"/>
            </div>
            <div class="ri">
                <div class="t34 fc1 b500" style="color:#FCCA2F;position:relative;">
                    <span v-if="userInfo.name">{{userInfo.name}}</span>
                    <span v-else>猜涨跌用户{{suijishu}}</span>
                    <div class="right" v-if="inde">
                        <span class="icon" @click="go('child')">
                            <img style="width:36upx;height:48upx;" src="/static/ss.png" alt="">
                        </span>
                        <span class="icon" @click="go('play')">
                            <img src="/static/nn.png" alt="" mode="widthFix">
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="or">
            <div class="bq">
                <span class="con t28" v-if="userInfo.expSum"><i style="display:inline-block" class="icon-search iconfont"></i>{{userInfo.expSum}}</span>
                <span class="con t28" v-else><i style="display:inline-block" class="icon-search iconfont"></i>--</span>
                <span class="con t28" v-if="topWinTime>=0">{{topWinTime | getCH}}</span>
                <span class="con t28" v-else>未获得称号</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'EHeader',
        props:{
            inde:{
                type:Boolean,
                default:false
            }
        },
        async mounted(){
            
			let data = await this.$http.post('/memberinfo/reloadMi')
			if(data.s==1){
                this.$store.commit('SET_memberInfo_SINGLE',data.d)
			}
        },
		computed:{
			getUser(){
				return this.$store.state.memberInfo.id!=undefined
            },
            userInfo(){
				return this.$store.state.memberInfo
            },
            topWinTime(){
                return this.$store.state.memberInfo.topWinTime || -1
            },
            suijishu(){
                let now = new Date().getTime()
                let star = new Date('2019/08/1 00:00:00').getTime()
                let str = parseInt((now-star)/(60*60*1000*24))
                let end = new Date().Format('h:m').split(':')
                end.map(obj=>{
                    if(obj.length==1){
                        obj = '0'+obj
                    }
                    return obj
                })
                return str+end[0]+end[1]
            }
            
        },
        filters:{
            getCH(a){
                if(a>10) return '中本聪'
                if(a == 10) return '资本大鳄'
                if(a == 9) return '大佬'
                if(a == 8) return '庄家'
                if(a == 7) return '华尔街精英'
                if(a == 6) return '投资家'
                if(a == 5) return '大户'
                if(a == 4) return '资本新贵'
                if(a == 3) return '牛散'
                if(a == 2) return '成熟的韭菜'
                if(a == 1) return '骄傲的韭菜'
                if(a == 0) return '小白'
                
            }
        },
        data(){
            return {
				userIfo:{
					name:'xxx',
					avatarUrl:'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eonbb6BjKOJZJFyBtgraXiawVHA3sW51Cywx8jv8ysdd7vsia3WkpOpstMUc4Mq0dnzxaLT28saIwibw/132',
				},
            }
        },
        methods:{
            go(data){
                if(!this.getUser){
					this.login()
					return
				}
                uni.navigateTo({
                    url:`/pages/${data}/index`
                })
            },
            login(){
				wx.navigateTo({
					url: '/pages/login/index'
				})
			}
        }
    }
</script>

<style lang="scss" scoped>
	@import "@/styles/index.scss";
    // 头像信息
    .header{
      width:100%;
      height:98upx;
      position:relative;
      display:flex;
	  opacity:1;
	  padding:0 16upx;
	  .right{
			position:absolute;
			right:16upx;
			top:16upx;
			flex-direction: row;
			display:flex;
			align-items:center;
			justify-content:flex-end;
			.icon{
				margin-left:22upx;
				width:48upx;
				height:48upx;
				// background:#fff;
                img{
                    width:100%;
                }
			}
	  }
      .avatarpanel{
        width:56upx;
        height:56upx;
        border-radius:50%;
        overflow:hidden;
        background:#fff;
      }
      .ri{
		width:100%;
        padding-left:30upx;
        .bt{
          margin-top:32upx;
          .age{
            padding-left:64upx;
          }
        }
      }
      .sj{
        width:48upx;
        height:48upx;
        position:absolute;
        right:14upx;
        top:50%;
        transform: translate(0%, -50%);
	  }
	}
    .or{
		width:718upx;
		margin:0 16upx;
		.bq{
			display:flex;
			flex-wrap:wrap;
			width:100%;
			margin-bottom:30upx;
			.con{
				background:rgba(252,202,47,0.19);
				border-radius:20upx;
				padding:5upx 30upx;
				color:#F2AE29;
				white-space:nowrap;
				margin-right:10upx;
				margin-bottom:10upx;
			}
		}
	}
</style>