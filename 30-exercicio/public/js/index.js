const numero = parseInt(prompt("Digite um número de até dois algarismos:"));
let resultado = document.getElementById('resultado')

function numeroPorExtenso(numero) {
  const unidades = [
    "",
    "Um",
    "Dois",
    "Três",
    "Quatro",
    "Cinco",
    "Seis",
    "Sete",
    "Oito",
    "Nove",
  ];
  const especiais = [
    "Dez",
    "Onze",
    "Doze",
    "Treze",
    "Quatorze",
    "Quinze",
    "Dezesseis",
    "Dezessete",
    "Dezoito",
    "Dezenove",
  ];
  const dezenas = [
    "",
    "",
    "Vinte",
    "Trinta",
    "Quarenta",
    "Cinquenta",
    "Sessenta",
    "Setenta",
    "Oitenta",
    "Noventa",
  ];

  if (numero < 10) {
    return unidades[numero];
  } else if (numero < 20) {
    return especiais[numero - 10];
  } else {
    const unidade = numero % 10;
    const dezena = Math.floor(numero / 10);
    if (unidade === 0) {
      return dezenas[dezena];
    } else {
      return `${dezenas[dezena]} e ${unidades[unidade]}`;
    }
  }
}

if (isNaN(numero) || numero < 0 || numero > 99) {
  console.log("Número inválido. Digite um número de 0 a 99.");
  resultado.innerHTML = 'Número inválido. Digite um número de 0 a 99'
} else {
  const extenso = numeroPorExtenso(numero);
  console.log(`Saída: ${extenso}.`);
  resultado.innerHTML = `Saída: ${extenso}`;
}
