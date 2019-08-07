<template>
    <div class="content">
        <div style="width:100%;height:26rpx;"></div>

        <div class="item" v-for="(obj,idx) in list" :key="obj.id">
            <p class="t34">{{obj.title}}</p>
            <p class="t24 bottom">{{obj.content}} <span style="padding-left:28rpx;"> 积分+{{obj.expSum}}</span></p>
            <div v-if="obj.btn&&idx==0" class="active right fx">{{obj.title}}</div>
            <div v-if="(!obj.btn)&&idx==0" class="right fx" @click="qds(idx,obj)">{{obj.int}}</div>
            <button v-if="idx!=0&&obj.int" style="border:0"  class="right fx" open-type='share'>{{obj.int}}</button>
        </div>
        <!-- <div class="zhanwei"></div> -->
        <div class="fanhui" @click="back">返回</div>
    </div>
</template>

<script>
    export default {
        name:'child',
        computed:{
            userInfo(){
				return this.$store.state.memberInfo
			},
        },
        data(){
            return {
                list:[
                    {
                        btn:false,
                        title:'每日签到',
                        int:'签到',
                        content:'每日签到',
                        expSum:5,
                        id:'01'
                    },
                    {
                        btn:false,
                        title:'分享有喜',
                        int:'领取',
                        content:'当日首次分享',
                        expSum:5,
                        id:'02'
                    },
                    {
                        btn:false,
                        title:'好友应战',
                        int:false,
                        content:'分享用户注册成功每个',
                        expSum:10,
                        id:'03'
                    },
                    {
                        btn:false,
                        title:'一呼百应',
                        int:false,
                        content:'累计每5个用户注册成功',
                        expSum:20,
                        id:'04'
                    },
                    
                ],
                emid:''
            }
        },
        methods:{
            back(){
                uni.navigateBack({
                    delta:1
                })
            },
            async qds(index,item){
                if(this.list[index].btn==true) return
                this.emid = item.id
                let res = null;
                if(index==0) res = await this.$http.post('/userShare/insert',{rwId:item.id})
                if(res.s == 1){
                    if(index==0) this.list[index].btn = true
                    let start = new Date(
                        new Date(new Date().toLocaleDateString()).getTime()
                    )
                    let clearTime = start.getTime()+1000 * 60 * 60 * 24
                    uni.setStorageSync("clearTime", clearTime);
                    uni.setStorage({
                        key: 'task',
                        data: this.list
                    })
                    this.$forceUpdate()
                }else{
                    console.log(res)
                }
            }
        },
        onShareAppMessage(options) {
            return {
                title: `分享给好友`,
                path:`/pages/index/index?id=${this.userInfo.id}`,

            }
        },
        created(){
            const value = uni.getStorageSync('task')
            const clears = uni.getStorageSync("clearTime")
            const time = new Date(new Date().getTime());
            if(clears-time<=0){
                uni.removeStorageSync('clearTime')
                uni.removeStorageSync('task')
            }else{
                if(value){
                    Object.assign(this.list,value)
                }
            }

            
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/styles/index.scss";
    .zhanwei{
        width:750rpx;
        height:180rpx;
        background:rgba(107,24,24,1);
        margin-top:170rpx;
    }
    .item{
        width:694rpx;
        margin:10rpx auto;
        background:#fff;
        border-radius:8rpx;
        position:relative;
        padding:24rpx;
        .active{
            opacity: 0.3;
        }
        .bottom{
            margin-top:15rpx;
            color:rgba(55,57,75,1);
        }
        .right{
            position:absolute;
            right:16rpx;
            top:50%;
            margin-top:-25rpx;
            width:142rpx;
            height:50rpx;
            background:rgba(252,202,47,1);
            border-radius:26rpx;
            font-size:28rpx;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:50rpx;
            text-align:center;
        }
        
    }
    .fanhui{
        margin:74rpx auto;
        width:100%;
        height:34rpx;
        font-size:34rpx;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(252,202,47,1);
        text-align:center;

    }
    .fx {
        border:0;
        background:rgba(226,197,227,1);
        color: rgba(255,255,255,1);
        border-radius:6rpx;
    }
</style>