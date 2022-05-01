var urlPaginaBob =
  "file:///C:/Users/Dennis/Documents/GitHub/Projeto_Final_Modulo1-Resilia/pages/bobganha/index.html";

var urlPaginaPatrick =
  "file:///C:/Users/Dennis/Documents/GitHub/Projeto_Final_Modulo1-Resilia/pages/patrickGanha/index.html";

var urlPaginaLula = "";
var urlTodosGanham = "";

var bobPontos = 0;
var patrickPontos = 0;
var lulaPontos = 0;

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
      // window.open(urlPaginaLula);
      break;
  }
}

//Foi criado uma função para cada pergunta nela se o usuario digitar o
//numero 1 ou 2 será somado pontos a variavel correspondente a personalidade
//do personagem.
function fazerNonaPergunta() {
  var resposta = prompt(
    "Você é uma pessoa reservada prefere está sozinho(a)? \n 1-Sim, \n 2-Não"
  );

  if (resposta === "1") {
    bobPontos = bobPontos + 0;
    patrickPontos = patrickPontos + 1;
    lulaPontos = lulaPontos + 3;
    calcResultERedirecionar();
  } else if (resposta === "2") {
    bobPontos = bobPontos + 3;
    patrickPontos = patrickPontos + 2;
    lulaPontos = lulaPontos + 0;
    calcResultERedirecionar();
  } else {
    alert("Você não digitou um numero valido");
  }
}

function fazerOitavaPergunta() {
  var resposta = prompt(
    "Está sempre fazendo os outros rirem? \n 1-Sim, \n 2-Não"
  );

  if (resposta === "1") {
    bobPontos = bobPontos + 3;
    patrickPontos = patrickPontos + 3;
    lulaPontos = lulaPontos + 0;
    fazerNonaPergunta();
  } else if (resposta === "2") {
    bobPontos = bobPontos + 0;
    patrickPontos = patrickPontos + 0;
    lulaPontos = lulaPontos + 3;
    fazerNonaPergunta();
  } else {
    alert("Você não digitou um numero valido");
  }
}

function fazerSetimaPergunta() {
  var resposta = prompt(
    "Você faz as coisas buscando a perfeição? \n 1-Sim, \n 2-Não"
  );

  if (resposta === "1") {
    bobPontos = bobPontos + 3;
    patrickPontos = patrickPontos + 0;
    lulaPontos = lulaPontos + 3;
    fazerOitavaPergunta();
  } else if (resposta === "2") {
    bobPontos = bobPontos + 0;
    patrickPontos = patrickPontos + 3;
    lulaPontos = lulaPontos + 0;
    fazerOitavaPergunta();
  } else {
    alert("Você não digitou um numero valido");
  }
}

function fazerSextaPergunta() {
  var resposta = prompt(
    "Você gosta te tocar um instrumento nas horas vagas. \n 1-Sim, \n 2-Não"
  );

  if (resposta === "1") {
    bobPontos = bobPontos + 0;
    patrickPontos = patrickPontos + 0;
    lulaPontos = lulaPontos + 3;
    fazerSetimaPergunta();
  } else if (resposta === "2") {
    bobPontos = bobPontos + 3;
    patrickPontos = patrickPontos + 3;
    lulaPontos = lulaPontos + 0;
    fazerSetimaPergunta();
  } else {
    alert("Você não digitou um numero valido");
  }
}

function fazerQuintaPergunta() {
  var resposta = prompt(
    "Você nunca fica parado em um emprego está sempre trocando? \n 1-Sim, \n 2-Não"
  );

  if (resposta === "1") {
    bobPontos = bobPontos + 0;
    patrickPontos = patrickPontos + 3;
    lulaPontos = lulaPontos + 0;
    fazerSextaPergunta();
  } else if (resposta === "2") {
    bobPontos = bobPontos + 3;
    patrickPontos = patrickPontos + 0;
    lulaPontos = lulaPontos + 3;
    fazerSextaPergunta();
  } else {
    alert("Você não digitou um numero valido");
  }
}

function fazerQuartaPergunta() {
  var resposta = prompt(
    "Sua felicidade as vezes incomoda os outros? \n 1-Sim, \n 2-Não"
  );

  if (resposta === "1") {
    bobPontos = bobPontos + 3;
    patrickPontos = patrickPontos + 2;
    lulaPontos = lulaPontos + 0;
    fazerQuintaPergunta();
  } else if (resposta === "2") {
    bobPontos = bobPontos + 0;
    patrickPontos = patrickPontos + 1;
    lulaPontos = lulaPontos + 3;
    fazerQuintaPergunta();
  } else {
    alert("Você não digitou um numero valido");
  }
}

function fazerTerceiraPergunta() {
  var resposta = prompt(
    "Você tem dificuldade de interação social e medo do julgamento das outras pessoas? \n 1-Sim, \n 2-Não"
  );

  if (resposta === "1") {
    bobPontos = bobPontos + 0;
    patrickPontos = patrickPontos + 0;
    lulaPontos = lulaPontos + 3;
    fazerQuartaPergunta();
  } else if (resposta === "2") {
    bobPontos = bobPontos + 3;
    patrickPontos = patrickPontos + 3;
    lulaPontos = lulaPontos + 0;
    fazerQuartaPergunta();
  } else {
    alert("Você não digitou um numero valido");
  }
}

function fazerSegundaPergunta() {
  var resposta = prompt(
    "Você tem problema em realizar tarefas simples diárias ? \n 1-Sim, \n 2-Não"
  );

  if (resposta === "1") {
    bobPontos = bobPontos + 1;
    patrickPontos = patrickPontos + 3;
    lulaPontos = lulaPontos + 0;
    fazerTerceiraPergunta();
  } else if (resposta === "2") {
    bobPontos = bobPontos + 2;
    patrickPontos = patrickPontos + 0;
    lulaPontos = lulaPontos + 3;
    fazerTerceiraPergunta();
  } else {
    alert("Você não digitou um numero valido");
  }
}

function fazerPrimeiraPergunta() {
  var resposta = prompt(
    "Você faz as coisas buscando a perfeição? \n 1-Sim, \n 2-Não"
  );

  if (resposta === "1") {
    bobPontos = bobPontos + 3;
    patrickPontos = patrickPontos + 2;
    lulaPontos = lulaPontos + 0;
    fazerSegundaPergunta();
  } else if (resposta === "2") {
    bobPontos = bobPontos + 0;
    patrickPontos = patrickPontos + 1;
    lulaPontos = lulaPontos + 3;
    fazerSegundaPergunta();
  } else {
    alert("Você não digitou um numero valido");
  }
}
//Ao carregar a página a pergunta será mostrada.
window.addEventListener("load", () => {
  fazerPrimeiraPergunta();
});
