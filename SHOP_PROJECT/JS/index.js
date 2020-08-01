window.onload=function(){
    getBannerList();  //轮播图列表


    /* ajax("get","../JS/helloworld.json",function(res){
        console.log(res);
        return res;

    },true); */

    //搜索框建议提示
    var searchInput=document.getElementById("searchInput");
    //false代表异步
    searchInput.addEventListener("keyup",debounce(getSuggest,500),false);
    searchInput.addEventListener("blur",hideKeyWord,false);
    searchInput.addEventListener("focus",showKeyWord,false);
    //建议显示
    function showKeyWord(){
        if(searchInput.value!==""){
           /*  getSuggest(); */
            document.getElementById("search-suggest").style.display="block";
        }
    }
    //建议隐藏
    function hideKeyWord(){
        document.getElementById("search-suggest").style.display="none";
    }
    /* 获取suggest.json提示列表 */
    function getSuggest(){
        ajax("get","../JS/suggest.json",function(res){
            if(res.code == 0){
                /* console.log(data); */
                var suggest_list=document.getElementById("search-suggest");//下拉提示列表容器元素
                var data=res.data;
                var str="";
                for(var i=0;i<data.length;i++){
                    str +="<li>" + data[i].suggestname +"</li>"
                }
                suggest_list.innerHTML=str;
                showKeyWord();
               /*  console.log(str); */
            }
        },true)
    }


    //防抖函数 
    function debounce(fn,delay){
        var handle;
        return function(){
            clearTimeout(handle);
            handle=setTimeout(function() {
               fn();
            }, delay)
        }
    }


    /* 轮播图的操作开始 */
    /* bannerOption()是方法调用 */
    function bannerOption(){
        /* 获取轮播图包裹层元素 */
        var swiper=document.getElementById("swiper");
        /* 获取轮播图列表 */
        var swiperItem=swiper.getElementsByClassName("swiper-item");
        /* 获取上一张按钮 */
        var perv=document.getElementsByClassName("prev")[0];
        /* 获取下一张按钮 */
        var next=document.getElementsByClassName("next")[0];
        var indicators=document.getElementsByClassName("indicator");//获取圆点列表
        var index=0;//当前轮播图索引，默认第一张
        var timer = null; //定时器

        //设置轮播图的透明度和位移
        for(var i=0;i<swiperItem.length;i++){
            if(index==i){
                swiperItem[i].style.opacity=1;
            }else{
                swiperItem[i].style.opacity=0;
            }
            //获取轮播图的宽度swiperItem[0].offsetWidth。offsetWidth是元素的width+左右的padding+左右的border
            swiperItem[i].style.transform="translateX(" + (-i * swiperItem[0].offsetWidth) + "px)";
        }

        //给圆点添加点击事件
        for(var k=0; k<indicators.length; k++){
            indicators[k].onclick=function(){
                clearInterval(timer);
                var clickIndex=parseInt(this.getAttribute("data-index"));
                index = clickIndex;
                changeImg();
            }
        }

        /* 为按钮添加点击方法 */
        perv.onclick = function(){
            clearInterval(timer);
            index--;
            changeImg();
        }
        next.onclick=function(){
            clearInterval(timer);
            index++;
            changeImg();
        }



        /* 当鼠标悬停在图片时，停止自动播放，鼠标移出时自动播放 */
        swiper.addEventListener("mouseover",function(){
            clearInterval(timer);
        },false)
        swiper.addEventListener("mouseout",function(){
            autoChange();
        },false)

        /* 将当前索引的轮播图的opacity设置为1，达到更换图片的效果 ，更换图片*/
        function changeImg(){
            /* 循环播放，索引超出第一张时重新设置为0，索引小于0时，设置索引为最后一张的索引 */
            if(index < 0){
                index = swiperItem.length - 1;
            }else if(index > swiperItem.length - 1){
                index = 0;
            }
            for(var j=0; j<swiperItem.length; j++){
                swiperItem[j].style.opacity=0;
            }
            swiperItem[index].style.opacity=1;
            setIndicatorOn();
        }
        /* 设置轮播图圆点激活状态 */
        function setIndicatorOn(){
            for(var i=0;i<indicators.length;i++){
                indicators[i].classList.remove("on");
            }
            indicators[index].classList.add("on");
        }

        /* 轮播图定时器，自动播放 */
        autoChange();
        function autoChange(){
            timer = setInterval(function(){
                index++;
                changeImg();
            },3000);
        }
    }

    //获取轮播图列表
    function getBannerList(){
        ajax("get","../JS/swiper.json",function(res){
            console.log(res);
            if(res.code == 0){
               var data=res.data;
               //轮播图列表循环，动态加入容器
               var swiper=document.getElementsByTagName("swiper");
               var str="";
               for(var i=0; i<data.length; i++){
                   str +='<li class="swiper-item"><a href="#"><img src="'+data[i].banner_img+'" alt=""></a></li>';
               }
               swiper.innerHTML=str;
               //圆点列表循环插入容器
               var indicators=document.getElementById("indicators");
               var str2="";
               for(var i=0; i<data.length; i++){
                   if(i == 0){
                       str2 +='<div class="on indicator" data-index="'+i+'"></div>';
                   }else{
                    str2 +='<div class="on indicator" data-index="'+i+'"></div>';
                   }
            }
            indicators.innerHTML=str2;
               bannerOption();
            }
        },true)

    }






    /* 轮播图的操作结束 */

    /* 秒杀倒计时开始 */
    //运用计时器来实现倒计时功能
    countDown();
    function countDown(t){
        var ms_time= 70;
    var ms_timer=setInterval(function(){
        if(ms_time < 0){
            clearInterval(ms_timer);
        }else{
            calTime(ms_time);
            ms_timer--;
        }
    },1000);


    }
    
    //计算时分秒
    function calTime(time){
        var hour=Math.floor(time / 60 / 60);  //小时
        var minutes=Math.floor(time / 60 % 60);  //分钟
        var seconds=Math.floor(time % 60); //秒
        hour=formatTime(hour);
        minutes=formatTime(minutes);
        seconds=formatTime(seconds);

        document.getElementsByClassName("cd_hour")[0].innerHTML=hour;
        document.getElementsByClassName("cd_minute")[0].innerHTML=minutes;
        document.getElementsByClassName("cd_second")[0].innerHTML=seconds;
    }

    /* 格式化倒计时时间 */
    function formatTime(t){
        if(t < 10){
            t="0" + t;
        }
        return t;
    }

    /* 秒杀结束 */
}
/* 悬浮菜单滚动监听 */
window.onscroll=function(){
    //监听方法
    scrollShowBtn();
    var winPos=document.documentElement.scrollTop || document.body.scrollTop;  //获取滚动的距离
    var hotSale=document.getElementById("hotsale"); //获取热卖专区的元素
    var hotHeight=hotSale.offsetTop + hotSale.offsetHeight; //猜你喜欢之前的总高度
    
    if(winPos < hotSale.offsetTop){
        addOn(0);
    }else if(winPos >= hotSale.offsetTop && winPos < hotHeight){
        addOn(1);
    }else{
        addOn(2);
    }
}
//添加菜单激活状态
function addOn(index){
    var tool=document.getElementsByClassName("tool")[0];
    var toolItem=tool.getElementsByTagName("a");
    for(var i=0;i<toolItem.length;i++){
        toolItem[i].classList.remove("on");
    }
    toolItem[index].classList.add("on");
}

//返回首页出现的时候是鼠标往下移动悬浮菜单才会出现。滚动一定距离显示返回顶部的按钮
function scrollShowBtn(){
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    if(top > 300){
        document.getElementById("goTop").style.display="block";
    }else{
        document.getElementById("goTop").style.display="none";
    }

}

//返回顶部
function goTop(){
    //从慢到快的过渡效果
    var topTimer = setInterval(function() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var iSpeed=Math.floor(-scrollTop/8);
        if(scrollTop == 0){
            clearInterval(topTimer);
        }
        //返回顶部核心
        document.documentElement.scrollTop=document.body.scrollTop = 0;
    }, 80);
   
}