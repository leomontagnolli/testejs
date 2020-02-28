// combinações com string

let nome = "leonardo"
let nomeS = nome.split("");
let aux=7;
let aux2=2;

for (let i =0; i < 7; i++) {
    aux--;
    console.log(nomeS[i] + nomeS[aux])
}