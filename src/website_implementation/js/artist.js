// Immediately Invoked Function Expression (IIFE) to ensure that the code inside does not interfere with other scripts
(function () {

    // Select the image inside the '.artist-avatar' class
    let oImgAvatar = document.querySelector('.artist-avatar img');

    // Get the width and height of the selected image
    let w = oImgAvatar.clientWidth;
    let h = oImgAvatar.clientHeight;

    // Log the width and height to the console
    console.log(w, h);

    // Check the dimensions of the image
    if (w > h) {
        // If the image width is greater than its height, set the width to adjust automatically and height to take the full container height
        oImgAvatar.style.width = 'auto';
        oImgAvatar.style.height = '100%';
    } else {
        // If the image height is greater or equal to its width, set the height to adjust automatically and width to take the full container width
        oImgAvatar.style.width = '100%';
        oImgAvatar.style.height = 'auto';
    }

    // Initialize the Swiper slider for the '.artist-banner .swiper' class
    var mySwiper = new Swiper('.artist-banner .swiper', {
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

})();
