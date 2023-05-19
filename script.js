
var criptografar = document.querySelector('button[class=btn-criptografar]');
var descriptografar = document.querySelector('button[class=btn-descriptografar]');
var copiar = document.querySelector('.btn-copiar');

//funções para criptografar e descriptografar

function criptografaFrase(){

    var fraseSecreta = document.querySelector('textarea').value;

    if(!caracteresEspeciais(fraseSecreta) && !letrasMaiusculas(fraseSecreta) && !letrasAcentuadas(fraseSecreta)){
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
      
    }else{
        alert("A sua mensagem contém caracteres inválidos, verifique e tente novamente!");
    }
    
}

criptografar.addEventListener('click', criptografaFrase);

function descriptografafaFrase(){

    var fraseSecreta = document.querySelector('textarea').value;

    if(!caracteresEspeciais(fraseSecreta) && !letrasMaiusculas(fraseSecreta) && !letrasAcentuadas(fraseSecreta)){
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

    }else{
        alert("A sua mensagem contém caracteres inválidos, verifique e tente novamente!");
    }

}

descriptografar.addEventListener('click', descriptografafaFrase);

//funcao que copia a frase que foi resultado da decodificação

function copiarFrase(){
    var fraseResultado = document.querySelector('.frase-resultado').innerHTML;

    var temporariaInput = document.createElement('textarea');
    temporariaInput.value = fraseResultado;
    document.body.appendChild(temporariaInput);

    temporariaInput.select();
    temporariaInput.setSelectionRange(0, 99999);

    document.execCommand('copy');
    
    alert(`O seu texto "${fraseResultado}" foi copiado com sucesso!`)
}

copiar.addEventListener('click', copiarFrase);

//funções para os caracteres proibidos

function caracteresEspeciais(frase){
    var regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0123456789]/;
    return regex.test(frase);
}

function letrasMaiusculas(frase){
    var regex = /[A-Z]/;
    return regex.test(frase);
}

function letrasAcentuadas(frase){
    var regex = /[ÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÄËÏÖÜÃÕ]/i;
    return regex.test(frase);
}

