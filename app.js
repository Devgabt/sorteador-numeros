function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let numeroSorteado;
    let numerosSorteados = []
    let resultado = document.getElementById('resultado');

    for (let i = 0; i < quantidade; i++) {
        numeroSorteado = gerarNumeroAleatorio(de, ate);
        while (numerosSorteados.includes(numeroSorteado)) {
            numeroSorteado = gerarNumeroAleatorio(de, ate);
        }
        numerosSorteados.push(numeroSorteado);
    }

    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numerosSorteados}</label>`
    reiniciar();
}

function gerarNumeroAleatorio(de, ate) {
    let numeroAleatorio = Math.floor(Math.random() * (ate - de + 1) + de);
    return numeroAleatorio;
}

function reiniciar() {
    const campos = ['quantidade', 'de', 'ate'];
    
    campos.forEach(id => {
        let campo = document.getElementById(id);
        campo.value = '';
    });
}
