/*Faça uma funcao que receba o raio como parametro e retorne o volume*/
function calculaVolume(raio){
    const pi = Math.PI
    let volume = (4* pi * Math.pow(raio,3))/3
    return volume;
} 

console.log(calculaVolume(1).toFixed(2))