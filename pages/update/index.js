const DB = wx.cloud.database().collection('goods')
let _id=""
let goods_price_new = 0
Page({
  TimeId:-1,
  data:{
    goods:[]
  },
  onShow(){
    const goods = wx.getStorageSync("goods");
    this.setData({goods})
  },
  //修改商品
  handleInput(e){
    _id = e.target.dataset.id;
    goods_price_new = e.detail.value;
    clearTimeout(this.TimeId);
    this.TimeId = setTimeout(()=>{
      this.changeGoodsPrice();
    },800)
  },
  changeGoodsPrice(){
    let {goods} = this.data;
    goods.forEach((v,i)=>{
      if(v._id===_id){
        DB.doc(_id).update({
          data:{
            goods_price : goods_price_new
          },
          success: function(res) {
            wx.showToast({
              title: '修改成功',
              icon: 'success',
              mask: true,
            });
              
          },fail(err){
            console.log(err);
          }
        })
        v.goods_price = goods_price_new
      }
    })
    wx.setStorageSync("goods", goods);
  }
})
