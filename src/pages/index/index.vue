<template>
	<view class="content">
		<e-header :inde="true"></e-header>
		<div class="model">
			<div class="xinazhi" style="height:40rpx;width:100%;"></div>
			<div class="item-father left_right_center">
				<div class="item" @click="env_change">
					<img src="/static/bt1.png" alt="" mode="widthFix">
				</div>
				<div class="item" @click="env_change">
					<img src="/static/bt2.png" alt="" mode="widthFix">
				</div>
				<div class="item" @click="env_change">
					<img src="/static/bt3.png" alt="" mode="widthFix">
				</div>
				<div class="item" @click="env_change">
					<img src="/static/bt4.png" alt="" mode="widthFix">
				</div>
			</div>
			<div class="item-father left_right_center">
				<div class="item" @click="env_change">
					<img src="/static/bt5.png" alt="" mode="widthFix">
				</div>
				<div class="item" @click="env_change">
					<img src="/static/bt6.png" alt="" mode="widthFix">
				</div>
				<div class="item" @click="env_change">
					<img src="/static/bt7.png" alt="" mode="widthFix">
				</div>
				<div class="item" @click="env_change">
					<img src="/static/bt8.png" alt="" mode="widthFix">
				</div>
			</div>
		</div>

		<div class="title_a t24 left_right_center">开奖结果以每晚9点 Binance.com BTC/usdt 交易对为准</div>

		<div class="middles">
			<div class="bigbtn left_right_center" v-if="isData">
				<div class="btns lv left_right_center" @click="up">买涨</div>
				<div class="btns ho left_right_center" @click="down">买跌</div>
			</div>
			<div class="bigbtn left_right_center" v-else>
				<div class="font">赢取的积分将在下注日晚9点15返回到您的账户 明日下午13:00后可参与心的一轮竞猜</div>
			</div>
			<div class="jd">
				<div class="lv" style="width:60%;"></div>
				<div class="ho"></div>
			</div>
			<div class="timers left_right_center" v-if="isData">
				<div class="item">
					<p class="t28 ts1">距离今日押注截止还有</p>
					<p class="t24 ts2">（每次下注消耗 30 积分）</p>
				</div>
				<div class="item left_right_center">
					<div class="black">{{hour}}</div>
					<div class="white">小时</div>
					<div class="black">{{min}}</div>
					<div class="white">分钟</div>
				</div>
			</div>
			<div class="timers left_right_center" v-else>
				<div class="vitem t34">已下注<span style="color:#5DE6A6;">涨</span>30积分</div>
			</div>
		</div>

		<div class="title_b t24 left_right_center">
			<div class="item left_right_center">恭喜ID：<span class="huang">毛毛</span></div>
			<div class="item left_right_center">兑换二等奖：<span class="huang">LTC一枚</span></div>
			<div class="item left_right_center">2019/5/5 12:30</div>
		</div>

		<div class="banner"></div>
		<e-dialog
			:show="param.show"
			:img-url="param.imgUrl"
			@handle="cuntry"
		>
			{{param.title}}
		</e-dialog>
		<e-dialog
			:show="ent.show"
			:img-url="ent.imgUrl"
			@handle="ent_ov"
		>
			<div style="width:100%;" class="text-center">
				<p class="t34 cont">兑换此奖品消耗<span class="huang">2000积分</span></p>
				<p class="t34 cont">并达到<span class="huang">10连胜</span>，确认兑换吗？</p>
			</div>
		</e-dialog>

	</view>
</template>

<script>
	import EDialog from '@/component/dialog'
	import EHeader from '@/component/header'
	export default {
		components:{EDialog,EHeader},
		data() {
			return {
				code:'',
				latitude:'',
				longitude:'',
				cfhistory:'',
				hour:'',
				min:'',
				param:{
					show:false,
					imgUrl:'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eonbb6BjKOJZJFyBtgraXiawVHA3sW51Cywx8jv8ysdd7vsia3WkpOpstMUc4Mq0dnzxaLT28saIwibw/132',
					title:'',
					flag:0
				},
				ent:{
					show:false,
					imgUrl:'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eonbb6BjKOJZJFyBtgraXiawVHA3sW51Cywx8jv8ysdd7vsia3WkpOpstMUc4Mq0dnzxaLT28saIwibw/132',
				},
				isData:false,//模拟是否有数据
			}
		},
		computed:{
			getUser(){
				return this.$store.state.personal.code!=undefined
			},
		},
		onLoad() {

		},
		methods: {
			cuntry(data){
				if(data){
					setTimeout(e=>{
						if(this.param.flag==1){

						}
						if(this.param.flag==2){
							
						}
						this.param.show = false
					},1000)
				}else{
					this.param.show = false
				}
			},
			up(){
				if(!this.getUser){
					this.login()
					return
				}
				this.param.title = '确认下注涨吗？'
				this.param.flag = 1
				this.param.show = true
			},
			down(){
				if(!this.getUser){
					this.login()
					return
				}
				this.param.title = '确认下注跌吗？'
				this.param.flag = 2
				this.param.show = true
			},
			env_change(){
				if(!this.getUser){
					this.login()
					return
				}
				this.ent.show = true
			},
			ent_ov(data){
				if(data){
					setTimeout(e=>{
						this.ent.show = false
					},1000)
				}else{
					this.ent.show = false
				}
			},
			clock(){
				let oDate = new Date();//获取日期对象
				let oldTime = oDate.getTime();//现在距离1970年的毫秒数
				let newDate = new Date('2020/1/1 00:00:00');
				let newTime = newDate.getTime();//2019年距离1970年的毫秒数
				let second = Math.floor((newTime - oldTime) / 1000);//未来时间距离现在的秒数
				let day = Math.floor(second / 86400);//整数部分代表的是天；一天有24*60*60=86400秒 ；
				second = second % 86400;//余数代表剩下的秒数；
				let hour = Math.floor(second / 3600);//整数部分代表小时；
				second %= 3600; //余数代表 剩下的秒数；
				let minute = Math.floor(second / 60);
				second %= 60;
				this.hour = this.tow(hour)
				this.min = this.tow(minute)
				// let str = this.tow(day) + '<span class="time">天</span>'
				// 	+ this.tow(hour) + '<span class="time">小时</span>'
				// 	+ this.tow(minute) + '<span class="time">分钟</span>'
				// 	+ this.tow(second) + '<span class="time">秒</span>';
				// 	console.log(str)
				// oSpan.innerHTML = str;
			},
			tow(n) {
				return n >= 0 && n < 10 ? '0' + n : '' + n;
			},
			location(){
				let _this = this;
				//获取定位
				// uni.getLocation({
				// 	type: 'wgs84',
				// 	success(res) {
				// 	  let {longitude,latitude} = res;
				// 	  _this.longitude = res.longitude
				// 	  _this.latitude = res.latitude
				// 	  console.log(res)
				// 	},
				// 	fail(){
				// 	  uni.showModal({
				// 		title: '温馨提示',
				// 		content: '获取定位失败，请前往设置打开定位权限',
				// 		confirmText: '设置',
				// 		success(res) {
				// 		  if (res.confirm) {
				// 			uni.openSetting({
				// 			  success: function (res) {
				// 				if (res.authSetting["scope.userLocation"]) {
				// 				  uni.getLocation({
				// 					type: 'wgs84',
				// 					success(res) {
				// 					  console.log(res)
				// 					}
				// 				  })
				// 				}else{
				// 				  uni.navigateBack({
				// 					delta: 1
				// 				  })
				// 				}
				// 			  }
				// 			})
				// 		  } else if (res.cancel) {
				// 			console.log(111)
				// 		  }
				// 		}
				// 	  })
				// 	}
				// })
			},
			userinfo(){
				// uni.login({
				// 	provider: 'weixin',
				// 	success: (res)=> {
				// 	  if (res.code) {
				// 		//发起网络请求    
				// 		this.code = res.code
				// 		console.log('code:' + res.code)
				// 	  } else {
				// 		// console.log('获取用户登录态失败！' + res.errMsg)
				// 	  }
				// 	}
				// });
			},
			login(){
				wx.navigateTo({
					url: '/pages/login/index'
				})
			}
		},
		mounted() {
			this.location()
			this.userinfo()
			setInterval(this.clock, 1000);
		}
	}
</script>

<style lang="scss" scoped>
	@import "@/styles/index.scss";
	
	.model{
		width:718rpx;
		height:366rpx;
		background:linear-gradient(322deg,rgba(26,25,34,1) 0%,rgba(46,52,65,1) 100%);
		border-radius:8rpx;
		margin:28rpx 16rpx;
	}
	.item-father{
		width:100%;
		.item{
			width:120rpx;
			margin:12rpx;
			img{
				width:100%;
			}
		}
	}
	.title_a{
		width:100%;
		height:48rpx;
		background:rgba(247,206,78,0.2);
		color:#DE9D21;
	}
	.title_b{
		width:100%;
		height:66rpx;
		background:rgba(247,206,78,0.2);
		color:#DE9D21;
		.item{
			width:33%;
			
		}
	}
	.middles{
		width:722rpx;
		margin:28rpx 14rpx;
		height:384rpx;
		background:rgba(255,255,255,1);
		border-radius:4rpx;
		.timers{
			width:100%;
			padding:0 36rpx;
			.item{
				width:50%;
				font-size:28rpx;
				.ts1{
					font-family:PingFangSC-Regular;
					font-weight:400;
					color:rgba(0,0,0,1);
					line-height:40rpx;
				}
				.ts2{
					font-size:24rpx;
					font-family:PingFangSC-Light;
					font-weight:300;
					color:rgba(222,157,33,1);
					line-height:34rpx;
				}
				.black{
					width:66rpx;
					line-height:34rpx;
					margin:26rpx 14rpx;
					background:#090909;
					color:#fff;
					text-align:center;
				}
				.white{
					margin:26rpx 0rpx;
					line-height:34rpx;
				}
			}
		}
		.bigbtn{
			.btns{
				width:312rpx;
				height:110rpx;
				border-radius:8rpx;
				margin:28rpx 18rpx;
				font-size:60rpx;
				color:#fff;
			}
			.font{
				text-align: center;
				margin:60rpx 52rpx 0 52rpx;
				width:646rpx;
				height:80rpx;
				font-size:28rpx;
				font-family:Roboto-Light;
				font-weight:300;
				color:rgba(0,0,0,1);
				line-height:38rpx;
			}
			.lv{
				background:rgba(93,230,166,1);
				box-shadow:0rpx 40rpx 52rpx -16rpx rgba(61,227,185,0.5);
			}
			.ho{
				background:rgba(252,98,98,1);
				box-shadow:0rpx 40rpx 52rpx -16rpx rgba(231,71,71,0.5);
			}
			
		}
		.jd{
			width:642rpx;
			height:20rpx;
			background:rgba(252,98,98,1);
			box-shadow:0px 40px 52px -16px rgba(231,71,71,0.5);
			margin:56rpx 40rpx;
			display:flex;
			.lv{
				height:20rpx;
				background:rgba(93,230,166,1);
			}
			.ho{
				height:20rpx;
				background:rgba(252,98,98,1);
			}
		}
	}

	.banner{
		width:100%;
		height:180rpx;
		margin:28rpx 0;
		background:#fff;
	}
</style>

