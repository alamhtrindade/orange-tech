let total = 0;

const valorCombustivel = 5.79;
const valorConsumo = 10;
const distancia = 100;

total = (distancia/valorConsumo)*valorCombustivel;

console.log('O gasto com essa viagem vai ser '+total.toFixed(2)+' reais.');
