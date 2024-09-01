(function(){
    const plantillaDeEstilo = document.getElementById('board-styles-play-computer');
    plantillaDeEstilo.innerHTML = fetch('https://joaco-r.github.io/chess-bookmarklet/tableroSchool.html').text();
    
})();
