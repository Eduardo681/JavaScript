//Funcao que receba dois vetores e retorne a intersecção
function interseccao(vetor1, vetor2){
    v = []
    vetor1.forEach(item1 => {
        vetor2.forEach(item2 =>{
            item1 == item2 ? v.push(item1) : false
        })
    })
    return v;
}
let v1 = [1,2,8,4,5]
let v2 = [5,6,7,8,1]
console.log(`A intersecção é ${interseccao(v1,v2)}.`)