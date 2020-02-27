document.getElementById("img").addEventListener("mouseover", () => {
   document.getElementById("img").src = "./img/lampada-acesa.jpg";
});
document.getElementById("img").addEventListener("mouseout", () => {
    document.getElementById("img").src = "./img/lampada-apagada.jpg";
});
document.getElementById("img").addEventListener("click", () => {
    document.getElementById("img").src = "./img/lampada-quebrada.jpg";
    document.getElementById("img").id = "is";
})
