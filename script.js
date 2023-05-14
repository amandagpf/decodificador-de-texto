
var criptografar = document.querySelector('button[class=btn-criptografar]');
var descriptografar = document.querySelector('button[class=btn-descriptografar]');


function criptografaFrase(evento){
    var fraseSecreta = document.querySelector('textarea').value;
    alert(fraseSecreta);

    function mostraFrase(){
        var fraseCriptografada = fraseSecreta;
        document.querySelector('div[class=frase-resultado]').innerHTML= fraseCriptografada;
    }

    mostraFrase();
}

criptografar.addEventListener('click', criptografaFrase);

function descriptografaFrase(evento){
    var fraseSecreta = document.querySelector('textarea').value;
    alert(fraseSecreta);
}

descriptografar.addEventListener('click', descriptografaFrase);

