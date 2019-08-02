<template>
    <div class="content">
        <div style="width:100%;height:26rpx;"></div>

        <div class="item" v-for="(obj,idx) in list" :key="obj.id">
            <p class="t34">{{obj.title}}</p>
            <p class="t24 bottom">{{obj.content}} <span style="padding-left:28rpx;"> 积分+{{obj.expSum}}</span></p>
            <div :class="[obj.btn?'active':'','right']" @click="qds(idx,obj)">签到</div>
        </div>
        <div class="zhanwei"></div>
        <div class="fanhui" @click="back">返回</div>
    </div>
</template>

<script>
    export default {
        name:'child',
        data(){
            return {
                list:[
                    {
                        btn:false,
                        title:'任务1',
                        content:'任务内容1',
                        expSum:5,
                        id:'01'
                    },
                    {
                        btn:false,
                        title:'任务2',
                        content:'任务内容2',
                        expSum:5,
                        id:'02'
                    },
                    {
                        btn:false,
                        title:'任务3',
                        content:'任务内容3',
                        expSum:5,
                        id:'03'
                    },
                    {
                        btn:false,
                        title:'任务4',
                        content:'任务内容4',
                        expSum:5,
                        id:'04'
                    },
                    {
                        btn:false,
                        title:'任务5',
                        content:'任务内容5',
                        expSum:5,
                        id:'05'
                    },
                    {
                        btn:false,
                        title:'任务6',
                        content:'任务内容6',
                        expSum:5,
                        id:'06'
                    },
                    {
                        btn:false,
                        title:'任务7',
                        content:'任务内容7',
                        expSum:5,
                        id:'07'
                    },
                    {
                        btn:false,
                        title:'任务8',
                        content:'任务内容8',
                        expSum:5,
                        id:'08'
                    },
                ]
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
                let res = await this.$http.post('/userShare/insert',{rwId:item.id})
                if(res.s == 1){
                    this.list[index].btn = true
                    let start = new Date(
                        new Date(new Date().toLocaleDateString()).getTime()
                    )
                    let clearTime = start.getTime()+1000 * 60 * 60 * 24
                    uni.setStorageSync("clearTime", clearTime);
                    uni.setStorage({
                        key: 'task',
                        data: this.list
                    })
                }else{
                    console.log(res)
                }
            }
        },
        created(){
            const value = uni.getStorageSync('task')
            const clears = uni.getStorageSync("clearTime")
            if(clears-value<=0){
                uni.clearStorageSync('clearTime')
            }
            const time = new Date(new Date().getTime());

            if(value){
                Object.assign(this.list,value)
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
</style>