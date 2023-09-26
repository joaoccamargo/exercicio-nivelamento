let resultado = document.getElementById('resultado');
let lista = [];
for (let i = 0; i < 5; i++) {
  let anuncio = parseInt(prompt("Digite um valor: "));
  lista.push(anuncio); // Adicione o valor à lista
}

let menorValor = Math.min(...lista);
let maiorValor = Math.max(...lista);

resultado.innerHTML = `Saída : ${menorValor} e ${maiorValor}`;
console.log(`Menor valor: ${menorValor}`);
console.log(`Maior valor: ${maiorValor}`);
