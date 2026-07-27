  let tarefas = [];

function adicionarTarefa() {

  //adicona mensagem de sucesso toda vez que uma tarefa for inserida.
  let inputTarefa = document.getElementById("inputTarefa");
  let tarefa = inputTarefa.value.trim();

  if (tarefa == "") {
    let mensagemErro = "Digite uma tarefa para adiciona-la a sua lista!";
    document.getElementById("mensagem").textContent = mensagemErro;
    document.getElementById("mensagem").style.color = "red";
  } else {
    let mensagem = "Tarefa adicionada com sucesso!";
    document.getElementById("mensagem").textContent = mensagem;
    document.getElementById("mensagem").style.color = "green";

    tarefas.push(tarefas);

    //cria o elemento li de uma lista das tarefas adicionadas.
    let listaTarefas = document.getElementById("listaTarefas");
    let novaTarefa = document.createElement("li");

    //adiciona a tarefa como um novo item sobre um elemento pai.
    novaTarefa.textContent = tarefas[i];
    listaTarefas.appendChild(novaTarefa);

    renderizarTarefa()
  }

  //limpa a area de entrada.
  inputTarefa.value = "";
}

function renderizarTarefa() {
  const listaTarefas = document.getElementById("listaTarefas");
  listaTarefas.innerHTML = ""

  let i = 0;
  for (i; i < tarefas.lenght; i++) {
    let novaTarefa = document.createElement("li");
    novaTarefa.textContent = tarefa;
    listaTarefas.appendChild(novaTarefa);
  }
}
