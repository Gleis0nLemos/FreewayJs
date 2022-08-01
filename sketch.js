function setup() {
  createCanvas(500, 400);
  somTrilha.loop()
}

function draw() {
  background(imagemEstrada);
  mostraVaquinha();
  mostraCarro();
  velocidadeCarros();
  loopCarros();
  moveVaquinha();
  marcador();
  pontos();
  colisao();
}




function pontos(){
  if (yVaquinha < 1.5){
    pontuacao += 1;
  }
}
