/*Faça uma função que receba um valor positivo e inteiro e retorne a soma dos seus divisores*/
function somaDivisores(n){  //inclui 1 e ele mesmo
    let soma = 0
    for(let i = 1; i <= n; i++){
        n % i == 0 ? soma += i : false;
    }
    return soma;
}

console.log(`A soma dos divisores é: ${somaDivisores(25)}`)