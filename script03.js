let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function adivinharNumero() {
    const palpite = parseInt(document.getElementById("numero").value);
    tentativas++;

    const resultado = document.getElementById("resultado");
    const dica = document.getElementById("dica");
    const tentativasDiv = document.getElementById("tentativas");

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        resultado.textContent = "Por favor, digite um número entre 1 e 100.";
        dica.textContent = "";
        return;
    }

    if (palpite === numeroSecreto) {
        resultado.textContent = `🎉 Parabéns! Você acertou o número ${numeroSecreto}`;
        dica.textContent = "";
    } else {
        let diferenca = Math.abs(palpite - numeroSecreto);
        let textoDica = "";

        if (diferenca <= 5) {
            textoDica = "Quase!";
        } else if (diferenca <= 10) {
            textoDica = "Perto!";
        } else if (diferenca <= 20) {
            textoDica = "Longe!";
        } else {
            textoDica = "Muito longe!";
        }

        resultado.textContent = "";
        dica.textContent = textoDica;
    }

    tentativasDiv.textContent = `Tentativas: ${tentativas}`;
}

