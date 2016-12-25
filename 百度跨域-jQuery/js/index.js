$(function() {
    $('#search-content').bind('input propertychange', function() {
        if ($(this).val() !== '') {
            /*$.ajax({
            	url: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?json=1&p=3&req=2&csor=1',
            	jsonp: 'cb',
            	dataType: 'jsonp',
            	data: {
            		wd: $(this).val()
            	},
            	success: function (data) {
					console.log(data)
            		var sHtml = '';
            		data.s.forEach(function (v, k) {
            			sHtml += '<li><a href="javascript:;">' + v + '</a></li>';
            		});
            		$('#search-list').html(sHtml);
            	}
            });*/
			   $.getJSON(
            	//'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?json=1&p=3&req=2&csor=1&cb=?',

			/*var sHtml = '';
			 data.s.forEach(function (v, k) {
			 sHtml += '<li><a href="javascript:;">' + v + '</a></li>';

			 });
			 $('#search-list').html(sHtml);*/
			//走秀网跨域
            	'http://mbrand.xiu.com/suggest/execute?limit=10&mkt=xiu&jsoncallback=?',
				   {q: $(this).val()},
            	function (data) {

            		var sHtml = '';
            		data.data.forEach(function (v, k) {
						if(data.data[k].catalogName ){
							sHtml += '<li><a href="javascript:;">' + data.data[k].display + ' </a><em>品牌</em></li>';
						}else if(data.data[k].brandName ){
							sHtml += '<li><a href="javascript:;">' + data.data[k].display + ' </a><em>卖场</em></li>';
						}else if(data.data[k].catalogName &&data.data[k].brandName){
							sHtml += '<li><a href="javascript:;">' + data.data[k].display + ' </a></li>';

						}
						$('#search-list').html(sHtml);
						console.log(data);
            		});

            	}
            );
        }
    });
});
