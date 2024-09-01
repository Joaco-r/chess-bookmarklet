(function(){
    let board = document.querySelector('#board-play-computer');
    board.style.backgroundImage = "url('https://assets-themes.chess.com/image/jz5it/200.jpg')";
    let whiteKing  = document.querySelector('#board-play-computer .piece.wk');
    let whiteQueen = document.querySelector('#board-play-computer .piece.wq');
    let whiteBishop = document.querySelector('#board-play-computer .piece.wb, #board-play-computer .promotion-piece.wb');
    let whiteKnight = document.querySelector('#board-play-computer .piece.wn');
    let whiterook = document.querySelector('#board-play-computer .piece.wr');
    let whitePawn = document.querySelector('#board-play-computer .piece.wp');


    let blackKing  = document.querySelector('#board-play-computer .piece.bk');
    let blackQueen = document.querySelector('#board-play-computer .piece.bq');
    let blackBishop = document.querySelector('#board-play-computer .piece.bb');
    let blackKnight = document.querySelector('#board-play-computer .piece.bn');
    let blackrook = document.querySelector('#board-play-computer .piece.br');
    let blackPawn = document.querySelector('#board-play-computer .piece.bp, #board-play-computer .promotion-piece.bp');

    whiteKing.style.backgroundImage = "url('https://assets-themes.chess.com/image/uf7ut/150/wk.png')";
    whiteQueen.style.backgroundImage = "url('https://assets-themes.chess.com/image/uf7ut/150/wq.png')";
    whiteBishop.style.backgroundImage = "url('https://assets-themes.chess.com/image/uf7ut/150/wb.png')";
    whiteKnight.style.backgroundImage = "url('https://assets-themes.chess.com/image/uf7ut/150/wn.png')";
    whiterook.style.backgroundImage = "url('https://assets-themes.chess.com/image/uf7ut/150/wr.png')";
    whitePawn.style.backgroundImage = "url('https://assets-themes.chess.com/image/uf7ut/150/wp.png')";

    blackKing.style.backgroundImage = "url('https://assets-themes.chess.com/image/uf7ut/150/bk.png')";
    blackQueen.style.backgroundImage = "url('https://assets-themes.chess.com/image/uf7ut/150/bq.png')";
    blackBishop.style.backgroundImage = "url('https://assets-themes.chess.com/image/uf7ut/150/bb.png')";
    blackKnight.style.backgroundImage = "url('https://assets-themes.chess.com/image/uf7ut/150/bn.png')";
    blackrook.style.backgroundImage = "url('https://assets-themes.chess.com/image/uf7ut/150/br.png')";
    blackPawn.style.backgroundImage = "url('https://assets-themes.chess.com/image/uf7ut/150/bp.png')";



})();


/*
javascript:
(function(){
    let script = document.createElement('script');
    script.src = "tableroSchool.js";
    document.body.appendChild(script);

})();
*/
