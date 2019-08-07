import Vue from 'vue'
import App from './App'
import store from './store'
import http from './http'

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$http = http

Date.prototype.Format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, // 月份
    "d+": this.getDate(), // 日
    "h+": this.getHours(), // 小时
    "m+": this.getMinutes(), // 分
    "s+": this.getSeconds(), // 秒
    "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
    "S": this.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt)){
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + ""));
  }
  for (var k in o){
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  }
  return fmt;
}

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
