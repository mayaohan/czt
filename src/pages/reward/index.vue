<template>
    <div class="content">
        <e-header></e-header>
        <div class="logos">
            <div class="item" v-for="obj in list" :key="obj.id">
                <div v-if="obj.num>0" class="icon" @click="env_change(obj)">
                    <img :src="'/static/bt'+obj.id+'.png'" alt="" mode="widthFix">
                    <div class="font left_right_center t28">兑换</div>
                </div>
                <div v-else class="icon action">
                    <img :src="'/static/bt'+obj.id+'.png'" alt="" mode="widthFix">
                    <div class="font left_right_center t28">兑换</div>
                </div>
                <!-- <div v-else class="icon action">
                    <img :src="'/static/bt'+obj.id+'.png'" alt="" mode="widthFix">
                    <div class="font left_right_center t28">兑换</div>
                </div> -->
            </div>
        </div>

        <!-- <div class="zhanwei"></div> -->

        <e-dialog
			:show="ent.show"
            :exp-sum="expSum_single"
			:img-url="ent.imgUrl"
            :img-urls="ent.imgUrls"
			@handle="ent_ov"
		>
			<div style="width:100%;" class="text-center">
				<p class="t34 cont">兑换{{expSum_name}}消耗<span class="huang">{{expSum_single}}积分</span></p>
				<p class="t34 cont">并达到<span class="huang">10连胜</span>，确认兑换吗？</p>
			</div>
		</e-dialog>
    </div>
</template>

<script>
    import EHeader from '@/component/header'
    import EDialog from '@/component/dialog_teshu'
    export default {
        components:{EHeader,EDialog},
        computed:{
            topWinTime(){
                return this.$store.state.memberInfo.topWinTime
            },
            expSum(){
                return this.$store.state.memberInfo.expSum
            }
        },
        onShow(){
            this.jp()
        },
        data() {
			return {
				ent:{
					show:false,
					imgUrl:'/static/d.png',
                    imgUrls:''
                },
                list:[],
                jpParam:{
                    id:'',
                    point:'',
                },
                expSum_single:'',
                expSum_name:''
			}
		},
        methods:{
            env_change(data){
                this.ent.imgUrls = '/static/bt'+data.id+'.png'
                this.jpParam.id = data.id
                this.jpParam.point = data.point
                this.ent.show = true
                this.expSum_single = data.point
                this.expSum_name = data.name
            },
            ent_ov(data){
                this.ent.show = false
                if(data){
                    this.$http.post('/userGoods/getStatus',{goodsId:this.jpParam.id}).then(res=>{
                        if(res.s==1){
                            uni.navigateTo({
                                url: `/pages/address/index?id=${this.jpParam.id}&point=${this.jpParam.point}`
                            })
                        }else{
                            let num = res.m
                            let message = ''
                            if(num=='nonum') message = '数目不足，不能兑换'
                            if(num=='nopoint') message = '积分不足'
                            if(num=='nowintime') message = '连胜次数不足'
                            uni.showToast({
                                title: message,
                                icon: 'none',
                                duration: 2000
                            })

                        }
                        
                    }).catch(e=>{
                        console.log(e)
                    })
                    
                }
            },
            async jp(){
                let res = await this.$http.post('/goods/list')
                if(res.s == 1){
                    this.list = res.d
                }
            }
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