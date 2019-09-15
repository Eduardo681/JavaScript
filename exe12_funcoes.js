//Faça uma funcao para elevar um numero ao quadrado sem utilizar de funcoes/operadores para tal
function elevar(x,z){
    t = 1;
    for(let i = 1; i <= z;i++){
        t *= x
    }
    return t
}

console.log(elevar(3,4))