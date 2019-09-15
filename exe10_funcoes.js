//Faça uma função que receba n como parametro e retorne o somatorio de s = 1+1/2+1/3+1/4+1/n
function exe10(n){
    let soma = 0
    for(let i = 1; i <= n;i++){
        soma += 1/i
    }
    return soma;
}

console.log(exe10(3))