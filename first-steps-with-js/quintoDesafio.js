let valorProduto = 90;
let valorPago = 0;
let tipoPagamento = 'Dinheiro/PIX';

switch(tipoPagamento){
    case 'Debito':
        valorPago = valorProduto - valorProduto * 0.10;
    break;
    case 'Dinheiro/PIX':
        valorPago = valorProduto - valorProduto * 0.15;
    break;
    case '2x':
        valorPago = valorProduto;
    break
    default:
        valorPago = valorProduto * 1.10;
}

console.log('Valor do Final Conforme a Opcao de Pagamento: '+valorPago.toFixed(2));
