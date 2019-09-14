/*Faça uma função para receber tres numeros inteiros como parametro - representando h,min,seg e converta tudo para segundos. */
function converteSegundos(h,m,s){
    let t = s
    t += (h*60*60)+(m*60)
    return t;
}
console.log(`Convertendo tudo para segundos temos ${converteSegundos(2,40,10)} segundos.`)