const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".resultado-1");
const textoResultado = document.querySelector(".textoResultado");
const botao1 = document.querySelector(".caixa-alternativas .botao_1");
const botao2 = document.querySelector(".caixa-alternativas .botao_2");

console.log(botao1);

/*Interceptar o click do botão*/

botao1.addEventListener("click", function(){
    console.dir(caixaResultado); /*Mostra o elemento html em formato de objeto*/
    caixaResultado.classList.add("mostrar-caixa-resultado");
    
})




