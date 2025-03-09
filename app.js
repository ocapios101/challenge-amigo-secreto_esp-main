// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const participantes = ["JHON", "RINGO", "PAUL", "GEORGE", "FREDDIE", "ROGER", "BRYAN", "DEACON"];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim().toUpperCase();
    const lista = document.getElementById("listaAmigos");
    
    if (nombre && participantes.includes(nombre)) {
        const listItem = document.createElement("li");
        listItem.textContent = nombre;
        lista.appendChild(listItem);
        input.value = "";
    } else {
        alert("Nombre no válido o no está en la lista de participantes");
    }
}

function sortearAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim().toUpperCase();
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";

    if (!nombre || !participantes.includes(nombre)) {
        alert("Por favor, ingrese un nombre válido antes de sortear.");
        return;
    }

    const posibles = participantes.filter(participante => participante !== nombre);
    if (posibles.length === 0) {
        alert("No hay suficientes participantes para el sorteo.");
        return;
    }
    
    const amigoSecreto = posibles[Math.floor(Math.random() * posibles.length)];
    
    const resultadoItem = document.createElement("li");
    resultadoItem.textContent = `Tu amigo secreto es: ${amigoSecreto}`;
    resultadoLista.appendChild(resultadoItem);
}