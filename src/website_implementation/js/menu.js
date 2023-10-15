
    let oDivMenu = document.querySelector('.menu');
    let oDivNav = document.querySelector('.nav');
    let oDivHeader = document.querySelector('.header');
    oDivMenu.onclick = function (e) {
        console.log(e);
        e.stopPropagation();
        oDivNav.classList.toggle('show');
        console.log(oDivNav.classList);
        oDivHeader.onclick = function () {
            oDivNav.classList.remove('show');
        }
    }
