var botao = document.getElementById("botao");
botao.addEventListener("click", alertar,false);

    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var saida = document.getElementById("saida-de-dados");
    var email = document.getElementById("cep");

function alertar(event){
   // alert("Voce clicou no botao!!!" + "" + nome.value);

   // var nuemro = 7;
   // var resultado = numero % 2;
   // if(resultado == 0){
   //     alert("este numero é par!");
  //  }
    saida.innerText = 
    "nome: " + nome.value + 
    "\n Email: " + email.value +
    "\n cep:" + cep.value +
    "\n telefone:" + telefone.value + 
    "\n Complemento:" + complemento.value +
    "\n Bairro:" +  bairro.value +  
    "\n Cidade:" + Cidade.value; +  
    "\n Estado:"+ Estado.value
}