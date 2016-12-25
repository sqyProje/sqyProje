window.onload = function () {

    var
        oBox = a('box2'),
        aAddCart = getClass(oBox, 'btnS');

    for(var i =0; i < aAddCart.length; i++) {
        aAddCart[i].onclick = function () {

            // 要存储的商品信息：商品ID、商品名称、商品价格、商品数量、商品图片地址
            var
                iGoodsId 	= this.getAttribute('data-id'),
                bGoodsTitle = this.getAttribute('data-title'),
                iGoodsPrice = this.getAttribute('data-price'),
                bGoodsSrc 	= this.getAttribute('data-src');

            var
                bGoods = getCookie('goods'),
                bBtn = true;

            if(bGoods === undefined) {
                var cGoods = [];
            } else {
                var cGoods = JSON.parse(bGoods);//parse用于从一个字符串中解析出json对象,

            }

            for(var i =0; i < cGoods.length; i++) {
                if(cGoods[i].goodsId == iGoodsId){
                    cGoods[i].goodsNum++;
                    bBtn = false;
                }
            }

            if(bBtn) {
                var oGoods = {
                    goodsId: 	iGoodsId,
                    goodsTitle: bGoodsTitle,
                    goodsPrice: iGoodsPrice,
                    goodsSrc: 	bGoodsSrc,
                    goodsNum: 	1
                };
                cGoods.push(oGoods);
            }
            //var cGoods = []; // 存储所有商品信息的数组

            // 写入cookie
            setCookie('goods', JSON.stringify(cGoods), 7, '/');



        }
    }

    function a(id) {
        return document.getElementById(id);
    }

    function getClass(obj, sClassName){
        return obj.getElementsByClassName(sClassName);
    }
}