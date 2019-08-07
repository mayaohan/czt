import store from './store'

const host = "https://5icoding.top/xcx"

function get(url, data) {
  return request( host + url, 'GET', data)
}

function post(url, data) {
  return request( host + url, 'POST', data,{
    'content-type': 'application/x-www-form-urlencoded',
    'Cookie':'SESSION='+store.state.memberInfo.sessionid
  })
}


function put(url, data) {
  return request( host + url, 'PUT', data,{
    'content-type': 'application/x-www-form-urlencoded',
    'Cookie':'SESSION='+store.state.memberInfo.sessionid
  })
}

function del(url, data) {
  return request( host + url, 'DELETE', data)
}

const http ={
  get: get,
  post: post,
  put: put,
  del: del,
  request: request,
}

function request(url, method, data, header = {"Cookie":"SESSION="+store.state.memberInfo.sessionid}) {
  wx.showLoading({
    title: '加载中',
    mask: true
  })
  return new Promise((resolve, reject) => {
    wx.request({
      data,
      method,
      header,
      url:url,
      success: function (res) {
        if(res.statusCode==401){
          wx.navigateTo({
            url: '/pages/login/main?backurl=noseesion'
          })
        }
        if (res.data.s === 1) {
          wx.hideLoading()
          resolve(res.data)
        } else {
          wx.hideLoading()
          resolve(res.data)
        }
      }
    })
  })
}

export default http
