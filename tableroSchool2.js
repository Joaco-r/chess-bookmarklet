(function(){
    let board = document.querySelector('#board-play-computer');
    board.style.backgroundImage = "url('https://assets-themes.chess.com/image/jz5it/200.jpg')";
    const plantillaDeEstilo = document.getElementById('board-styles-play-computer');
    fetch('https://joaco-r.github.io/chess-bookmarklet/tableroSchool.html')
    .then(response => response.text())
    .then(data =>{
        plantillaDeEstilo.innerHTML = data;
    });
    
})();
