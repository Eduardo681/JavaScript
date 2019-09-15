/*Faça uma funcao que leia um numero indeterminado de valores e retorne a media */
let b = document.querySelector('#exe07')
b.addEventListener('click',media)
function media(){
    let contador = 0, soma = 0;
    let n = 1;
    let media = 0;
    n = Number(prompt("Digite um número: "))
    while (n >= 0){
        soma = soma + n;
        contador++;
        n = Number(prompt("Digite um número(negativo sai): "))
    }
    media = soma/contador
    return alert(`A media será ${media}.`);
}