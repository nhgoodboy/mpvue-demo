// import wx from 'wx'
var Fly = require('flyio/dist/npm/wx')
// var fly=new Fly

const request = new Fly()

request.config.timeout = 10 * 1000
request.config.baseURL = 'http://127.0.0.1:8084'

request.interceptors.request.use((request) => {
  // wx.showLoading({ title: '拼命加载中...' })
  return request
})

request.interceptors.response.use(
  (response, promise) => {
    // wx.hideLoading()
    return promise.resolve(response.data)
  },
  (err, promise) => {
    // wx.hideLoading()
    // wx.showToast({
    //   title: err.message,
    //   icon: 'none'
    // })
    return promise.resolve()
  }
)

export default request
