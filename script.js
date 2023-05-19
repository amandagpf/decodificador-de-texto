
var criptografar = document.querySelector('button[class=btn-criptografar]');
var descriptografar = document.querySelector('button[class=btn-descriptografar]');

function criptografaFrase(){

    var fraseSecreta = document.querySelector('textarea').value;

    var fraseCriptografada = fraseSecreta
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
   
    var resultado = document.querySelector('.frase-resultado');
    resultado.innerHTML = fraseCriptografada;
    document.querySelector('textarea').value = '';

    resultado.style.fontSize = "30px";
    resultado.style.marginTop = "20px";

    var gato = document.querySelector('.resultado-img');
    gato.style.width = "200px";
}

criptografar.addEventListener('click', criptografaFrase);

function descriptografafaFrase(){

    var fraseSecreta = document.querySelector('textarea').value;

    var fraseDescriptografada = fraseSecreta
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
   
    var resultado = document.querySelector('.frase-resultado');
    resultado.innerHTML = fraseDescriptografada;
    document.querySelector('textarea').value = '';

    resultado.style.fontSize = "30px";
    resultado.style.marginTop = "20px";

    var gato = document.querySelector('.resultado-img');
    gato.style.width = "200px";
}

descriptografar.addEventListener('click', descriptografafaFrase);