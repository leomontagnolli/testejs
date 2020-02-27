document.getElementById("btn").addEventListener("click" , () => {
    let raio = document.getElementById("n1").value;
    let pi = Math.PI;
    let area = pi* Math.pow(raio,2);
    document.write("A área do circulo com raio de "+ raio + " é " + area.toFixed(2));
})