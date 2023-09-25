var base_retangulo = document.getElementById("base_retangulo");
var altura_retangulo = document.getElementById("altura_retangulo");

function calcularArea(base, altura){
    base = parseFloat(base_retangulo.value);
    altura = parseFloat(altura_retangulo.value);
    let area = base * altura;
    let perimetro = 2 * (base + altura);
    let diagonal = Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2));

    resultado_calculo.innerText = `ÁREA = ${area.toFixed(4)} \n 
                                   Perímetro = ${perimetro.toFixed(4)} \n
                                   Diagonal = ${diagonal.toFixed(4)}`;
}