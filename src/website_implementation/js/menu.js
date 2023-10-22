// Select the '.menu' element from the document
let oDivMenu = document.querySelector('.menu');

// Select the '.nav' element from the document
let oDivNav = document.querySelector('.nav');

// Select the '.header' element from the document
let oDivHeader = document.querySelector('.header');

// Attach a click event listener to the 'menu' div
oDivMenu.onclick = function (e) {

    // Log the event object to the console
    console.log(e);
    
    // Prevent the event from propagating up to parent elements
    e.stopPropagation();

    // Toggle the 'show' class on the 'nav' div, effectively showing or hiding it
    oDivNav.classList.toggle('show');

    // Log the list of classes on the 'nav' div to the console
    console.log(oDivNav.classList);
    
    // Attach a click event listener to the 'header' div
    oDivHeader.onclick = function () {
        // Remove the 'show' class from the 'nav' div, hiding it
        oDivNav.classList.remove('show');
    }
}
