let aImgArtist = document.querySelectorAll('.artists img');
for (let i = 0; i < aImgArtist.length; i++) {
    let w = aImgArtist[i].clientWidth;
    let h = aImgArtist[i].clientHeight;
    if (w > h) {
        aImgArtist[i].style.width = 'auto';
        aImgArtist[i].style.height = '100%';
    } else {
        aImgArtist[i].style.width = '100%';
        aImgArtist[i].style.height = 'auto';
    }
}

var mySwiper = new Swiper('.swiper', {
    autoplay: true,
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})