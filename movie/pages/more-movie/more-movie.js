// pages/more-movie/more-movie.js
let api = require('../../utils/api.js')
let resultData =require('../../utils/data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    moreData:[],
    hidden:true,
    page:1

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    //动态切换查看更多的导航栏，例如切换“热门电影”
    wx.setNavigationBarTitle({
      title:options.title
    });
    //设置导航栏颜色
    // wx.setNavigationBarColor({
    //   backgroundColor: '#000000',
    //   frontColor: '#ffffff',
    // })
    //设置导航栏正在加载,2s后加载完成
    wx.showNavigationBarLoading();
    setTimeout(wx.hideNavigationBarLoading,2000)
    this.setData({
      moreData:resultData.moreData
    });
    this.getData();
  },
   //使用接口一般都是需要设置加载中...,加载结束
  getData:function(){
    let page=this.data.page;
    wx.showLoading({
      title: '加载中...',
    });
    this.setData({
      hidden:true
    })
    api.getData('/onebox/movie/pmovie','get',{
      key:"283957hgjfd3874",
      city:'广州'
    }).then(res => {
      console.log(res);
      wx.hideLoading();
     
      setTimeout(() => {
        this.setData({
          hidden:true,
          moreData:resultData.moreData
        })
      },2000)
     
    },e =>{
      console.log(e)
    });

    // 请求接口地址
    // wx.request({
    //   url: '接口地址',
    //   method:'get',
    //   data:{
    //     page: page
    //   },
    //   success:function(res){
    //     this.setData({
    //       moreData:res.data
    //     });
    //   }
    // })
  
  },
  loadMore:function(){
    //数组的拼接
    let movieList=this.data.moreData;
    // 翻页的功能
    let page = this.data.page;
    page++;
    this.getData();

    this.setData({
      moreData:movieList.concat(resultData.moreData)
    });

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