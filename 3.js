let name = "madam";
let nameInverso = name.split("").reverse("").join("");

if (nameInverso == name) {
    console.log("é Palindromo");
} else {
    console.log("não é");
}