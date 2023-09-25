var preco_unit = document.getElementById('preco_unit');
var qtd_comprada = document.getElementById('qtd_comprada');
var dinheiro_recebido = document.getElementById("dinheiro_recebido");

let calcularTroco = () => {
    let preco = preco_unit.value;
    let qtd = qtd_comprada.value;
    let valortotalcompra = preco * qtd;

    let recebeu = dinheiro_recebido.value;
    let trocoareceber = Math.abs(valortotalcompra - recebeu);
    
    troco = document.getElementById('troco').innerHTML = `
    TROCO = ${trocoareceber.toFixed(2)}
    `
    
}

