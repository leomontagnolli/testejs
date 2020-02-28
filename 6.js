// maior palavra dentro da string
function maiorPalavra() {
    let palavra = document.getElementById("texto").value.split(" ");
    let palavraMaior = "";
    for (let i = 0; i < palavra.length; i++) {
       
        if (palavra[i].length > palavraMaior.length){
        palavraMaior = palavra[i];
     }
    }
    document.write(palavraMaior);
}
document.getElementById("btn").addEventListener('click', () => {
    maiorPalavra();
})
