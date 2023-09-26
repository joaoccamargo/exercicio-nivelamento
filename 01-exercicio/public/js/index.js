var largura_terreno = document.getElementById("largura_terreno");
var comprimento_terreno = document.getElementById("comprimento_terreno");
var valor_metro_quadrado = document.getElementById("valor_metroq");
var resultado_calculo = document.getElementById("resultado_calculo");


function calcularArea(){
    let largura = largura_terreno.value;
    let comprimento = comprimento_terreno.value;
    let area = (comprimento * largura);
    let preco = (valor_metro_quadrado.value * area);


    resultado_calculo.innerText = `Área do terreno = ${area.toFixed(2)} \n 
                                   Preço do terreno = ${preco.toFixed(2)}`;
}