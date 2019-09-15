//Faça uma funcao que mostre os primeiros dez numeros primos apos o 100
function primos() {
    let vet = []
    n = 100
    while(vet.length < 10){
        let div = []
        for(let i = 1; i <= n; i++){
            if(n % i == 0){
                div.push(i)
            }
        }
        if(div.length == 2){
            vet.push(n)
        }
        n++; 
    }
    return vet
}
console.log(`Os dez numeros primos após o cem são: ${primos()}.`)
