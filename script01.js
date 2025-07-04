function calcularMedia() {
    const n1 = parseFloat(document.getElementById("nota1").value);
    const n2 = parseFloat(document.getElementById("nota2").value);
    const n3 = parseFloat(document.getElementById("nota3").value);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10) {
        document.getElementById("resultado").textContent = "Preencha as três notas corretamente de zero a dez.";
        return;
    }

    const media = (n1 + n2 + n3) / 3;
    let situacao = "";

    if (media >= 7) {
        situacao = "Aprovado ✅";
    } else if (media >= 5) {
        situacao = "Recuperação ⚠️";
    } else {
        situacao = "Reprovado ❌";
    }

    document.getElementById("resultado").innerHTML = `Média: ${media.toFixed(2)}<br>${situacao}`;
}