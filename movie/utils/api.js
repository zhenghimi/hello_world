var host='http://op.juhe.cn';

function getData(url,method,data={},header={}){
  return new Promise(function(resolve,reject){
    wx.request({
      url:  host + url ,
      data:data,
      method:method,
      header:header,
      success:function(res){
       if(res.statusCode==200){
         resolve(res)
       }else{
         reject('error');
       }
      },
      fail:function(e){
        reject(e);
      }
    })
  })
}

module.exports = {
  getData:getData
}