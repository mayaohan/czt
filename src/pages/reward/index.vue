<template>
    <div class="content">
        <e-header></e-header>
        <div class="logos">
            <div class="item" v-for="obj in 4" :key="obj"  @click="env_change">
                <div class="icon">
                    <img :src="'/static/bt'+(obj+1)+'.png'" alt="" mode="widthFix">
                </div>
                <div class="font left_right_center t28">兑换</div>
            </div>
            <div class="item action" v-for="obj in 5" :key="obj"  @click="env_change">
                <div class="icon">
                    <img :src="'/static/bt'+(obj+1)+'.png'" alt="" mode="widthFix">
                </div>
                <div class="font left_right_center t28">兑换</div>
            </div>
        </div>

        <div class="zhanwei"></div>

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
    </div>
</template>

<script>
    import EHeader from '@/component/header'
    import EDialog from '@/component/dialog'
    export default {
        components:{EHeader,EDialog},
        mounted(){
        },
        data() {
			return {
				ent:{
					show:false,
					imgUrl:'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eonbb6BjKOJZJFyBtgraXiawVHA3sW51Cywx8jv8ysdd7vsia3WkpOpstMUc4Mq0dnzxaLT28saIwibw/132',
				},
			}
		},
        methods:{
            env_change(){
				this.ent.show = true
            },
            ent_ov(data){
                this.ent.show = false
                wx.navigateTo({
                    url: '/pages/address/index'
                })
			},
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/styles/index.scss";
    .logos{
        width:100%;
        flex-direction: row;
        display:flex!important;
        align-items:center;
        justify-content:space-around;
        flex-wrap:wrap;
        .item{
            width:180rpx;
            margin:21rpx 30rpx;
            .icon{
                width:176rpx;
                margin:0 2rpx;
                img{
                    width:100%;
                }
            }
            .font{
                width:144rpx;
                height:52rpx;
                background:rgba(252,202,47,1);
                border-radius:26rpx;
                margin:0 auto;
            }
        }
        .action{
            .font{
                background:rgba(188,188,188,1);
                color:rgba(34,30,41,1);
            }
        }
    }
    .zhanwei{
        width:750rpx;
        height:180rpx;
        background:rgba(107,24,24,1);
        margin-top:100rpx;
    }
</style>