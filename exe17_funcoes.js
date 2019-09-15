//Função que recebe vetor como parametro e substitui os negativos por 0;
function negativos(vetor){
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] < 0){
            vetor[i] = 0
        }
    }
    return vetor;
}
let v = [-1,2,-3,55,-5]
console.log(negativos(v))