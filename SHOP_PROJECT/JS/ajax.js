function createXmlHttpRequest(){
    var xmlHttp;
    /* 判断浏览器是否支持XMLHttpRequest */
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
    }else{
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlHttp;
}
/* readyState五种状态：
    0，请求未初始化，还没创建xmlhttprequest对象
    1，建立服务器的连接，调用open
    2，发送请求，send()
    3，请求正在处理
    4，请求已完成且相应结束 */
function ajax(method,url,success,b){  //b代表请求时异步&同步
    var xmlHttp = createXmlHttpRequest();
    xmlHttp.open(method,url,b);  //与服务器建立连接
    xmlHttp.send();  //发送请求
    xmlHttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            success(JSON.parse(this.responseText));
        }
    }
}