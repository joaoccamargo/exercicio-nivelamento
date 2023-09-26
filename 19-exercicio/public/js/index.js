let salario = document.getElementById('salario')
let resultado = document.getElementById('resultado')

let aumentoSalarial = () => {
  let salarioInformado = parseFloat(salario.value)
  
  if (salarioInformado <= 999.0) {
    let aumentodevinte = 20;
    let novoSalario = salarioInformado + salarioInformado * (aumentodevinte / 100);
    let aumento = novoSalario % salarioInformado;

    resultado.innerHTML = `Novo salário = R$ ${novoSalario.toFixed(2)}<br>
                            Aumento = R$ ${aumento.toFixed(2)}<br>
                            Porcentagem = ${aumentodevinte} %`
  } else if (salarioInformado >= 1000.0 && salarioInformado <= 2999.0) {
    let aumentodequinze = 15;
    let novoSalario = salarioInformado + salarioInformado * (aumentodequinze / 100);
    let aumento = novoSalario % salarioInformado;

    resultado.innerHTML = `Novo salário = R$ ${novoSalario.toFixed(2)}<br>
                            Aumento = R$ ${aumento.toFixed(2)}<br>
                            Porcentagem = ${aumentodequinze} %`;

  } else if (salarioInformado >= 3000.0 && salarioInformado <= 7999.0) {
    let aumentodedez = 10;
    let novoSalario = salarioInformado + salarioInformado * (aumentodedez / 100);
    let aumento = novoSalario % salarioInformado;

    resultado.innerHTML = `Novo salário = R$ ${novoSalario.toFixed(2)}<br>
                            Aumento = R$ ${aumento.toFixed(2)}<br>
                            Porcentagem = ${aumentodedez} %`;
  } else {
    let aumentodecinco = 5;
    let novoSalario = salarioInformado + salarioInformado * (aumentodecinco / 100);
    let aumento = novoSalario % salarioInformado;
    
    resultado.innerHTML = `Novo salário = R$ ${novoSalario.toFixed(2)}<br>
                            Aumento = R$ ${aumento.toFixed(2)}<br>
                            Porcentagem = ${aumentodecinco} %`;
  }

}