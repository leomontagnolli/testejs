document.getElementById("number").addEventListener("keypress", function (event){
    if (event.key == "Enter") {
       let valorDigitado = document.querySelector("input").value;
       document.write("O Valor digitado foi " + valorDigitado);
    }else if (event.code == "Space") {
        alert("Tecla Invalida");

    }



})