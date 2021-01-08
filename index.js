$(document).ready(function() {

    $('#ModalNamePlayer').modal('show');

    $('#button_start_game').click(function() {
        capturaDadosJogadores();
    });
});

function capturaDadosJogadores() {
    var playerOne = $('input[name="input_player_one"]').val();

    var playerTwo = $('input[name="input_player_two"]').val();

    var startGame = true;

    if (playerOne == "") {
        alert("Preencha o campo com o nome do primeiro jogador");
        startGame= false;
    }

    if (playerTwo == '') {
        alert("Preencha o campo com o nome do segundo jogador");
        startGame= false;
    }

    if (startGame == true){
        $('#ModalNamePlayer').modal('hide');
        $('#game').show('slow');
    }
}