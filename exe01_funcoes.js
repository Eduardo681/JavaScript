//Faça uma função que receba um numero inteiro positivo N como parametro e retorne a soma dos n numeros inteiros existentes entre o numero 1 e esse numero.
function somaAnteriores(n){
    let t = 0
    for(let i = 2; i < n;i++){
        t += i
    }
    return t;
}
console.log(`A soma dos numeros entre 1 e o numero é: ${somaAnteriores(5)}.`)