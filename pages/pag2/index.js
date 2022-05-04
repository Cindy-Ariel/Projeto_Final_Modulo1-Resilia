var urlPaginaBob =
  "file:///C:/Users/Dennis/Documents/GitHub/Projeto_Final_Modulo1-Resilia/pages/bobganha/index.html";

var urlPaginaPatrick =
  "file:///C:/Users/Dennis/Documents/GitHub/Projeto_Final_Modulo1-Resilia/pages/patrickGanha/index.html";

var urlPaginaLula =
  "file:///C:/Users/Dennis/Documents/GitHub/Projeto_Final_Modulo1-Resilia/pages/lulaGanha/index.html";

var urlTodosGanham =
  "file:///C:/Users/Dennis/Documents/GitHub/Projeto_Final_Modulo1-Resilia/pages/todosGanham/index.html";

var bobPontos = 0;
var patrickPontos = 0;
var lulaPontos = 0;

const perguntas = [
  {
    pergunta: "Você faz as coisas buscando a perfeição? \n 1-Sim, \n 2-Não",
    respondeuSim: { lulaPontos: 3, bobPontos: 2, patrickPontos: 0 },
    respondeuNao: { lulaPontos: 0, bobPontos: 1, patrickPontos: 3 },
  },
  {
    pergunta:
      " Você tem problema em realizar tarefas simples diárias ? \n 1-Sim, \n 2-Não",
    respondeuSim: { lulaPontos: 0, bobPontos: 1, patrickPontos: 3 },
    respondeuNao: { lulaPontos: 2, bobPontos: 0, patrickPontos: 3 },
  },
  {
    pergunta:
      "Você tem dificuldade de interação social e medo do julgamento das outras pessoas? \n 1-Sim, \n 2-Não",
    respondeuSim: { lulaPontos: 0, bobPontos: 0, patrickPontos: 3 },
    respondeuNao: { lulaPontos: 3, bobPontos: 3, patrickPontos: 0 },
  },
  {
    pergunta: " Sua felicidade as vezes incomoda os outros? \n 1-Sim, \n 2-Não",
    respondeuSim: { lulaPontos: 0, bobPontos: 3, patrickPontos: 2 },
    respondeuNao: { lulaPontos: 3, bobPontos: 0, patrickPontos: 1 },
  },
  {
    pergunta:
      " Você nunca fica parado em um emprego está sempre trocando? \n 1-Sim, \n 2-Não",
    respondeuSim: { bobPontos: 0, patrickPontos: 3, lulaPontos: 0 },
    respondeuNao: { bobPontos: 3, patrickPontos: 0, lulaPontos: 3 },
  },

  {
    pergunta:
      " Você gosta te tocar um instrumento nas horas vagas?  \n 1-Sim, \n 2-Não",
    respondeuSim: { bobPontos: 0, patrickPontos: 0, lulaPontos: 3 },
    respondeuNao: { bobPontos: 3, patrickPontos: 3, lulaPontos: 0 },
  },

  {
    pergunta: "Você faz as coisas buscando a perfeição? \n 1-Sim, \n 2-Não",
    respondeuSim: { bobPontos: 3, patrickPontos: 0, lulaPontos: 3 },
    respondeuNao: { bobPontos: 0, patrickPontos: 3, lulaPontos: 0 },
  },

  {
    pergunta: " Está sempre fazendo os outros rirem? \n 1-Sim, \n 2-Não",
    respondeuSim: { bobPontos: 3, patrickPontos: 3, lulaPontos: 0 },
    respondeuNao: { bobPontos: 0, patrickPontos: 0, lulaPontos: 3 },
  },

  {
    pergunta:
      " Você é uma pessoa reservada prefere está sozinho(a)?\n 1-Sim, \n 2-Não",
    respondeuSim: { bobPontos: 0, patrickPontos: 1, lulaPontos: 3 },
    respondeuNao: { bobPontos: 3, patrickPontos: 2, lulaPontos: 0 },
  },
];

//Utilizando um array para agrupar todos os pontos e usando  função para
//pegar a maior pontuação.
//O switch está pegando a maior pontuação e comparando as variaveis para
//saber de quem é o ganhador para direcionar a pagina do personagem.

function calcResultERedirecionar() {
  var pontuacoesFinais = [bobPontos, patrickPontos, lulaPontos];
  var pontuacaoGanhador = Math.max(...pontuacoesFinais);

  switch (pontuacaoGanhador) {
    case bobPontos:
      window.open(urlPaginaBob);
      break;
    case patrickPontos:
      window.open(urlPaginaPatrick);
      break;
    case lulaPontos:
      window.open(urlPaginaLula);
      break;
    case (lulaPontos && bobPontos) ||
      (bobPontos && patrickPontos) ||
      (lulaPontos && patrickPontos):
      window.open(urlTodosGanham);
      break;
  }
}

function fazerPergunta(pergunta, respondeuNao, respondeuSim, contador) {
  var resposta = prompt(pergunta);
  if (resposta === "1") {
    bobPontos = respondeuSim.bobPontos;
    patrickPontos = respondeuSim.patrickPontos;
    lulaPontos = respondeuSim.lulaPontos;
    if (contador === perguntas.length) {
      calcResultERedirecionar();
    }
  } else if (resposta === "2") {
    bobPontos = respondeuNao.bobPontos;
    patrickPontos = respondeuNao.patrickPontos;
    lulaPontos = respondeuNao.lulaPontos;
    if (contador === perguntas.length) {
      calcResultERedirecionar();
    }
  } else {
    alert("Você não digitou um numero valido");
  }
  console.log(contador);
  console.log(perguntas.length);
}

//Ao carregar a página a pergunta será mostrada.
window.addEventListener("load", () => {
  for (var contador = 0; contador <= perguntas.length; contador++) {
    fazerPergunta(
      perguntas[contador].pergunta,
      perguntas[contador].respondeuNao,
      perguntas[contador].respondeuSim,
      contador + 1
    );
  }
});
