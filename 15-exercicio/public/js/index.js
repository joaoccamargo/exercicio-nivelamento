var medida = document.getElementById("medida");

let resultado = document.getElementById('resultado');

let calcularMedida = () => {
  let medida_recebida = parseFloat(medida.value);

  if(medida_recebida <= 100.0){
    resultado.innerHTML = "Classificação: Normal";
  }else if(medida_recebida > 100.0 && medida_recebida <= 140.0){
    resultado.innerHTML = "Classificação: Elevado";
  }else{
    resultado.innerHTML = "Classificação: Diabetes";
  }
  
  
}

