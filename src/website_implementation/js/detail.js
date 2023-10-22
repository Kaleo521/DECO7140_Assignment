// Immediately Invoked Function Expression (IIFE) to encapsulate the code and prevent possible interference with other scripts
(function () {
    
    // Select all images inside the '.goods-imgs__small' class
    let aImgSmall = document.querySelectorAll('.goods-imgs__small img');
    
    // Select the big image inside the '.goods-imgs__big' class
    let oImgBig = document.querySelector('.goods-imgs__big img');

    // Loop through each of the small images
    for (var i = 0; i < aImgSmall.length; i++) {
        // Attach a click event listener to each small image
        aImgSmall[i].onclick = function () {
            // When a small image is clicked, set the source of the big image to the source of the clicked small image
            oImgBig.src = this.src;
        }
    }

    // Select the avatar image inside the '.goods-info__avatar' class
    let oImgAvatar = document.querySelector('.goods-info__avatar img');
    
    // Get the width and height of the avatar image
    let w = oImgAvatar.clientWidth;
    let h = oImgAvatar.clientHeight;
    
    // Log the width and height of the avatar image to the console
    console.log(w, h);

    // Check the dimensions of the avatar image
    if (w > h) {
        // If the image width is greater than its height, adjust its width automatically and set its height to fill the container
        oImgAvatar.style.width = 'auto';
        oImgAvatar.style.height = '100%';
    } else {
        // If the image height is greater or equal to its width, adjust its height automatically and set its width to fill the container
        oImgAvatar.style.width = '100%';
        oImgAvatar.style.height = 'auto';
    }

})();
