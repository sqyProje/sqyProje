/**
 * Created by Administrator on 2016/9/25.
 */

(function(){
    $(function(){
      var regis1=$(".regis-1");
      var  regis2=$(".regis-2");
        regis1.click(function(){
            window.location.href="../html/logon.html"
        });
        regis2.click(function(){
            window.location.href="../html/register.html"
        });

        var details=$(".details");
        var h3=$("#menu  h3");
        var menuList=$(".menu-list .details");

        h3.mouseenter(function(){
            details.css({top:0});
        })
        menuList.mouseleave(function(){
            details.css({top:-590});
        })
        //吸顶效果和导航的变色
        $(window).scroll(function(){
            var fixedTop=$(".fixed-top");
            var fixed=$("#fixed");
            var fixedA=$(".A-color");
            var fixedCar=$(".car");
            var m=$(document).scrollTop();
            if(m>200){
                fixedTop.addClass("abc");
                fixedA.css({color:"#A1ECF4"});
                fixedCar.css({display:"block"})
                var fixedTopLi=$(".fixed-top li");
            }else{
                fixedTop.removeClass("abc");
                fixedA.css({color:""});
                fixedCar.css({display:"none"})
            }
        })
       var fixedTopLi=$(".fixed-top li");
        fixedTopLi.mouseenter(function(){
            var index=$(this).index();
            fixedTopLi.removeClass("active").eq(index).addClass("active");

        });
     //物品的切换效果
        var  bagImg=$(".bigImg  li");
        var  smallImg=$(".smallImg  li");
        var fangdaIMG=$(".fangda  img");
        smallImg.mouseenter(function(){
           /* console.log(bagImg);*/
            var index=$(this).index();
            bagImg.removeClass("active").eq(index).addClass("active");
            smallImg.removeClass("active").eq(index).addClass("active");
            fangdaIMG.addClass("active").eq(index).removeClass("active");

        });
        var bigImgLi=$(".bigImg li");   //400  400
        var move=$(".move");     //100  100;
        var fangda=$(".fangda");    //200  200
        var fangdaImg=$(".fangda  img"); //  800 800;
        //放大的比例
        var  scale=$(".fangda").width() / $(".move").width()
        bigImgLi.mouseenter(function(){
             move.css({display:"block"});
             fangda.css({display:"block"});
        });
        bigImgLi.mouseleave(function(){
            move.css({display:"none"});
            fangda.css({display:"none"});
        });
        //移动的最大宽度和高度;
              var  maxX= bigImgLi.width()-move.width();
              var maxY=bigImgLi.height()-move.height();
             bigImgLi.mousemove(function(e){
                 //var e=e||window.event;
                 var iX = e.clientX - $(this).offset().left - move.width()/2,
                     iY = e.clientY - $(this).offset().top - move.height()/2;
                 console.log(iX);
                 console.log(iY);
                 if(iX<0){iX=0;}
                 if(iX>maxX){iX=maxX}
                 if(iY<0){iY=0}
                 if(iY>maxY){iY=maxY}
                 move.css({left:iX+'px',top:iY+'px'});
                 fangdaImg.css({marginLeft:-2*iX+'px',marginTop:-2*iY+'px'});
             });


  /*      var SBig=$(".bigImg  li img");
        var  bagBigImg=$(".bigImg  li div");
        var   originSpan=$(".origin span");
        bagImg.click(function(){
            SBig.css({position:"fixed","z-index":"1000000"}).animate({width:"640",height:"480",top:"0",left:"311"}
                ,function(){
                    SBig.click(function(){
                        SBig.stop(true).animate({width:"1000",height:"600"})
                    })
                });
            bagBigImg.addClass("big-big-big");
            originSpan.css({display:"block"});
        });
        originSpan.click(function(){})*/
        //二维码的效果
        var edcode=$(".edcode");
        var  lastimg=$(".last-img");
        lastimg.mouseenter(function(){
            $(".big-edcode").css({display:"block"})
        });
        lastimg.mouseleave(function(){
            $(".big-edcode").css({display:"none"})
        });



        //购物车加减的算法
        var minus=$(".minus");
        var plus=$(".plus");
        var num=$(".num");
        var hiddenCashRebate=$("#hiddenCashRebate");  //小计框
        plus.click(function(){
            num.val(parseInt(num.val())+1);  //详情页重新给文本框进行赋值
            setTotal();
        });
        minus.click(function(){
            if( (parseInt(num.val()))<=0){
                num.val(0);
                setTotal();
            } else{
                num.val(parseInt(num.val())-1);  //重新给文本框进行赋值
                setTotal();
            }
        });
         function setTotal(){
             hiddenCashRebate.val(parseInt(num.val())*149.00.toFixed(2));
         }
        setTotal();


        var popTitle=$(".pop-title");
        var  btnCar=$(".btn_car");
        var mx= getCookie("goods");
        var Src=$(".inn-img").attr("src");
        //console.log(Src);
       var titleSpan=$(".title-span");
           titleSpan.click(function(){
            popTitle.css({display:"none"});
        })
        //console.log(getCookie("goods"));
        //将商品数量进行保存，将在购物车中进行获取
        btnCar.click(function(){
            popTitle.css({display:"block"});
            var mx = $(".num").val();
            console.log(mx);
            var  Price=$("#Price").val();
            var  productTitle=$("#productTitle h1").text();
            var hiddenCashRebate=$("#hiddenCashRebate").val();
            console.log(hiddenCashRebate);
            var
                sGoods = getCookie('goods'),
                bBtn = true;
            if(sGoods === undefined){
                var arr = [];
            }else {
                var arr = JSON.parse(sGoods);
            }

            for(var i =0; i < arr.length; i++) {
                if(arr[i].name == productTitle){
                    var NUM = parseInt(arr[i].num);
                       NUM += parseInt($(".num").val());
                       arr[i].num=NUM;
                    var S=parseInt(arr[i].xiaoji);
                    S+=parseInt($(".num").val()*arr[i].price);
                    arr[i].xiaoji=S;
                       bBtn = false;
                }
            }
            if(bBtn){
              var   oTemp = {
                    'name':productTitle,//物品名称
                    'price':Price,    //单价
                    'num':num.val(),//物品数量
                    'xiaoji':hiddenCashRebate , //小计
                    'Tmg': Src
                };
                arr.push(oTemp);
            }
            setCookie("goods",JSON.stringify(arr),7,"/");
        });

        var mxGoods = JSON.parse(getCookie("goods"));
        var sH1 = $(".dd-fl");
        var sHtml = "";


        console.log(mxGoods)
        for(var i = 0;i<mxGoods.length;i++){
            sHtml += '<dd class="dd-f1">'+'<div class="col-md-5 mx-clear">' + '<div class="g-pic">' + '' + '<img src="../image/small-img-1.jpg" title="" class="img100">' + '' + '</div>' + '<div class="g-info">' + '' + '<p><a href="javascript:;" class="goods-name">'+mxGoods[i].name+'</a></p>' + '</div>' + '</div>' + '<span class="col-md-2 center"></span>' + ' <span class="col-md-1 center">￥<i class="single-price">' +mxGoods[i].price+ '</i></span> ' + '<span class="col-md-2 center">' + '' + '<a href="javascript:;" class="minus num-btn sec-min">-</a>' + '<input type="text" class="num  now-num" value='+mxGoods[i].num +'>'+ '<a href="javascript:;" class="add num-btn plus sec-add">+</a>' + '</span>' +
                '<span class="col-md-1 center">￥<i class="buy-red">'+mxGoods[i].xiaoji +'</i></span> '+  '<span class="col-md-1 center delete">删除</span>'+'</dd>';
            sH1.html(sHtml);
            setCookie("money",mxGoods[i].xiaoji,7,"/")
            setCookie("Num",mxGoods[i].num,7,"/")
             }

        var ADelete=$(".delete");
        //删除cookie的值之后需要还需要清楚后台的cookie才能进行添加
        ADelete.click(function(){

            //removeCookie('goods',"/");
            sH1.remove();

        });

        //var Num=$(".now-num");
        var  SpanDel=$(".buy-red");
        var  jian=$(".sec-min");
        var  add =$(".add");
        var  Num =$(".now-num");

        jian.click(function(){
            if( (parseInt(Num.val()))<=0){
                Num.val(0);
                setTota2();
            } else{
                //重新给文本框进行赋值
                Num.val(parseInt(Num.val())-1);
                setTota2();
            }
        });
        add.click(function(){
            //console.log(num);
            //详情页重新给文本框进行赋值
            Num.val(parseInt(Num.val())+1);
            setTota2();
        });
        function setTota2(){

            SpanDel.text(parseInt(Num.val())*149.00.toFixed(2));
        }
        setTota2();

        $(".btn-money").click(function(){
            setCookie("money",mxGoods[i].xiaoji,7,"/")
            setCookie("Num",mxGoods[i].num,7,"/")
        })



    })
})(jQuery);