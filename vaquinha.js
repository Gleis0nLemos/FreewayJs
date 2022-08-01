//Variáveis da Vaquinha
let yVaquinha = 366;
let xVaquinha = 90;
let hit = false;
let pontuacao = 0;

//Funcionalidades da vaquinha
function mostraVaquinha(){
  image(imagemVaquinha, xVaquinha, yVaquinha, 26, 26);
}

function moveVaquinha(){
  if (keyIsDown(UP_ARROW)){
      yVaquinha -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeMover()){
      yVaquinha += 3;
    }
  }
}

function colisao(){
  for ( let i = 0; i < imagemCarros.length; i++){
    hit = collideRectCircle(xCar[i], yCar[i], carroComp, carroAltura, xVaquinha, yVaquinha, 15)
    if (hit){
      inicio();
      pontuacao = 0;
      somColisao.play()
    }
  }
}

function inicio(){
  yVaquinha = 366;
}

function marcador(){
  fill(0,0,205);
  textAlign(CENTER)
  textSize(25)
  text(pontuacao, width/5, 25);
}

function pontos(){
  if (yVaquinha < 15){
    pontuacao += 1;
    inicio();
    somPonto.play();
  }
}
  
function podeMover(){
  return yVaquinha < 366;
}
