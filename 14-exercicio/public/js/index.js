var preco_unit = document.getElementById("preco_unit");
var qtd_comprada = document.getElementById("qtd_comprada");
var dinheiro_recebido = document.getElementById("dinheiro_recebido");

let resultado = document.getElementById('troco');

let calcularTroco = () => {
  let preco = parseFloat(preco_unit.value);
  let qtd = qtd_comprada.value;
  let valortotalcompra = parseFloat(preco * qtd);

  let recebeu = dinheiro_recebido.value;
  let trocoareceber = Math.abs(valortotalcompra - recebeu);
  let valorareceber = recebeu;

  if(valorareceber < valortotalcompra){
    resultado.innerHTML = `DINHEIRO INSUFICIENTE. FALTAM ${trocoareceber.toFixed(
      2
    )} REAIS`;
  }else{
   resultado.innerHTML = `
    TROCO = ${trocoareceber.toFixed(2)}
    `;
  }

  

};
