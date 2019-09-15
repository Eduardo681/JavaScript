//Faça uma função que receba por parametro, um valor inteiro positivo N e retorne o valor de S, (n**2+1)/n+3
function exe11(n){
    let soma = 0
    for(let i = 1; i <= n;i++){
        soma += (Math.pow(i,2)+1)/(i+3)
    }
    return soma;
}

console.log(exe11(2).toFixed(2))