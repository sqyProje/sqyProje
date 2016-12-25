/**
 * Created by Administrator on 2016/9/24.
 */
(function($){
    $(function(){
        var code=$(".code");
        var tips=$(".tips");
        var Email=$("#Email");
            var date=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']    ;
            var result="";
            for(var i=0;i<4;i++){
                var random=Math.floor(Math.random()*62);
                result+=date[random];
                code.html(result);
            }
               $(".hrefA").click(function(){
                   var result="";
                   for(var i=0;i<4;i++){
                       var random=Math.floor(Math.random()*62);
                       result+=date[random];
                       code.html(result);
                   }
               });



            $("#txtPhone").blur(function(){
                var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
                var txtPhone=$("#txtPhone").val();
                if(txtPhone.length==0) {
                    tips.html('手机号码不能为空');
                }else if(txtPhone.length!=11){
                    tips.html('请输入有效的手机号');
                }else if(!myreg.test(txtPhone)) {
                    tips.html('请输入的正确手机号码！');
                }else{

                 var again=getCookie("phone");
                    if(txtPhone===again){
                        tips.css({color:"red"}).html("不能重复注册");
                        return false;
                    }else{
                        tips.css({color:"green"}).html("输入格式正确");
                    }

                    console.log(  getCookie("phone"));
                    var reg1=$(".reg-1");
                    reg1.blur(function(){
                        if(reg1.val().length==""){
                            Email.html("验证码不能为空");
                        }else if( reg1.val()!==code.html()){
                            Email.html("请输入正确的验证码");
                            return false;
                        }else{
                            Email.css({color:"green"}).html("输入正确");
                            var content=$(".content");
                            var codeBtn=$(".code_btn_0");
                            codeBtn.click(function(){
                                content.eq(0).removeClass("first-con");
                                content.eq(1).addClass("first-con");
                                setCookie("phone",txtPhone,7);
                            });
                        }
                    });

                }
            });

        var reg2Pass=$(".reg2-pass");
        var reg2Sure=$(".reg2-sure");
           reg2Pass.blur(function(){
               var reg=/^[a-z0-9_-]{5,18}$/;
                if(  reg2Pass.val().length==0){
                    $(".pass-tip2").text("长度6-16位字符，没有空格");
                }else if(!reg.test(reg2Pass.val())){
                    $(".pass-tip2").text("请输入正确格式");
                }else{
                    var againPass=getCookie("password");
                    if( againPass===reg2Pass.val()){
                        $(".pass-tip2").css({color:"red"}).html("密码重复");
                        return false;
                    }else{
                        $(".pass-tip2").css({color:"green"}).html("密码格式正确");
                        reg2Sure.blur(function(){
                            console.log(reg2Sure.val());
                            if(reg2Sure.val()==""){
                                $(".sure").text("请输入正确格式");
                            } else if(reg2Pass.val()!=reg2Sure.val()){
                                $(".sure").text("两次密码不相同");
                            }else{
                                $(".sure").css({color:"green"}).text("密码相同，进入下一步");
                                var content=$(".content");
                                var codeBtn=$(".code_btn_0");
                                codeBtn.click(function(){
                                    content.eq(1).removeClass("first-con");
                                    content.eq(2).addClass("first-con");
                                    setCookie("password", reg2Pass.val(),7,"/")
                                });
                            }

                        })

                    }


                }
            });



    }



    )
})(jQuery);