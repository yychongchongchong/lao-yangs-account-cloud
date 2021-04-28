const DB = wx.cloud.database().collection('goods')
Page({
  data:{
    goods:[]
  },
  TimeId:-1,
  onShow(){
    const goods = wx.getStorageSync("goods");
    this.setData({goods})
  },
  //删除商品
  handleGoodsDelete(e){
    const id = e.currentTarget.dataset.id;
    const index = e.currentTarget.dataset.index;
    let goods = this.data.goods;
    DB.doc(id).remove({
      success:function(res){
        wx.showToast({
          title: '删除成功',
          icon: 'success',
          mask: true,
        });
      }
    })
    clearTimeout(this.TimeId);
    this.TimeId = setTimeout(()=>{
      goods.splice(index,1);
      wx.setStorageSync("goods", goods);
      this.setData({goods})
    },600)
  }
})
