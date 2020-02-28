// Função oneLetterToUpperCase

function oneLetterToUpperCase (text) {
    let tudoMinusculo = text.toLowerCase();
    let palavras = tudoMinusculo.split(" ");
    for (let i = 0; i < palavras.length; i++) {
        let w = palavras[i];

        let firstLetter = w[0];
        w = firstLetter.toUpperCase() + w.slice(1);

        palavras[i] = w;
    }
     return palavras.join(" ");
     
}

console.log (oneLetterToUpperCase("leonardo a leonardo martins"));
