// Select all images inside the '.artists' class
let aImgArtist = document.querySelectorAll('.artists img');

// Loop through each of the artist images
for (let i = 0; i < aImgArtist.length; i++) {

    // Get the width and height of the current artist image
    let w = aImgArtist[i].clientWidth;
    let h = aImgArtist[i].clientHeight;

    // Check the dimensions of the current artist image
    if (w > h) {
        // If the image width is greater than its height, adjust its width automatically and set its height to fill the container
        aImgArtist[i].style.width = 'auto';
        aImgArtist[i].style.height = '100%';
    } else {
        // If the image height is greater or equal to its width, adjust its height automatically and set its width to fill the container
        aImgArtist[i].style.width = '100%';
        aImgArtist[i].style.height = 'auto';
    }
}

// Initialize the Swiper slider for the '.banner .swiper' class
var mySwiper = new Swiper('.banner .swiper', {
    autoplay: true,         // Enable autoplay for the slider
    loop: true,             // Enable loop mode, so the slider restarts after the last slide

    // Configuration for the pager dots at the bottom of the slider
    pagination: {
        el: '.swiper-pagination',
    },

    // Configuration for the forward and backward navigation buttons
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
