<template>
    <div class="content">
        <div class="cont">
            <input v-model="param.name" class="yc placeholder" type="text" placeholder="在此输入您的称呼" placeholder-class="placeholder" />
            <div v-if="validate.name" class="error">请填写您的称呼</div>
        </div>
        <div class="cont">
            <input v-model="param.phone" class="yc placeholder" type="text" placeholder="在此输入您的手机号" placeholder-class="placeholder" />
            <div v-if="validate.phone" class="error">请正确填写您的手机号</div>
        </div>
        <div class="cont area">
            <textarea v-model="param.address" class="yc" type="text" placeholder="在此输入您的代币钱包收货地址，可多行输入" placeholder-class="placeholder"></textarea>
            <div v-if="validate.address" class="error">请填写您的收货地址</div>
        </div>

        <div class="sheng">
            <div class="btns text-center" @click="submit">确认无误，提交信息</div>
        </div>

        <div class="zhanwei"></div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                param:{
                    name:'',
                    phone:'',
                    address:'',
                },
                goodsId:'',
                validate:{
                    name:false,
                    phone:false,
                    address:false,
                },
                point:''
            }
        },
        methods:{
            async submit(){
                if(!this.validator()){
                    return
                }
                let subParam = this.param
                subParam.goodsId = this.goodsId
                let res = await this.$http.post('/userGoods/insert',subParam)
                if(res.s == 1){
                    this.$store.commit('KOU_expSum',this.point)
                    uni.navigateBack({
                        delta: 1
                    })
                }
            },
            validator(){
                let flag = true
                let vt = this.param
                let pho = /^[1][3,4,5,7,8][0-9]{9}$/;
                for(let o in vt){
                    if(vt[o].length==0){
                        this.validate[o] = true
                        flag = false
                    }else{
                        if(o=='phone'){
                            if(pho.test(vt[o])){
                                this.validate[o] = false
                            }else{
                                this.validate[o] = true
                                flag = false
                            }
                        }else{
                            this.validate[o] = false
                        }
                    }
                }
                return flag
            }
        },
        onLoad(query){
            this.goodsId = query.id
            this.point = query.point
        }
    }
</script>

<style>
    .placeholder{
        font-size:24upx;
        font-family:Roboto-Regular;
        font-weight:400;
        color:rgba(106,106,106,0.7);
        line-height:70upx;
    }
</style>

<style lang="scss" scoped>
    @import "@/styles/index.scss";
    .zhanwei{
        width:750upx;
        height:180upx;
        background:rgba(107,24,24,1);
    }
    .sheng{
        width:100%;
        flex-direction: row;
        display:flex!important;
        align-items:center;
        justify-content:space-around;
        flex-wrap:wrap;
        margin-bottom:600upx;
        .btns{
            width:360upx;
            line-height:70upx;
            background:rgba(252,202,47,1);
            border-radius:4upx;
            margin:0 auto;
            font-size:28upx;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(34,30,41,1);
        }
        
    }
    .cont{
        width:694upx;
        margin:56upx auto;
        background:#fff;
        min-height:70upx;
        padding:1upx 26upx;
        position:relative;
        .yc{
            width:100%;
            height:70upx;
        }
        .error{
            position:absolute;
            top:70upx;
            left:20upx;
            color:#f1b035;
            font-size:26upx;
        }
    }
    .cont.area{
        height:278upx;
        padding:18upx 20upx;
        .yc{
            width:100%;
            height:228upx;
            font-size:24upx;
            font-family:Roboto-Regular;
            font-weight:400;
            color:rgba(106,106,106,0.7);
        }
        .error{
            top:278upx;
        }
    }
</style>