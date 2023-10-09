
        // dom 操作 获取 菜单节点
        let oDivMenu = document.querySelector('.menu');
        let oDivNav = document.querySelector('.nav');
        let oDivHeader = document.querySelector('.header');
        oDivMenu.onclick = function (e) {
            e.stopPropagation();
            oDivNav.classList.toggle('show');

            oDivHeader.onclick = function () {
                oDivNav.classList.remove('show');
            }
        }
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


