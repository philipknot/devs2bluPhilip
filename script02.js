function converter(){
    const valor = parseFloat(document.getElementById("valorReal").value);
    const moeda = document.getElementById("moeda").value;


    if(isNaN(valor) || valor < 0) {
        document.getElementById("resultado").textContent = "Insira um valor válido.";
        return;
    }
    const dolar = 5.41;
    const euro = 6.37;    
    const libra = 7.39; 
    const bitcoin = 592631.46; 

    const valorDolar = (valor / dolar).toFixed(2);
    const valorEuro = (valor / euro).toFixed(2);
    const valorLibra = (valor / libra).toFixed(2);
    const valorBitcoin = (valor / bitcoin).toFixed(8);

        if (moeda == "dolar") {
            document.getElementById("resultado").textContent = `Valor em Dólar: $${valorDolar}`;
        } else if (moeda == "euro") {   
            document.getElementById("resultado").textContent = `Valor em Euro: €${valorEuro}`;
        } else if (moeda == "libra") {
            document.getElementById("resultado").textContent = `Valor em Libra: £${valorLibra}`;
        } else if (moeda == "bitcoin") {
            document.getElementById("resultado").textContent = `Valor em Bitcoin: ₿${valorBitcoin}`;
        }
}