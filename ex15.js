const primeiroNome = "Mario";
const sobrenome = "";
const apelido = "Bros";

if (sobrenome == "" && apelido == "") {
    console.log(primeiroNome)
} else if (sobrenome == "") {
    console.log(primeiroNome + " " + apelido);
} else if (apelido == "") {
    console.log(primeiroNome + " " + sobrenome);
} else {
    console.log("inválido")
}