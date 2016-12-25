/**
 * Created by Administrator on 2016/9/21.
 */
(function(){
    $(function(){
        var open=$(".open");
        var service=$(".service");
        var newEgg=$("#newEgg");
        var serviceCont=$("#serviceCont");
        var searCon=$(".tx");
        var men0=$(".men-0");
        var carPP=$(".car-pp");
        var men2=$(".men-2");
        var carMM=$(".car-mm");
        var menuListLi=$(".nan-nan");
        var listContent=$(".list-content");
        var regis1=$(".regis-1");
        var regis2=$(".regis-2");
        var menuListDt=$(".menu-dt");

        //登录和 注册
        regis1.click(function(){
            window.location.href="../html/logon.html"
        });
        regis2.click(function(){
            window.location.href="../html/register.html"
        });
        //全部商品分类的代码
        menuListLi.mouseenter(function(){
            var iIndex=$(this).index();
            listContent.eq(iIndex).css({display:"block"});
            menuListLi.eq(iIndex).addClass("active");
            menuListDt.removeClass("active").eq(iIndex).addClass("active");
        });
        menuListLi.mouseleave(function(){
            var iIndex=$(this).index();
            listContent.eq(iIndex).css({display:"none"})
            menuListLi.eq(iIndex).removeClass("active");
            menuListDt.eq(iIndex).removeClass("active");
        });
        //菜单列表的背景色的变化
        var navMiddle=$("#navmiddle li");
        navMiddle.mouseenter(function(){
            var iIndex=$(this).index();
            navMiddle.eq(iIndex).addClass("active")
        });
        navMiddle.mouseleave(function(){
            var iIndex=$(this).index();
            navMiddle.eq(iIndex).removeClass("active")
        });
        //购物车和详情的现实和消失
        men0.mouseenter(function(){
            carPP.css({display:"block"});
            men0.css({background:"#ffffff url(../image/nav-left-hover.jpg) no-repeat 100px 20px"});
        });
        men0.mouseleave(function(){
            carPP.css({display:"none"});
            men0.css({background:""});
        });
        men2.mouseenter(function(){
            carMM.css({display:"block"});
            men2.css({background:"#ffffff url(../image/nav-left-hover.jpg) no-repeat 80px 20px"});

        });
        men2.mouseleave(function(){
            carMM.css({display:"none"});
            men2.css({background:""});
        });

        //搜索框的获得焦点和失去焦点
        searCon.focus(function(){
            var searTx=$(this).val();
            if(searTx==this.defaultValue){
                $(this).val("");
            }
        });
        searCon.blur(function(){
            var TxTxt=$(this).val();
            if(TxTxt===""){
                $(this).val(this.defaultValue);
            }
        });
        //我的订单和我的详情的效果代码
        open.mouseenter(function(){
            newEgg.css({display:"block"});
            open.css({background: "#fff url(../image/small-img.png) no-repeat 50px -12px"})
        });
        service.mouseenter(function(){
            serviceCont.css({display:"block"});
            service.css({ background:"#fff url(../image/small-img.png) no-repeat 42px -12px"})
        });
        open.mouseleave(function(){
            newEgg.css({display:"none"});
            open.css({background:""});
        });
        service.mouseleave(function(){
            serviceCont.css({display:"none"});
            service.css({background:""});
        })

    })
})(jQuery);