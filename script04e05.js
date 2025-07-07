function mostrarTabuada() {
    const num = parseInt(document.getElementById("numeroTabuada").value);
    const saida = document.getElementById("saidaTabuada");

    if (isNaN(num)) {
        saida.textContent = "Digite um número válido para a tabuada.";
        return;
    }

    let resultado = `Tabuada de ${num}:\n`;
    for (let i = 1; i <= 10; i++) {
        resultado += `${num} x ${i} = ${num * i}\n`;
    }

    saida.textContent = resultado;
}

function calcularFatorial() {
    const num = parseInt(document.getElementById("numeroFatorial").value);
    const saida = document.getElementById("saidaFatorial");

    if (isNaN(num) || num < 0) {
        saida.textContent = "Digite um número válido para o fatorial.";
        return;
    }

    if (num > 170) {
        saida.textContent = "Número muito alto! Use um valor até 170.";
        return;
    }

    let fatorial = 1;
    for (let i = 2; i <= num; i++) {
        fatorial *= i;
    }

    saida.textContent = `Fatorial de ${num} é ${fatorial}`;
}
