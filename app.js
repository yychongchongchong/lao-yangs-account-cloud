// app.js
App({
  onLaunch() {
   //云开发环境初始化
   wx.cloud.init({
     env:"data-calculate-yang-3cpi26b2f40e"
   })
    }
  ,
  globalData: {
    userInfo: null
  }
})
