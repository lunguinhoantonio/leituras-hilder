function atualizarAno() {
    let anoAtual = new Date().getFullYear();
    document.getElementById('ano-atual').textContent = anoAtual;
}

atualizarAno();