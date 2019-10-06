/**
 * Preencha uma matriz 12x4, 12 meses - 4 semanas
 * mostrar total mensal
 * mostrar total semanal ??
 * total;
 */

function exe05(){
    matriz = [];
    insere(matriz);
    totalMensal(matriz);
    totalSemana(matriz);
    alert(`O total vendido no ano foi de R$ ${total(matriz).toFixed(2)}.`)
}

function insere(matriz){
    for(var linha = 0; linha < 12;linha++){
        matriz[linha] = [];
        for(var coluna = 0; coluna < 4; coluna++){
            matriz[linha][coluna] = Number(prompt(`Valor vendido no mês ${linha+1} e semana ${coluna+1}: R$`));
        }    
    } 
}
function totalMensal(matriz){
    const mes = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']
    for(var linha = 0; linha < 12;linha++){
        var soma = 0;
        for(var coluna = 0; coluna < 4; coluna++){
            soma += matriz[linha][coluna]
        }
        alert(`Em ${mes[linha]} o total das vendas foram R$${soma.toFixed(2)}.`)
    }
}
function totalSemana(matriz){
    var semana1 = 0 , semana2 = 0, semana3 = 0, semana4 = 0;
    for(var linha = 0; linha < 12;linha++){
        for(var coluna = 0; coluna < 4; coluna++){
            coluna == 0 ? semana1 += matriz[linha][coluna] : false;
            coluna == 1 ? semana2 += matriz[linha][coluna] : false;
            coluna == 2 ? semana3 += matriz[linha][coluna] : false;
            coluna == 3 ? semana4 += matriz[linha][coluna] : false;
        }
    }
    alert(`Somando a primeira semana de cada mês temos R$ ${semana1.toFixed(2)},
Somando a segunda semana de cada mês temos R$ ${semana2.toFixed(2)},
Somando a terceira semana de cada mês temos R$ ${semana3.toFixed(2)},
Somando a quarta semana de cada mês temos R$ ${semana4.toFixed(2)}.`)
}
function total(matriz){
    var total = 0;
    for(var linha = 0; linha < 12;linha++){
        for(var coluna = 0; coluna < 4; coluna++){
            total += matriz[linha][coluna];
        }
    }
    return total;
}