/**Faça um programa que preencha uma matriz 3x5 com numeros inteiros
 * calcule e mostre a qtd de numeros entre 15 e 20;
 */
function exe01(){
    var matriz = []
    insere(matriz)
    alert(`A quantidade de numeros entre 15 e 20 é ${verifica(matriz)}.`)   
}


function insere(matriz){
    for(var linha = 0; linha < 3;linha++){
        matriz[linha] = [];
        for(var coluna = 0; coluna < 5; coluna++){
            matriz[linha][coluna] = Number(prompt('Valor: '));
        }    
    } 
}
function verifica(matriz){
    var qtd = 0
    for(var linha = 0; linha < 3;linha++){
        for(var coluna = 0; coluna < 5; coluna++){
            matriz[linha][coluna] <= 20 && matriz[linha][coluna] >= 15 ? qtd++ : false;
            }
        }
    return qtd;
}
