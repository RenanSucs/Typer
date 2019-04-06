function inserePLacar(){
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Renan Lindão";
    var numPalavra = $(".contador-palavras").text();
    
    var linha = novaLinha(numPalavra, usuario);
    linha.find(".botao-remover").click(removerLinha);

    corpoTabela.append(linha);

    $(".placar").slideDown(500);
    scrollPlacar();
};

function novaLinha(numPalavra, usuario){
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(numPalavra);
    var colunaPalavras = $("<td>").text(usuario);
    var colunaRemover = $("<td>");

    var link = $("<a>").attr("href", "#").addClass("botao-remover");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    //icone dentro do <a>
    link.append(icone);
    colunaRemover.append(link);
    //Os tres <td> dentro do <tr>
    linha.append(colunaPalavras);
    linha.append(colunaUsuario);
    linha.append(colunaRemover);

    return linha;
};

function removerLinha(){
    event.preventDefault();
    var linha = $(this).parent().parent();
    linha.fadeOut(1000);
    setTimeout(function(){
        linha.remove();
    },1000);
};

$("#botao-placar").click(mostraPlacar);

function mostraPlacar(){
    $(".placar").stop().slideToggle(600);
}

function scrollPlacar() {
    var posicaoPlacar = $(".placar").offset().top;

    $("html").animate(
    {
        scrollTop: posicaoPlacar + "px"
    }, 1000);
}