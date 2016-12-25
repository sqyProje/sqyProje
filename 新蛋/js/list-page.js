/**
 * Created by Administrator on 2016/9/24.
 */
((function($){
    $(function(){
        var details=$(".details");
        var h3=$("#menu  h3");
        var menuList=$(".menu-list .details");

        h3.mouseenter(function(){
            details.css({top:0});
        })
        menuList.mouseleave(function(){
            details.css({top:-590});
        })
       /*h3.mouseleave(function(){
            details.css({top:-590});
        })*/
        var bagDD=$(".bagFF");
        var baglist=$(".baglist");
        bagDD.mouseenter(function(){
          var index= bagDD.index($(this));
            bagDD.removeClass("ddhover").eq(index).addClass("ddhover");
            baglist.removeClass("hover").eq(index).addClass("hover");
        })
        bagDD.mouseleave(function(){
            console.log(bagDD)
            var index= bagDD.index($(this));
            bagDD.removeClass("ddhover");
            baglist.removeClass("hover");
        })
        var controlTitle=$(".control-title li");
        var detailsInfomation=$(".details-infomation");
        controlTitle.mouseenter(function(){
            var index=$(this).index();
            controlTitle.removeClass("active").eq(index).addClass("active")
            detailsInfomation.removeClass("active").eq(index).addClass("active")
        });
        var crazySpan=$(".crazy-span span");
        var beamcontent=$(".beam-content");
         crazySpan.mouseenter(function(){
             var index=$(this).index();
             crazySpan.removeClass("active").eq(index).addClass("active")
             beamcontent.removeClass("crazy-content").eq(index).addClass("crazy-content")

         })
    })
}))(jQuery);