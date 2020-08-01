//index.js
//获取应用实例
const app = getApp()
let api = require('../../utils/api.js')
let resultData =require('../../utils/data.js')

Page({
  data: {
    // 轮播图
    bannerData:[],
    subJectData:[],
   
  },
  // 设置监听转发信息(包括标题，图片)
  onShareAppMessage:function(res){
    if(res.from =='button'){
      console.log(res.target);
    }
    return {
      title:'惠宏电影',
      path:'/pages/index/index?id=1',
      imageUrl:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2614081670.jpg'
    }
  },
  onLoad: function () {
    this.setData({
      bannerData:resultData.bannerData,
      subJectData:resultData.subJectData
    }),
    // 设置转发分享
    wx.showShareMenu({
      withShareTicket: true,
    }),
    // 设置tabBar右上角文本
    wx.setTabBarBadge({
      index: 0,
      text: '99',
    })
    // 延迟两秒移除右上角文本
    // setTimeout(function(){
    //   wx.removeTabBarBadge({
    //     index: 0,
    //   })
    //   },2000)
    wx.setTabBarItem({
      index: 0,
      text:'首页'
    })
    wx.setTabBarStyle({
      color: '#000',
      selectedColor:'#42db56',
      // backgroundColor:'#ddd',
      borderStyle:'white'

    })
   

    //this.getBannerData();
    
  },
  // 自定义方法
  
  
  
  

  //request请求
  getBannerData:function(){
    api.getData('/onebox/movie/pmovie','get',{
      key:"283957hgjfd3874",
      city:'广州'
    }).then(res => {
      console.log(res);
    },e =>{
      console.log(e)
    });
    
  },

  // 图片自适应宽高
  imgLoad:function(e){
    // console.log(e.detail)
    var winWidth=wx.getSystemInfoSync().windowWidth;//获取屏幕宽度
    var imgWidth=e.detail.width;//图片宽度
    var imgHeight=e.detail.height;//图片高度
    this.setData({
      swiperHeight:winWidth*imgHeight/imgWidth + 'px'

    })
  },
  
})
