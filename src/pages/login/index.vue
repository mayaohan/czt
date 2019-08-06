<template>
  <div class="loginpanel">
    <div class="logo"></div>
    <p class="t36 text-center">欢迎来到猜涨跌</p>
    <p class="t34 text-center">点击授权开启更多功能</p>
    <button type="primary" open-type="getUserInfo" @getuserinfo="getUserInfo">微信一键登录</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        backurl:null,
        code: null,
      }
    },
    onLoad(option) {
      this.backurl = option.backurl
      this.inviter = option.inviter
    },
    computed:{
      outid(){
        return
      }
    },
    methods: {
      opensys(){
        wx.scanCode({
          success: (res) => {
            if (res.result) {
            }
          }
        })
      },
      async getUserInfo(e){
        if (e.mp.detail.errMsg == 'getuserinfo:fail user deny') {
        } else {
          // inviter
          let formdata = {
            code: this.code,
            encryptData: e.mp.detail.encryptedData,
            iv: e.mp.detail.iv,
          }
          if(this.outid!=null){
            formdata.inviter = outid
          }
          // this.$store.commit('SET_PERSONAL',formdata)
          console.log(formdata)
          let data = await this.$http.post('/memberinfo',formdata)
          console.log(data)
          if(data.s==1){
            this.$store.commit('SET_memberInfo',data.d)
            wx.reLaunch({
              url: '/pages/index/index'
            })
          }
        }
      }
    },
    mounted () {
      const self = this
      wx.login({
        success: function (res) {
          if (res.code) {
            //发起网络请求    
            // console.log('code:' + res.code)
            self.code = res.code
          } else {
            // console.log('获取用户登录态失败！' + res.errMsg)
          }
        }
      });
    },
    created () {
    }
  }
</script>

<style scoped lang='scss'>
  @import "@/styles/index.scss";
  .logo{
    width:150upx;
    height:150upx;
    margin: 30upx auto;
    margin-top:200upx;
    background:#fff;
  }
  .loginpanel {
    display: flex;
    flex-direction:column;
    align-items:center;
    height: 100%;
    min-height:100vh;
    p{
      color:#FCCA2F;
      margin:30upx 0;
    }
    img {
      width: 428upx;
      height: 205upx;
      margin-top: 124upx;
    }
    button {
      margin-top: 114upx;
      width: 678upx;
      line-height: 132upx;
      background:rgba(252,202,47,1);
      border-radius:4upx;
      font-size:36upx;
      font-family:Noto Sans S Chinese;
      font-weight:400;
      color:rgba(34,30,41,1);
    }
    button:after {
      border: none;
    }
    .info{
      margin-top: 30upx;
      font-size:28upx;
      font-family:Noto Sans S Chinese;
      font-weight:500;
      color: rgba(15,15,15,1);
      opacity:0.3;
      span {
        text-decoration:underline;
      }
    }
  }
</style>
