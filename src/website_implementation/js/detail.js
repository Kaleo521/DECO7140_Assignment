; (function () {
    // Get all the small pictures
    let aImgSmall = document.querySelectorAll('.goods-imgs__small img');
    // Get a big picture
    let oImgBig = document.querySelector('.goods-imgs__big img');

    for (var i = 0; i < aImgSmall.length; i++) {
        // Add a click event to the small picture, and click the small picture to switch the link of the big picture.
        aImgSmall[i].onclick = function () {
            oImgBig.src = this.src;
        }
    }

    let oImgAvatar = document.querySelector('.goods-info__avatar img');
    let w = oImgAvatar.clientWidth;
    let h = oImgAvatar.clientHeight;
    console.log(w, h);
    if (w > h) {
        oImgAvatar.style.width = 'auto';
        oImgAvatar.style.height = '100%';
    } else {
        oImgAvatar.style.width = '100%';
        oImgAvatar.style.height = 'auto';
    }
})();