(function(){

    const board = document.querySelector('#board-play-computer');
    board.style.backgroundImage = "url('https://assets-themes.chess.com/image/jz5it/200.jpg')";

    const king = document.querySelector('#board-play-computer .piece.wk');
    king.style.backgroundImage = "url('https://assets-themes.chess.com/image/uf7ut/150/wk.png')";

    const plantillaDeEstilo = document.getElementById('board-styles-play-computer');
    fetch('https://joaco-r.github.io/chess-bookmarklet/tableroSchool.html')
    .then(response => response.text())
    .then(data =>{
        plantillaDeEstilo.innerHTML = data;
    });
    
})();
