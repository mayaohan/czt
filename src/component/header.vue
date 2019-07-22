<template>
    <div class="conte">
        <!-- 个人信息及头像 -->
        <div class="header left_right_center">
            <div class="avatarpanel">
                <img class="avatar" :src="userIfo.avatarUrl"/>
            </div>
            <div class="ri">
                <div class="t34 fc1 b500" style="color:#FCCA2F;position:relative;">
                    <span>{{userIfo.name}}</span>
                    <div class="right" v-if="inde">
                        <span class="icon" @click="go('child')"></span>
                        <span class="icon"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="or">
            <div class="bq">
                <span class="con t28"><i style="display:inline-block" class="icon-search iconfont"></i>666</span>
                <span class="con t28">二六个字称号</span>
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
                uni.navigateTo({
                    url:`/pages/${data}/index`
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
      height:98rpx;
      position:relative;
      display:flex;
	  opacity:1;
	  padding:0 16rpx;
	  .right{
			position:absolute;
			right:16rpx;
			top:16rpx;
			flex-direction: row;
			display:flex;
			align-items:center;
			justify-content:flex-end;
			.icon{
				margin-left:22rpx;
				width:48rpx;
				height:48rpx;
				background:#fff;
			}
	  }
      .avatarpanel{
        width:56rpx;
        height:56rpx;
        border-radius:50%;
        overflow:hidden;
      }
      .ri{
		width:100%;
        padding-left:30rpx;
        .bt{
          margin-top:32rpx;
          .age{
            padding-left:64rpx;
          }
        }
      }
      .sj{
        width:48rpx;
        height:48rpx;
        position:absolute;
        right:14rpx;
        top:50%;
        transform: translate(0%, -50%);
	  }
	}
    .or{
		width:718rpx;
		margin:0 16rpx;
		.bq{
			display:flex;
			flex-wrap:wrap;
			width:100%;
			margin-bottom:30rpx;
			.con{
				background:rgba(252,202,47,0.19);
				border-radius:20rpx;
				padding:5rpx 30rpx;
				color:#F2AE29;
				white-space:nowrap;
				margin-right:10rpx;
				margin-bottom:10rpx;
			}
		}
	}
</style>