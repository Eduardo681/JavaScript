// Classe Pilha;
class Pilha {
    constructor(vet) {
        this.vet = vet;
    }
    entra(x) {
        this.vet.length == undefined ? this.vet[0] = x : this.vet[this.vet.length] = x;
    }
    sai() {
        let vet = [];
        for (let x = 0; x < this.vet.length - 1; x++) {
            vet.length == undefined ? vet[0] = this.vet[x] : vet[vet.length] = this.vet[x];
        }
        this.vet = vet;
    }
}

//Teste da classe Pilha
let x = [1, 2, 3, 4, 5]
let vetor = new Pilha(x);

vetor.entra(9)
vetor.entra(66)
vetor.entra(99)
vetor.sai()
vetor.sai()
console.log(vetor)

//Classe Fila
class Fila{
    constructor(vet){
        this.vet = vet;
    }
    entra(x){
        this.vet.length == undefined ? this.vet[0] = x : this.vet[this.vet.length] = x;
    }
    sai() {
        let vet = [];
        for (let x = 1; x < this.vet.length; x++) {
            vet.length == undefined ? vet[0] = this.vet[x] : vet[vet.length] = this.vet[x];
        }
        this.vet = vet;
    }
}
//Teste da classe Fila
let y = [1, 2, 3, 4, 5]
let vetor1 = new Fila(y);

vetor1.entra(9)
vetor1.entra(66)
vetor1.entra(99)
vetor1.sai()
vetor1.sai()
console.log(vetor1)