let primeira_nota = document.getElementById("primeira_nota");
let segunda_nota = document.getElementById("segunda_nota");

let resultado = document.getElementById("resultado");

let calcularNota = () => {
  let nota_um = parseFloat(primeira_nota.value);
  let nota_dois = parseFloat(segunda_nota.value);
  let calculo_nota = nota_um + nota_dois;

  if (calculo_nota >= 60.0) {
    resultado.innerHTML = ` NOTA FINAL = ${calculo_nota.toFixed(1)}`;
    resultado.innerHTML += `<p style="color:green;">APROVADO</p>`;
    alert('Aluno Aprovado!');
  } else {
    resultado.innerHTML = ` NOTA FINAL = ${calculo_nota.toFixed(1)}`;
    resultado.innerHTML += `<p style="color:red;">REPROVADO</p>`;
    alert("Aluno Reprovado!");
  }

}