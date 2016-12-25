/**
 * Created by Administrator on 2016/9/23.
 */
(function($){
    $(function(){
        var DefaultText=$(".DefaultText");
        DefaultText.focus(function(){
             var tx=$(this).val();
            if(tx==this.defaultValue){
                $(this).val("");
            }
        });
        DefaultText.blur(function(){
            var tx=$(this).val();
            if(tx==""){
                $(this).val(this.defaultValue);
            }
        });
            var  RightAway=$(".right-away");
            var textPass=$(".textPass").val();
                textPass = $.trim(textPass);
            var Wr0=$(".wr0");
            var Wr2=$(".wr2");
         /*  $(".DefaultText").blur(function(){
               //邮箱格式
               var reg = /^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;
               //手机号格式
               var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
               var Text=$(".DefaultText").val();
               console.log(Text);
              /!* if(Text.length==0) {
                console.log(Text);
                //console.log(1);
                Wr0.text("!请输入合适的长度");
                }else if(!reg.test(Text)&&!myreg.test(Text)){
                Wr0.text("!请输入正确的格式");
                }*!/
               //此时为得到注册时的cookie,
               var copy=getCookie("phone")
               if(Text!==copy) {
                   Wr0.text("!用户名错误");
               }else{
                   Wr0.text("!用户名正确");
               }
           });*/
   /*     $(".textPass").blur(function(){
           var textPass=$(".textPass").val();
              var reg=/^[a-z0-9_-]{5,18}$/;
            if( textPass==""){
                Wr2.html("！密码不能为空");
            }else if( textPass.length<6||textPass.length>20){
                Wr2.html("！请输入合适的长度");
            } else if(!reg.test(textPass)){
                Wr2.html("！请输入正确的用户名,已验证手机/邮箱或密码");
            }else{

                RightAway.click(function(){
                    window.location.href="../html/index.html"
                });
            }
            var pass=getCookie("password");
            if(textPass!==pass){
                Wr2.html("！密码不能为空");
            }else {
                Wr2.html("！密码正确");
            }
        });*/

        RightAway.click(function(){
            var textPass=$(".textPass").val();
            var tel=$(".DefaultText").val();
            var pass=getCookie("password");
            var copy=getCookie("phone");
            console.log(copy);

            console.log(pass);
            if(textPass==""&&tel==""){
                Wr2.html("用户名或密码不能为空");
            }else if(textPass!==pass&&tel!==copy){
                Wr2.html("！用户名或密码与注册不符");
            }else  {
                window.location.href="../html/index.html";
            }
        });






    })
})(jQuery);
