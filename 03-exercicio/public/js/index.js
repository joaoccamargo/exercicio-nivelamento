var nome_um = document.getElementById("nome1")
var nome_dois = document.getElementById("nome2");
var idade_um = document.getElementById("idade1");
var idade_dois = document.getElementById("idade2");




function calcularMedia(idade, outraidade){
    idade = parseFloat(idade_um.value);
    outraidade = parseFloat(idade_dois.value);
    let calculomedia = (idade + outraidade) / 2;
    resultado.innerText = `A idade média de ${nome_um.value} e ${nome_dois.value} é de ${calculomedia} anos`;
}