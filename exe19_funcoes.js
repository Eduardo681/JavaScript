//Funcao que receba dois vetores e retorne a intersecção
function interseccao(vetor1, vetor2){
    v = []
    for(let i = 0; i < vetor1.length; i++){
        for(let x = 0; x < vetor2.length; x++){
            if(vetor1[i] === vetor2[x]){
                v.push(vetor1[i])
            }
        }
    }
    return v;
}
let v1 = [1,2,3,4,5]
let v2 = [5,6,7,8,1]
console.log(`A intersecção é ${interseccao(v1,v2)}.`)