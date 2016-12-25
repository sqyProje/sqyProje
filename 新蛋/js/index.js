/**
 * Created by Administrator on 2016/9/20.
 */
(function($){
    $(function(){
        //console.log(1);
        var aFlashImgLi = $('#flash-img-list li');
        var aFlashBtnA  = $('#flash-btn-list a');
        var bannerTop=$(".bannerTop");
        var oTimer=null;
        var iIndex=0;
        var  btnLeft=$(".btn-left");
        var btnRight=$(".btn-right");
        var beam=$("#beam");
        var beamUL=$("#beam ul");
        var beamFirstLi=beamUL.first();
        var btn=true;
        var same=$(".same");

     //抢购倒计时
        var date = new Date();
        var tTimer=null;
        var date1 = new Date("2017/01/01");
        var timeCount = date1-date;
        var hours = parseInt(timeCount/60/60/1000%24);
        var minutes = parseInt(timeCount/60/1000%60);
        var seconds = parseInt(timeCount/1000%60);
        var oHours = $('.hours');
        var oMinutes = $('.minutes');
        var oSeconds = $('.seconds');
        hours >= 10 ? hours=hours:hours = "0" + hours;
        minutes >= 10 ? minutes=minutes:minutes = "0" + minutes;
        seconds >= 10 ? seconds=seconds:seconds = "0" + seconds;
        tTimer = setInterval(function (){seconds--;
            if(seconds === 0){seconds = 60;minutes--;}
            if(minutes === 0){minutes = 60;hours--;}

           oHours.text(hours);oMinutes.text(minutes);oSeconds.text(seconds);
        },1000);
        //轮播的代码
        var tab=$(".tab2 ");
        var tabA=$(".tab2 a");
        var tabImg=$(".tabc");
        tabA.mouseenter(function(){
            console.log(tabImg);
            var index=tabA.index($(this));
            tabA.removeClass("now").eq(index).addClass("now");
            tabImg.removeClass("oolazyIMG").eq(index).addClass("oolazyIMG");
        });
        var tab3=$(".tab3 ");
        var tabA3=$(".tab3 a");
        var tabImg3=$(".tabc3");
        tabA3.mouseenter(function(){
            //console.log(tabImg3);
            var index=tabA3.index($(this));
            tabA3.removeClass("now").eq(index).addClass("now");
            tabImg3.removeClass("oolazyIMG").eq(index).addClass("oolazyIMG");
        });

        var tab4=$(".tab4 ");
        var tabA4=$(".tab4 a");
        var tabImg4=$(".tabc4");
        tabA4.mouseenter(function(){
            console.log(tabImg4);

            var index=tabA4.index($(this));
            console.log(index);
            tabA4.removeClass("now").eq(index).addClass("now");
            tabImg4.removeClass("oolazyIMG").eq(index).addClass("oolazyIMG");
        });
        var tab5=$(".tab5 ");
        var tabA5=$(".tab5 a");
        var tabImg5=$(".tabc5");
        tabA5.mouseenter(function(){
            console.log(tabImg5);

            var index=tabA5.index($(this));
            tabA5.removeClass("now").eq(index).addClass("now");
            tabImg5.removeClass("oolazyIMG").eq(index).addClass("oolazyIMG");
        });
        //选项卡的切换
        var tabTab=$(".tab-tab");
        var  TabLi=$(".TabLi");
        TabLi.mouseenter(function(){
            var index=$(this).index();
            tabTab.removeClass("tabBlo").eq(index).addClass("tabBlo");
            TabLi.removeClass("tab-active").eq(index).addClass("tab-active");
        });

    //手机的无缝滚动   图片（6）比按钮（4）多两个  0-5（图）   1-4（按钮）
        var U2Img=$(".U2li  img");
        var U2A=$(".U2a a");
        var U2=$(".U2li");
        var Ui=1;
        var UTimer=null;
        var Ubtn=true;
        U2A.each(function(v,k){     // 第一个参数索引  ，二为值(k为a按钮的个数)
            $(k).mouseenter(function(){
                Ui=v+1;
                U2A.removeClass("current").eq(v).addClass("current");
                U2.stop(true).animate({left:480*(-Ui)});
                console.log(Ui);
            });
        });
        function ding(){
            UTimer=setInterval(function(){base();},1000);
        }
        ding();
        function base(){
            Ubtn=false;
            Ui++;
            U2.stop(true).animate({left:480*(-Ui)},function(){
                Ubtn=true;
                if(Ui===1){U2.css({left:(-Ui)*480+"px"});}
            });
            if(Ui==U2Img.length-1){
                Ui=1;
            }
            U2A.removeClass("current").eq(Ui-1).addClass("current");
        }
        U2.mouseenter(function(){clearInterval(UTimer)});
        U2.mouseleave(function(){ding();});

     //电脑平板的无缝滚动
        var U3Img=$(".U3li  img");
        var U3A=$(".U3a a");
        var U3=$(".U3li");
        var Ui3=1;
        var U3Timer=null;
        var U3btn=true;
        U3A.each(function(v,k){
            $(k).mouseenter(function(){
                Ui3=v+1;
                U3A.removeClass("current").eq(v).addClass("current");
                U3.stop(true).animate({left:480*(-Ui3)});
                console.log(Ui3);
            });
        });
        function ding3(){U3Timer=setInterval(function(){base3();},1000);}
        ding3();
        function base3(){
            U3btn=false;
            Ui3++;
            U3.stop(true).animate({left:480*(-Ui3)},function(){
                U3btn=true;
                if(Ui3===1){U3.css({left:(-Ui3)*480+"px"});}
            });
            if(Ui3==U3Img.length-1){Ui3=1;}U3A.removeClass("current").eq(Ui3-1).addClass("current");}

        U3.mouseenter(function(){clearInterval(U3Timer)});
        U3.mouseleave(function(){ding3();});
        //家用电器的无缝滚动
        var U4Img=$(".U4li  img");
        var U4A=$(".U4a a");
        var U4=$(".U4li");
        var Ui4=1;
        var U4Timer=null;
        var U4btn=true;
        U4A.each(function(v,k){
            $(k).mouseenter(function(){
                Ui4=v+1;
                U4A.removeClass("current").eq(v).addClass("current");
                U4.stop(true).animate({left:480*(-Ui4)});
                //console.log(Ui4);
            });
        });
        function ding4(){U4Timer=setInterval(function(){base4();},1000);}
        ding4();
        function base4(){
            U4btn=false;
            Ui4++;
            U4.stop(true).animate({left:480*(-Ui4)},function(){
                U4btn=true;
                if(Ui4===1){U4.css({left:(-Ui4)*480+"px"});}
            });
            if(Ui4==U4Img.length-1){
                Ui4=1;
            }
            U4A.removeClass("current").eq(Ui4-1).addClass("current");
        }
        U4.mouseenter(function(){clearInterval(U4Timer)});
        U4.mouseleave(function(){ding4();});
        //家用电器的无缝滚动
        var U5Img=$(".U5li  img");
        var U5A=$(".U5a a");
        var U5=$(".U5li");
        var Ui5=1;
        var U5Timer=null;
        var U5btn=true;
        U5A.each(function(v,k){
            $(k).mouseenter(function(){
                Ui5=v+1;
                U5A.removeClass("current").eq(v).addClass("current");
                U5.stop(true).animate({left:480*(-Ui5)});//console.log(Ui5);
            });
        });
        function ding5(){U5Timer=setInterval(function(){base5();},1000);}
        ding5();
        function base5(){
            U5btn=false;
            Ui5++;
            U5.stop(true).animate({left:480*(-Ui5)},function(){
                U5btn=true;
                if(Ui5===1){U5.css({left:(-Ui5)*480+"px"});}
            });
            if(Ui5==U5Img.length-1){Ui5=1;}U5A.removeClass("current").eq(Ui5-1).addClass("current");
        }

        U5.mouseenter(function(){clearInterval(U5Timer)});
        U5.mouseleave(function(){ding5();});


        //手风琴代码
        var commands=$(".commands");
        var commandNum=$(".commands").size();
        //console.log(commandNum);
        commands.mouseenter(function(){
            var Index=$(this).index();
            same.addClass("active").eq(Index).removeClass("active");
            for(var  j=0;j<commandNum;j++){
                if(j<=Index){
                    //console.log(j);
                    commands.eq(j).animate({left:j*175});
                    same.eq(j).css({display:""})
                }else{
                    commands.eq(j).stop(true).animate({left:j* 175+500});
                    same.eq(j).css({display:"none"});
                    same.eq(j).addClass("active");
                }
            }
        });
        //banner图下面的无缝滚动
        btnLeft.click(function(){
            beamUL.animate({left:0});
            btnLeft.css({color:"#efefef"})
            btnRight.css({color:"#999"});
        });
        btnRight.click(function(){
            beamUL.animate({left:-200});
            btnLeft.css({color:"#999"});
            btnRight.css({color:"#EFEFEF"});
        });
        var timer=setInterval(function(){
            beamUL.animate({left:-200},1000,function(){
            beamUL.animate({left:0},1000)
            });
            //console.log(3);
        },5000);

    /*   beam.mouseleave(function(){
             timer=setInterval(function(){
                beamUL.animate({left:-200},1000,function(){
                    beamUL.animate({left:0},1000)
                });
                console.log(3);
            },5000);
        });*/
        beam.hover(function(){
            clearInterval(timer);
        });
        //通过克隆标签的无缝滚动
        //无缝滚动
        var i = 0;
        var clone = $(".bannerRight .img li").first().clone();//克隆第一张图片
        $(".bannerRight .img").append(clone);//复制到列表最后
        var size = $(".bannerRight .img li").size();
        for (var j = 0; j < size-1; j++) {
            $(".bannerRight .num").append("<li></li>");
        }
        $(".bannerRight .num li").first().addClass("on");

        /*鼠标滑入原点事件*/
        $(".bannerRight .num li").hover(function () {
            var index = $(this).index();//获取当前索引值
            i = index;
            $(".bannerRight .img").stop().animate({ left: -index * 226 }, 500);
            $(this).addClass("on").siblings().removeClass("on");
        });
        /*自动轮播*/
        var t = setInterval(function () { i++; move();},2000);
        /*鼠标悬停事件*/
        $(".bannerRight").hover(function () {
            clearInterval(t);//鼠标悬停时清除定时器
        }, function () {
            t = setInterval(function () { i++; move(); }, 2000); //鼠标移出时清除定时器
        });
        /*移动事件*/
        function move() {
            if (i == size) {
                $(".bannerRight .img").css({ left: 0 });
                i = 1;
            }
            if (i == -1) {
                $(".bannerRight .img").css({ left: -(size - 1) * 500 });
                i = size - 2;
            }
            $(".bannerRight .img").stop().animate({ left: -i * 226 }, 500);

            if (i == size - 1) {
                $(".bannerRight .num li").eq(0).addClass("on").siblings().removeClass("on");
            } else {
                $(".bannerRight .num li").eq(i).addClass("on").siblings().removeClass("on");
            }
        }
        //tab  中的无缝滚动
        var Ai = 0;
        var Aclone = $(".tab-right .img li").first().clone();//克隆第一张图片
        $(".tab-right .img").append(Aclone);//复制到列表最后
        var Asize = $(".tab-right .img li").size();
        for (var j = 0; j < Asize-1; j++) {
            $(".tab-right .num").append("<li></li>");
        }
        $(".tab-right .num li").first().addClass("on");

        /*鼠标滑入原点事件*/
        $(".tab-right .num li").hover(function () {
            var index = $(this).index();//获取当前索引值
            Ai = index;
            $(".tab-right .img").stop().animate({ left: -index * 238 }, 500);
            $(this).addClass("on").siblings().removeClass("on");
        });
        /*自动轮播*/
        var At = setInterval(function () { Ai++; move();},2000);
        /*鼠标悬停事件*/
        $(".tab-right").hover(function () {
            clearInterval(At);//鼠标悬停时清除定时器
        }, function () {
            At = setInterval(function () { i++; move(); }, 2000); //鼠标移出时清除定时器
        });
        /*移动事件*/
        function move() {
            if (Ai == Asize) {
                $(".tab-right .img").css({ left: 0 });
                Ai = 1;
            }
            if (Ai == -1) {
                $(".tab-right .img").css({ left: -(Asize - 1) * 500 });
                Ai = Asize - 2;
            }
            $(".tab-right .img").stop().animate({ left: -Ai * 238 }, 500);
            if (Ai == Asize - 1) {
                $(".tab-right .num li").eq(0).addClass("on").siblings().removeClass("on");
            } else {
                $(".tab-right .num li").eq(Ai).addClass("on").siblings().removeClass("on");
            }
        }


        //banner中的透明度变化
        // 第一步给按钮列表添加click事件
        aFlashBtnA.mouseenter(function () {
            iIndex = $(this).index();
            console.log(iIndex);
            //利用animate函数将 轮播图片进行隐藏，
           touMingDu();
            //改变按钮的class名
            aFlashBtnA.removeClass('active').eq(iIndex).addClass('active');
        });
       oTimer = setInterval(function () {
            iIndex++;
            if(iIndex === aFlashImgLi.length) {
                iIndex = 0;
            }
           touMingDu()
           // 改变按钮的class名称
            aFlashBtnA.removeClass('active').eq(iIndex).addClass('active');
        }, 3000);
        //图片的透明度的变化
        function touMingDu(){
            aFlashImgLi.animate({opacity: 0}, function () {$(this).css({display:'none'});});
            aFlashImgLi.eq(iIndex).css({display:'block'}).stop(true).animate({opacity: 1});
        }
        bannerTop.mouseenter(function () {
            clearInterval(oTimer);
        });
        //s手机充值
        var tx2Money=$("#tx2");
        var  eggOption=$(".egg_select_option");
        tx2Money.mouseenter(function(){eggOption.css({display:"block"});});
        tx2Money.mouseleave(function(){eggOption.css({display:"none"});});
    })
})(jQuery);