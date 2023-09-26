let minuto = document.getElementById("minutos");

let resultado = document.getElementById("resultado");

let calcularValor = () => {
  let plano = 100; // Plano em Minutos
  let valor = 50.00;
  let excedentes = 2.00;

  let minutosUsou = parseInt(minuto.value);

  if(minutosUsou <= plano){
    resultado.innerHTML = `Valor a pagar: R$ ${valor.toFixed(2)}`
  }else{
    let minutosExcedeu = minutosUsou - plano;
    let excedeu = valor + (minutosExcedeu * excedentes);
    resultado.innerHTML = `Valor a pagar: R$ ${excedeu.toFixed(2)}`
  }

}