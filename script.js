function adicionarTarefa() {
  //adicona mensagem de sucesso toda vez que uma tarefa for inserida.
  let mensagem = "Tarefa adicionada com sucesso!"
  let inputTarefa = document.getElementById("inputTarefa");
  let tarefa = inputTarefa.value;
  document.getElementById("mensagem").textContent = mensagem;

  //cria o elemento li de uma lista das tarefas adicionadas.
  let listaTarefas = document.getElementById("listaTarefas");
  let novaTarefa = document.createElement("li");

  //adiciona a tarefa como um novo item sobre um elemento pai.
  novaTarefa.textContent = tarefa;
  listaTarefas.appendChild(novaTarefa);

  //limpa a area de entrada.
  inputTarefa.value = "";
}
