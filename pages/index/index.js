const DB = wx.cloud.database().collection('goods')
import{getGoodsData}from "../../utils/asyncWX.js";
Page({
  data:{
    goods:[],
    
  },
  async onShow(){
    const goods = (await getGoodsData()).result.data
    this.setData({goods,goods_all_price:0})
    wx.setStorageSync("goods", goods);
  },
  
  //数量加减
  handleItemNumEdit(e){
    const goods = this.data.goods;
    const index = goods.findIndex(v=>v.goods_name===e.currentTarget.dataset.goods_name);
    if(goods[index].goods_num===0&&e.currentTarget.dataset.operation===-1){
      wx.showToast({
        title: '不能再减少了',
        icon: 'none',
        mask: true,
      });
    }else{
      goods[index].goods_num += e.currentTarget.dataset.operation;
      var goods_all_price = 0;
      goods.forEach(function(item, index){
        goods_all_price += item.goods_num*item.goods_price;
      });
      this.setData({goods,goods_all_price})
    }
  }
})
