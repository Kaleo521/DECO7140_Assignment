; (function () {
    // 获取所有小图片
    let aImgSmall = document.querySelectorAll('.goods-imgs__small img');
    // 获取大图片
    let oImgBig = document.querySelector('.goods-imgs__big img');

    for (var i = 0; i < aImgSmall.length; i++) {
        // 给小图片添加点击事件， 点击小图片切换大图片的链接
        aImgSmall[i].onclick = function () {
            oImgBig.src = this.src;
        }
    }
})()