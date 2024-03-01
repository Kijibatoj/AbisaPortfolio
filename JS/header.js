document.addEventListener('DOMContentLoaded', function() {
    var parallax = document.querySelector('.parallax');

    window.addEventListener('scroll', function() {
        var offset = window.pageYOffset;
        parallax.style.backgroundPositionY = offset * 0.7 + 'px'; // Ajusta la velocidad del efecto parallax cambiando el valor 0.7
    });
});
