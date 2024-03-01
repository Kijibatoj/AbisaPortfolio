document.addEventListener("DOMContentLoaded", function() {
    var paragraphs = document.querySelectorAll('.typewriter p');

    function startTypewriterEffect() {
        paragraphs.forEach(function(paragraph) {
            paragraph.classList.add('typing');
        });
    }

   
    startTypewriterEffect();


    setInterval(function() {
        paragraphs.forEach(function(paragraph) {
            paragraph.classList.remove('typing');
            void paragraph.offsetWidth; 
            paragraph.classList.add('typing');
        });
    }, 7000); 
});

