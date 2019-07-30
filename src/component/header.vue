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
                        <span class="icon" @click="go('child')">
                            <img style="width:36upx;height:48upx;" src="/static/ss.png" alt="">
                        </span>
                        <span class="icon">
                            <img src="/static/nn.png" alt="" mode="widthFix">
                        </span>
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
		computed:{
			getUser(){
				return !this.$store.state.personal.code
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