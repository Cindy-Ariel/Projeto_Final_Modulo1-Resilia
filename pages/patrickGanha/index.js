var url =
  "file:///C:/Users/Dennis/Documents/GitHub/Projeto_Final_Modulo1-Resilia/pages/curiosidades/index.html";
var botao = document.getElementById("saibaMais");

function aoclicarbotao(url) {
  window.open(url);
}

botao.addEventListener("click", () => {
  aoclicarbotao(url);
});
