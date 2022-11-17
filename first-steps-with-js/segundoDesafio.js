let total = 0;
const distancia = 100;
const valorConsumo = 10;
const valorGasolina = 5.79;
const valorEtanol = 4.99;
const tipoCombustivel = 'Etanol';

if(tipoCombustivel === 'Gasolina'){
    total = (distancia/valorConsumo)*valorGasolina;
    console.log('O gasto com essa viagem com Gasolina vai ser '+total.toFixed(2)+' reais.');
}else{
    total = (distancia/valorConsumo)*valorEtanol;
    console.log('O gasto com essa viagem com Etanol vai ser '+total.toFixed(2)+' reais.');
}