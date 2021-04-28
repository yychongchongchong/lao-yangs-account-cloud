export const getGoodsData=()=>{
   return new Promise((resolve,reject)=>{
    wx.cloud.callFunction({
        name:"getList",
        success(res){
          resolve(res)
        },fail(err){
          reject(err)
        }
      })
    }) 
}