let morangueiro = {
    idade: 0,
    altura: 0,
    frutas: 0,
    saudavel: true
};

let parreiraUva = {
    idade: 0,
    altura: 0,
    uvas: 0,
    saudavel: true
};

function passarUmDia(planta) {
    if (planta === 'morango') {
        morangueiro.idade++;
        crescerMorangueiro();
        verificarSaudeMorangueiro();
        if (morangueiro.idade >= 30) {
            produzirMorangos();
        }
        atualizarVisualizacao('morango');
    } else if (planta === 'uva') {
        parreiraUva.idade++;
        crescerParreiraUva();
        verificarSaudeParreiraUva();
        if (parreiraUva.idade >= 60) {
            produzirUvas();
        }
        atualizarVisualizacao('uva');
    }
}

function crescerMorangueiro() {
    morangueiro.altura += Math.random() * 0.5; // Simulação de crescimento aleatório
}

function verificarSaudeMorangueiro() {
    if (morangueiro.idade > 365) {
        morangueiro.saudavel = false;
    }
}

function produzirMorangos() {
    if (morangueiro.altura >= 10) {
        morangueiro.frutas += Math.floor(Math.random() * 10) + 1; // Produz entre 1 e 10 morangos
    }
}

function crescerParreiraUva() {
    parreiraUva.altura += Math.random() * 0.5; // Simulação de crescimento aleatório
}

function verificarSaudeParreiraUva() {
    if (parreiraUva.idade > 365) {
        parreiraUva.saudavel = false;
    }
}

function produzirUvas() {
    if (parreiraUva.altura >= 20) {
        parreiraUva.uvas += Math.floor(Math.random() * 20) + 10; // Produz entre 10 e 30 uvas
    }
}

function atualizarVisualizacao(planta) {
    if (planta === 'morango') {
        document.getElementById('alturaMorango').textContent = morangueiro.altura.toFixed(2);
        document.getElementById('frutasMorango').textContent = morangueiro.frutas;
        if (!morangueiro.saudavel) {
            document.getElementById('alturaMorango').textContent = 'Não saudável';
        }
    } else if (planta === 'uva') {
        document.getElementById('alturaUva').textContent = parreiraUva.altura.toFixed(2);
        document.getElementById('uvasProduzidas').textContent = parreiraUva.uvas;
        if (!parreiraUva.saudavel) {
            document.getElementById('alturaUva').textContent = 'Não saudável';
        }
    }
}

function simularClima() {
    let temperatura = parseInt(document.getElementById('temperatura').value);
    let umidade = parseInt(document.getElementById('umidade').value);

    // Simulação de efeitos do clima (opcional)
    if (temperatura > 30) {
        morangueiro.altura -= 0.5; // Reduz altura do morangueiro se a temperatura for alta
        parreiraUva.altura -= 0.5; // Reduz altura da parreira de uvas se a temperatura for alta
    }
    if (umidade < 50) {
        morangueiro.saudavel = false; // Morangueiro não é saudável se a umidade for baixa
        parreiraUva.saudavel = false; // Parreira de uvas não é saudável se a umidade for baixa
    }

    // Atualiza visualização após simular o clima
    atualizarVisualizacao('morango');
    atualizarVisualizacao('uva');
}
