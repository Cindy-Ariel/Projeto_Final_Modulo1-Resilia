var url =
  "file:///C:/Users/Dennis/Documents/GitHub/Projeto_Final_Modulo1-Resilia/pages/pag2/index.html";
var botao = document.getElementById("comecar");

function aoclicarbotao(url) {
  window.open(url);
}

botao.addEventListener("click", () => {
  aoclicarbotao(url);
});
