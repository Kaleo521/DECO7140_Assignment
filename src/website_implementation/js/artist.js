; (function () {
    let oImgAvatar = document.querySelector('.artist-avatar img');
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

    var mySwiper = new Swiper('.artist-banner .swiper', {
        autoplay: true,
        loop: true, // Loop mode options
    
        // If you need a pager
        pagination: {
            el: '.swiper-pagination',
        },
    
        // If you need the forward and backward button
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    })
})();