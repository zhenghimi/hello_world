// pages/search/search.js
let resultData =require('../../utils/data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchData:[],
    scrollHeight:0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 图片动态滑动效果
    var that=this;
    const query=wx.createSelectorQuery(); //创建对象
    query.select('.search_box').boundingClientRect(function(rect){
        var winHeight=wx.getSystemInfoSync().windowHeight;
      that.setData({
          scrollHeight:winHeight - rect.height
        })
    }).exec();
    this.setData({
      searchData:resultData.moreData
    })

  },
  // 自定义方法
  searchMovie:function(e){
    console.log(e.detail.value);
    this.setData({
      searchData:resultData.moreData
    })
    //或者实用接口地址请求
    // wx.request({
    //   url: '',
    //   method:'get',
    //   data:{
    //     searchText:e.detail.value
    //   },
    //   success:function(res){
    //     this.setData({
    //       searchData:res.data
    //        })
    //   }
    // })
  },
  cancelSearch:function(){
    wx.navigateBack({
        url:'/pages/index/index'
    })

  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})