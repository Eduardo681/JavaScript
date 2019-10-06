/**
 * preencha uma matriz 6x3
 * maior e menor e suas posições
 */

function exe03(){
    matriz = [];
    insere(matriz);
    maior(matriz);
    menor(matriz);
}

function insere(matriz){
    for(var linha = 0; linha < 6;linha++){
        matriz[linha] = [];
        for(var coluna = 0; coluna < 3; coluna++){
            matriz[linha][coluna] = Number(prompt('Valor: '));
        }    
    } 
}
function maior(matriz){
    var maior = matriz[0][0];
    var linhaMaior = 0, colunaMaior = 0;
    for(var linha = 0; linha < 6;linha++){
        for(var coluna = 0; coluna < 3; coluna++){
            if (matriz[linha][coluna] > maior){
                maior = matriz[linha][coluna]
                linhaMaior = linha
                colunaMaior = coluna
            }
        }
    }
    alert(`O maior elemento é ${maior} na linha ${linhaMaior} e coluna ${colunaMaior}.`)
}
function menor(matriz){
    var menor = matriz[0][0];
    var linhaMenor = 0, colunaMenor = 0;
    for(var linha = 0; linha < 6;linha++){
        for(var coluna = 0; coluna < 3; coluna++){
            if (matriz[linha][coluna] < menor){
                menor = matriz[linha][coluna]
                linhaMenor = linha
                colunaMenor = coluna
            }
        }
    }
    alert(`O menor elemento é ${menor} na linha ${linhaMenor} e coluna ${colunaMenor}.`)
}