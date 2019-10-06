/**
 * Preencha uma matriz 2x4
 * calcule a qtd de numeros de 12 ate 20 em cada linha
 * a media dos pares
 */
function exe02(){
    matriz = [];
    insere(matriz);
    verifica(matriz);
    alert(`A média dos elementos pares é de ${pares(matriz).toFixed(2)}..`);
}
function insere(matriz){
    for(var linha = 0; linha < 2;linha++){
        matriz[linha] = [];
        for(var coluna = 0; coluna < 4; coluna++){
            matriz[linha][coluna] = Number(prompt('Valor: '));
        }    
    } 
}
function verifica(matriz){
    for(var linha = 0; linha < 2;linha++){
        var qtd = 0
        for(var coluna = 0; coluna < 4; coluna++){
            matriz[linha][coluna] <= 20 && matriz[linha][coluna] >= 12 ? qtd++ : false;
            }
        alert(`A quantidade de 12 até 20 na linha ${linha} é ${qtd}.`)
        }
}
function pares(matriz){
    var soma = 0,qtd = 0;
    for(var linha = 0; linha < 2;linha++){
        for(var coluna = 0; coluna < 4; coluna++){
            matriz[linha][coluna] % 2 == 0 ? soma+=matriz[linha][coluna] : false;
            matriz[linha][coluna] % 2 == 0 ? qtd++ : false;
            }
        }
    return soma/qtd || 0;
}