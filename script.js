function adicionarTarefa() {
  //adicona mensagem de sucesso toda vez que uma tarefa for inserida.
  let inputTarefa = document.getElementById("inputTarefa");
  let tarefa = inputTarefa.value.trim();

  if (tarefa == "") {
    let mensagemErro = "Digite uma tarefa para adiciona-la a sua lista!";
    document.getElementById("mensagem").textContent = mensagemErro;
  } else {
    let mensagem = "Tarefa adicionada com sucesso!";
    document.getElementById("mensagem").textContent = mensagem;

    //cria o elemento li de uma lista das tarefas adicionadas.
    let listaTarefas = document.getElementById("listaTarefas");
    let novaTarefa = document.createElement("li");

    //adiciona a tarefa como um novo item sobre um elemento pai.
    novaTarefa.textContent = tarefa;
    listaTarefas.appendChild(novaTarefa);
  }

  //limpa a area de entrada.
  inputTarefa.value = "";
}
