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
			<div class="bigbtn left_right_center" v-if="isData.done=='0'">
				<div class="btns lv left_right_center" @click="upAndDown(1)">买涨</div>
				<div class="btns ho left_right_center" @click="upAndDown(0)">买跌</div>
			</div>
			<div class="bigbtn left_right_center" v-else>
				<div class="font">赢取的积分将在下注日晚9点15返回到您的账户 明日下午13:00后可参与心的一轮竞猜</div>
			</div>
			<div class="jd">
				<div class="lv" :style="{width:width+'%'}"></div>
				<div class="ho"></div>
			</div>
			<div class="timers left_right_center" v-if="isData.done=='0'">
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

		<div class="title_b t24 relative">
			<div class="absolute every" :style="{'left':left+'px'}">
				<span v-for="obj in noticeContent" :key="obj.id">
					<span class="item">恭喜ID：<span class="huang">{{obj.id}}</span></span>
					<span class="item"><span class="huang"> {{obj.content}}</span></span>
					<span class="item"><span class="huang"> {{obj.createDate}}</span></span>
				</span>
				
			</div>
		</div>

		<!-- <div class="banner"></div> -->
		<e-dialog
			:show="param.show"
			:img-url="param.imgUrl"
			@handle="cuntry"
		>
			{{param.title}}
		</e-dialog>

	</view>
</template>

<script>
	import EDialog from '@/component/dialog'
	import EHeader from '@/component/header'
import { clearInterval } from 'timers';
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
				isData:{
					done: "0",
					downCount: 0,
					secCount: 0,
					type: '',
					upCount: 0,
					wagerId: 0
				},//模拟是否有数据
				any:false,
				noticeContent:[],
				left:375,
				IS_THIS:true,

			}
		},
		onShow(){
			this.IS_THIS = true
			let res = wx.getLaunchOptionsSync();
			if(res.query.id){
				this.$store.commit('OUT_ID',res.query.id)
			}
		},
		computed:{
			getUser(){
				return this.$store.state.memberInfo.id!=undefined
			},
			userInfo(){
				return this.$store.state.memberInfo
			},
			width(){
				let a = Number(this.isData.upCount)
				let b = Number(this.isData.downCount)
				let sum = Number(this.isData.upCount) + Number(this.isData.downCount)
				if(sum>0&&a>0){
					return parseInt(a/sum*100)
				}else{
					return 50
				}
			}
		},
		onLoad() {

		},
		methods: {
			async cuntry(data){
				if(data){
					if(this.userInfo.expSum>=15){
						let res = await this.$http.post(`/userWager/insert`,{type:String(this.param.flag)})
						// console.log(res)
						if(res.s==1){
							this.userStatus()
							this.$store.commit('KOU_expSum',15)
							this.param.show = false
							this.$forceUpdate()
						}
					}else{
						console.log('积分不足')
						if(!this.any){
							this.any = true
							this.param.title = '积分不足，去做任务吧？'
						}else{
							uni.navigateTo({
								url:`/pages/${data}/index`
							})
							this.any = false
							this.param.show = false
						}
					}
					
					// this.param.show = false
				}else{
					this.param.show = false
					this.any = false
				}
			},
			upAndDown(data){
				if(!this.getUser){
					this.login()
					return
				}
				if(data){
					this.param.title = '确认下注涨吗？'
					this.param.imgUrl = '/static/1.png'
				}else{
					this.param.title = '确认下注跌吗？'
					this.param.imgUrl = '/static/0.png'
				}
				this.param.flag = data
				this.param.show = true
			},
			env_change(){
				if(!this.getUser){
					this.login()
					return
				}
				uni.switchTab({
					url: '/pages/reward/index'
				})
			},
			clock(){
				if(this.IS_THIS){
					let second = this.isData.secCount
					let day = Math.floor(second / 86400);//整数部分代表的是天；一天有24*60*60=86400秒 ；
					second = second % 86400;//余数代表剩下的秒数；
					let hour = Math.floor(second / 3600);//整数部分代表小时；
					second %= 3600; //余数代表 剩下的秒数；
					let minute = Math.floor(second / 60);
					second %= 60;
					this.hour = this.tow(hour)
					this.min = this.tow(minute)
					this.isData.secCount-=60
					console.log(second)
					// let str = this.tow(day) + '<span class="time">天</span>'
					// 	+ this.tow(hour) + '<span class="time">小时</span>'
					// 	+ this.tow(minute) + '<span class="time">分钟</span>'
					// 	+ this.tow(second) + '<span class="time">秒</span>';
					// 	console.log(str)
					// oSpan.innerHTML = str;
				}
			},
			tow(n) {
				return n >= 0 && n < 10 ? '0' + n : '' + n;
			},
			login(){
				wx.navigateTo({
					url: '/pages/login/index'
				})
			},
			async userStatus(){
				let res = await this.$http.post('/userWager/getStatus')
				if(res.s == 1){
					Object.assign(this.isData,res.d)
					this.clock()
				}
			},
			async notice(){
				let res = await this.$http.post('/notice/getList')
				if(res.s == 1){
					res.d.map(ob=>{
						ob.createDate = new Date(ob.createDate).Format('yy-MM-dd hh:mm:ss')
						return ob
					})
					this.noticeContent = res.d
					this.noticeContent.push(res.d[0])
					this.noticeContent.push(res.d[0])
					this.noticeContent.push(res.d[0])
					this.noticeContent.push(res.d[0])
					this.noticeContent.push(res.d[0])
					console.log(this.noticeContent)

					
				}
			},
			animate(){
				if(this.IS_THIS){
					let query = wx.createSelectorQuery();
					let _this = this
					query.select('.every').boundingClientRect(function (rect) {
						
						if(Math.abs(_this.left)-rect.width>100){
							_this.left = 375
						}else{
							_this.left--
						}
					}).exec();
				}
			}
		},
		onHide(){
			this.IS_THIS = false
		},
		mounted() {
			this.notice()
			this.userStatus()
			setInterval(this.clock, 1000*60);
			setInterval(this.animate, 30);
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
		padding:0 20upx;
		overflow:hidden;
		.absolute{
			line-height:66rpx;
			white-space:nowrap;
		}
		.item{
			padding:0 10upx;
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
				width:100%;
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

