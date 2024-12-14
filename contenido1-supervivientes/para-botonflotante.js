function irarriba(pxPantalla) {
    window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop;
        var botonarriba = document.getElementById('botonarriba');

        if (scroll > pxPantalla) {
            botonarriba.style.right = 20 + "px";
        } else {
            botonarriba.style.right = -100 + "px";
        }
    });
}

irarriba(600);