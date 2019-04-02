var frase = $(".frase").text();
var numPalavra = frase.split(" ").length;
var tamanhoFrase = $(".tamanho-frase").text(numPalavra);


var campo = $(".campo-digitacao");
campo.on("input", function(){
    var conteudo = campo.val();

    var qtdPalavras = conteudo.split(/\S+/).length -1;

    var conteudoSemEspaco = conteudo.replace(/\s+/g,'');
    var qtdCaracteres = conteudoSemEspaco.length;
    
    $(".contador-palavras").text(qtdPalavras);
    $(".contador-caracteres").text(qtdCaracteres);
    
});
