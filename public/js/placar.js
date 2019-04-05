function inserePLacar(){
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "seu-nome";
    var numPalavra = $(".contador-palavras").text();
    
    var linha = novaLinha(numPalavra, usuario);
    linha.find(".botao-remover").click(removerLinha);

    corpoTabela.append(linha);
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
    $(this).parent().parent().remove();
};

function removeLinhaExistente(){
    var removeLinha = $(".botao-remover");
    removeLinha.click(function(){
        removeLinha.parent().parent().remove();
    });
};