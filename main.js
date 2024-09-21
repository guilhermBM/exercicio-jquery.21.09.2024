$(document).ready(function(){
    $("#adicionarTarefaBtn").click(function(){
        $("#listaTarefas").slideDown(200);
        var novaTarefa = $("#novaTarefaInput").val();
        if(novaTarefa !== ""){
            var item = $("<li>").text(novaTarefa);
            item.click(function(){
                $(this).toggleClass("completa");
            });
            item.appendTo("#listaTarefas");
            $("#novaTarefaInput").val(""); // Limpa o campo de input após adicionar
        }
    });

    $('#botao-limpar').click(function(){
        $('#listaTarefas').slideUp(200);
            $("#listaTarefas").empty(); // Remove todos os itens da lista
        }); 
});