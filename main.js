function enviarNovaTarefa() {
    const inputTarefa = document.getElementById('inputTarefa');

    fetch('http://localhost:3000/novaTarefa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "descricao": inputTarefa.value })
    })
    .then(response => response.json())
    .then(dados => {
        console.log(dados);
    });
}

document.getElementById('enviarTarefaBtn').addEventListener('click', enviarNovaTarefa);
