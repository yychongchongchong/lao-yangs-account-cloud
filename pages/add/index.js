let add_goods_name = ""
let add_goods_price = ""
const DB = wx.cloud.database().collection('goods')
Page({
  //获取商品名称
  handleInputName(e){
    add_goods_name = e.detail.value;
  },
  //获取商品价格
  handleInputPrice(e){
    add_goods_price = e.detail.value;
  },
  //将商品添加至数据库
  handleAddGoods(e){
    DB.add({
      data:{
        goods_name : add_goods_name,
        goods_num : 0,
        goods_price : add_goods_price
      },
      success(res){
        const _id = res._id;
        const AddGoodsObj ={
          _id : _id,
          goods_name : add_goods_name,
          goods_num : 0,
          goods_price : add_goods_price
        };
        const goods = wx.getStorageSync("goods");
        goods.push(AddGoodsObj);
        wx.setStorageSync("goods", goods);
        wx.showToast({
          title: '添加成功',
          icon: 'success',
          mask: true,
        });
           
      },fail(err){
        console.log(err);
      }
    })
  }
})