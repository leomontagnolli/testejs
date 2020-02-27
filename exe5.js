document.getElementById("btn").addEventListener("click", () => {
    let graus = document.getElementById("n1").value;
    let faren = graus * 1.8 +32;
    
    
    document.write(graus + " Convertido para Farenheit é " + faren);
})