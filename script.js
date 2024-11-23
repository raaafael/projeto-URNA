let numerosSelecionados = [];

const candidatos = {
    "12345": {nome :"Candidato: João", foto:"candidato joão.jpg"},
    "23456": {nome :"Candidata: Maria", foto:"candidata maria.jpg"},
    "34567": {nome :"Candidato: Ciclano", foto:"candidato ciclano.jpg"},
    "45678": {nome :"Candidato: Beltrano", foto:"candidato beltrano.jpg"},
    "56789": {nome :"Candidata: Fulana", foto:"candidata fulana.jpg"}
};

function configurarNumeros() {
    document.getElementById("Num1").innerText = "";
    document.getElementById("Num2").innerText = "";
    document.getElementById("Num3").innerText = "";
    document.getElementById("Num4").innerText = "";
    document.getElementById("Num5").innerText = "";
}

function Num(num) {
    if (numerosSelecionados.length < 5) {
        numerosSelecionados.push(num);
        atualizarDisplay();
    } else {
        alert("Você já selecionou 5 números.");
    }
}

function atualizarDisplay() {
    for (let i = 0; i < 5; i++) {
        document.getElementById(`Num${i + 1}`).innerText = ''; // Limpa a exibição
    }

    
    for (let i = 0; i < numerosSelecionados.length; i++) {
        if (i < 5) { 
            document.getElementById(`Num${i + 1}`).innerText = numerosSelecionados[i];
        }
    }
}

function Clear() {
    numerosSelecionados = [];
    atualizarDisplay();
    
}

function confirmVote() {
    if (numerosSelecionados.length === 5) {
        const numeroCandidato = numerosSelecionados.join(""); // Junta os números selecionados
        const candidato = candidatos[numeroCandidato]; // Obtém o candidato correspondente

        if (candidato) {
            // Exibe o nome e a foto do candidato
            document.getElementById("candidatoNome").innerText = candidato.nome;
            document.getElementById("candidatoFoto").src = candidato.foto;
            document.getElementById("candidatoFoto").style.display = 'block'; // Mostra a imagem
            alert("Voto confirmado! Candidato: " + candidato.nome);
        } else {
            alert("Número de candidato inválido. Tente novamente.");
        }
    } else {
        alert("Você precisa selecionar 5 números para confirmar o voto.");
    }
}

window.onload = configurarNumeros;