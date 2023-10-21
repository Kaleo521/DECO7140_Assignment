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

var mySwiper = new Swiper('.banner .swiper', {
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