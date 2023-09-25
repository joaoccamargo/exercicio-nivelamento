let raio = document.getElementById('raio');
let area = document.getElementById('area');

let calcular = () =>{
    let valorraio = parseFloat(raio.value);
    let calculado = Math.PI * Math.pow(valorraio, 2);
    area.innerHTML = `ÁREA = ${calculado.toFixed(3)}`;
}