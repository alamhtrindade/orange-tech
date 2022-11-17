function retornaDesconto(tipoPagamento){
    
    let desc = 0;

    switch(tipoPagamento){
        case 'Debito':
            desc = 0.10;
        break;
        case 'Dinheiro/PIX':
            desc = 0.15;
        break;
        case '2x':
            desc = 1;
        break
        default:
            desc = 1.10;
    }
    return desc;
}

function concedeDesconto(valorProduto, tipoPagamento){
    
    let desconto = retornaDesconto(tipoPagamento);
    let valorPago = 0;

    if( desconto >=1 ){
        valorPago = valorProduto * desconto;
    }else{
        valorPago = valorProduto - (valorProduto * desconto);
    }
     

    return valorPago;
}


function main(){
    let valorPago = concedeDesconto(90,'5x');
    console.log('Valor do Final Conforme a Opcao de Pagamento: '+valorPago.toFixed(2));
};

main();




