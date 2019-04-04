var tempoInicial = $(".tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo);
});

function atualizaTamanhoFrase(){
    var frase = $(".frase").text();
    var numPalavra = frase.split(" ").length;
    var tamanhoFrase = $(".tamanho-frase").text(numPalavra);
};

function inicializaContadores(){
    campo.on("input", function(){
        var conteudo = campo.val();

        var qtdPalavras = conteudo.split(/\S+/).length -1;

        var conteudoSemEspaco = conteudo.replace(/\s+/g,'');
        var qtdCaracteres = conteudoSemEspaco.length;
        
        $(".contador-palavras").text(qtdPalavras);
        $(".contador-caracteres").text(qtdCaracteres);
    });
};

function inicializaCronometro(){
    var tempoRestante = $(".tempo-digitacao").text();
    campo.one("focus", function(){
        $("#botao-reiniciar").attr("disabled", true);
        var cronometroID = setInterval(function(){
            tempoRestante--;
            $(".tempo-digitacao").text(tempoRestante);
            if(tempoRestante < 1){
                campo.attr("disabled", true);
                clearInterval(cronometroID);
                $("#botao-reiniciar").attr("disabled", false);
                campo.toggleClass("campo-desativado");
            }
        },1000);
    });
};

function inicializaMarcadores(){
    var frase = $(".frase").text();
    campo.on("input", function(){
        var digitado = campo.val();
        var comparavel = frase.substr(0 , digitado.length);
        if(digitado == comparavel){
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        }else{
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
    });
};

/* startsWith =  função do ECMA Script 6 que compara a string da mesma forma como fizemos no inicializaMarcadores()

var digitouCorreto = frase.startsWith(digitado);
if(digitouCorreto) {
 campo.addClass("borda-verde");
} else {
 campo.addClass("borda-vermelha");
}*/

function reiniciaJogo(){
    campo.attr("disabled", false);
    campo.val("");
    $(".contador-palavras").text("0");
    $(".contador-caracteres").text("0");
    $(".tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
    campo.toggleClass("campo-desativado");
    campo.removeClass("borda-verde");
    campo.removeClass("borda-vermelha");
};



