/**
 * Created by Administrator on 2016/9/28.
 */
(function($){
    $(function(){

        var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        var tips=$(".tips");
        $(".tel").blur(function(){
            if($(".tel").val().length=="") {
                tips.text('手机号码不能为空');
            }else if($(".tel").val().length!=11){
                tips.text('请输入有效的手机号');
            }else if(!myreg.test($(".tel").val())) {
                tips.text('请输入的正确手机号码！');
            }
        });
        var re= /^[1-9][0-9]{5}$/;
        var tips2=$(".tip-2");
        $(".code").blur(function(){
            if( $(".code").val().length==""){
                tips2.text("编码不能为空")
            }else if($(".code").val().length!=6){
                tips2.text("邮政编码长度不足！");
            }else if(!re.test( $(".code").val())){
                tips2.text("邮政编码格式不正确！")
            }

        })
        var Money=getCookie("money");
         var NUM=getCookie("Num");

        $(".all-money").text(Money);
        $(".num").text(NUM);
       $(".have").text(Money);
    })

})(jQuery);