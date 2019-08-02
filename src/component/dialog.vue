<template>
    <div class="dialogs" v-if="show" key="box1">
        <div class="bg">
            <div class="top">
                <img :src="imgUrl" alt="">
            </div>
            <div class="content">
                <slot></slot>
            </div>
            <div class="btnItem">
                <div class="btns yellow" style="font-size:34rpx;" @click="sure(true)">确定</div>
                <div class="btns default" @click="sure(false)">取消</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'EDialog',
        props:{
            imgUrl:{
                type:String,
                default:'http://xcx.jyan.vip/2/index/ren.png'
            },
            show:{
                type:Boolean,
                default:false
            }
        },
        methods:{
            sure(data){
                this.$emit('handle',data)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .dialogs{
        width:750rpx;
        height:100vh;
        position:fixed;
        background:rgba(0,0,0,0.5);
        top:0;
        left:0;
        .bg{
            width:556rpx;
            height:360rpx;
            background:rgba(255,255,255,1);
            border-radius:4rpx;
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            .top{
                position:absolute;
                width:138rpx;
                height:138rpx;
                top:-69rpx;
                left:50%;
                margin-left:-69rpx;
                border-radius: 50%;
                overflow:hidden;
                img{
                    width:100%;
                    height:100%;
                }
            }
            .content{
                width:100%;
                margin-top:80rpx;
                padding:0 18rpx;
                flex-direction: row;
                display:flex!important;
                align-items:center;
                justify-content:center;
                font-size:48rpx;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(34,30,41,1);
                line-height:66rpx;
            }
            .btnItem{
                width:360rpx;
                margin:24rpx 98rpx;
                .btns{
                    width:100%;
                    border-radius:4rpx;
                    line-height:70rpx;
                    text-align:center;
                    margin:10rpx 0;
                    font-size:24rpx;
                }
                .yellow{
                    background:rgba(252,202,47,1);
                    color:#221E29;
                }
                .default{
                    background:#fff;
                    color:#FCCA2F;
                }
            }
        }
    }
</style>