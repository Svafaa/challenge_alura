var texto=document.querySelector("#texto");
var saida=document.querySelector("#output");

function cripto()
{
    var msg=texto.value;
    var criptoss=msg.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    document.getElementById('output').innerHTML='<textarea readonly id="texto"rows="55" cols="40">'+criptoss+'</textarea>';
    
}

function decripto()
{
    var msg=texto.value;
    var descriptoss=msg.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.getElementById('output').innerHTML='<textarea readonly id="texto"rows="55" cols="40">'+descriptoss+'</textarea>';
    
}

function copiar()
{
    var copytxt=document.getElementById('texto');
    copytxt.select();
    document.execCommand('copy');
}