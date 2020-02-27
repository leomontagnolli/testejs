function validateForm () {
    let email = document.getElementById("email").value;
    let tamanho = email.length;
    let valida = Boolean;
    valida = true;
    console.log(valida);

    if (tamanho < 1 ) {
        document.getElementById("alert-email").innerHTML = "Campo vazio";
        document.getElementById("alert-email").style.visibility = "visible";
    } else if (!email.includes("@")) {
        document.getElementById("alert-email").innerHTML = "Campo não contem @ ";
        document.getElementById("alert-email").style.visibility = "visible";
        
    }else if (!email.endsWith (".com") && !email.endsWith(".br") && !email.endsWith(".net")) {
        document.getElementById("alert-email").innerHTML = "Campo não contem .com .br .net";
        document.getElementById("alert-email").style.visibility = "visible";
    } else {
        document.getElementById("alert-email").style.visibility = "hidden";
        
    }
  
    
}