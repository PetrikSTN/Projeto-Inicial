var botao = document.getElementById("botao");
botao.addEventListener("click", alertar,false);

    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var saida = document.getElementById("saida-de-dados");
    var cep = document.getElementById("cep");
    var telefone = document.getElementById("telefone");
    var complemento = document.getElementById("complemento");
    var logradouro = document.getElementById("logradouro");
    var bairro = document.getElementById("bairro");
    var cidade = document.getElementById("cidade");
    var estado = document.getElementById("estado");




function alertar(event){
   // alert("Voce clicou no botao!!!" + "" + nome.value);

   // var nuemro = 7;
   // var resultado = numero % 2;
   // if(resultado == 0){
   //     alert("este numero é par!");
  //  }

  const url = `https://viacep.com.br/ws/${cep.value}/json`;

  fetch(url)
  .then(resposta=> {
return resposta.json();
  }
  )
  .then(dadosDoEndereco=>{
    logradouro.value = dadosDoEndereco.logradouro;
    bairro.value = dadosDoEndereco.bairro;
    cidade.value = dadosDoEndereco.localidade;
    estado.value = dadosDoEndereco.uf;
    complemento.value = dadosDoEndereco.complemento;
  })
  .catch(function(e){
    alert(e.message());
  })

    saida.innerText = 
    "nome: " + nome.value + 
    "\n Email: " + email.value +
    "\n cep:" + cep.value +
    "\n telefone:" + telefone.value + 
    "\n Complemento:" + complemento.value +
    "\n logradouro" + logradouro.value +
    "\n Bairro:" +  bairro.value +  
    "\n Cidade:" + cidade.value +  
    "\n Estado:"+ estado.value;
}