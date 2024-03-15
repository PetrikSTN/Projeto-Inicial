var botao = document.getElementById("botao");
botao.addEventListener("click", alertar,false);
var nome = document.getElementById("nome")

function alertar(event){
    alert("Voce clicou no botao!!!" + "" + nome.value);

    var nuemro = 7;
    var resultado = numero % 2;
    if(resultado == 0){
        alert("este numero é par!");
    }
}