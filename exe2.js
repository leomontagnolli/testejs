document.getElementById("n1").addEventListener("keypress", function(event) {
    if (event.key == "Enter") {

    let metros = document.querySelector("input").value;
    let centimetros = metros * 100;

    document.write("O Valor convertido para centimetros é " + centimetros + " cm");
}
})