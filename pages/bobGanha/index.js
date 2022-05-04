var url =
  "https://cindy-ariel.github.io/Projeto_Final_Modulo1-Resilia/pages/curiosidades/index.html";

var botao = document.getElementById("saibaMais");

function aoclicarbotao(url) {
  window.open(url);
}

botao.addEventListener("click", () => {
  aoclicarbotao(url);
});
