// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:"data-calculate-yang-3cpi26b2f40e"
}
)

// 云函数入口函数
exports.main = async (event, context) => {
  return cloud.database().collection("goods").get({
    success(res){
      return res
    },fail(err){
      return err
    }
  })
}