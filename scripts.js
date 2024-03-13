var botao = document.getElementById("botao");
botao.addEventListener("click", alertar,false);

function alertar(event){
    alert("Voce clicou no botao!!!" + event);

    var nuemro = 7;
    var resultado = numero % 2;
    if(resultado == 0){
        alert("este numero é par!");
    }
}