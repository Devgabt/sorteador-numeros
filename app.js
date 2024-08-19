function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let numeroSorteado;
    let numerosSorteados = []

    for (let i = 0; i < quantidade; i++) {
        numeroSorteado = gerarNumeroAleatorio(de, ate);
        while (numerosSorteados.includes(numeroSorteado)) {
            numeroSorteado = gerarNumeroAleatorio(de, ate);
        }
        numerosSorteados.push(numeroSorteado);
    }
    console.log(numerosSorteados)
}

function gerarNumeroAleatorio(de, ate) {
    let numeroAleatorio = Math.floor(Math.random() * (ate - de + 1) + de);
    return numeroAleatorio;
}