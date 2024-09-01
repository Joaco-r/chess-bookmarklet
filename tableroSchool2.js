(function(){
    const plantillaDeEstilo = document.getElementById('board-styles-play-computer');
    fetch('https://joaco-r.github.io/chess-bookmarklet/tableroSchool.html')
    .then(response => response.text())
    .then(data =>{
        plantillaDeEstilo.innerHTML = data;
    });
    
})();
