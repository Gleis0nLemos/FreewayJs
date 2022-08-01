let xCar = [600, 600, 600, 600, 600, 600];
let yCar = [45, 100, 155, 215, 268, 325];
let velocidade = [2.5, 3.5, 2, 4, 3.75, 2];
let carroComp = 50;
let carroAltura = 30;

//Mostra carros
function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCar[i], yCar[i], carroComp, carroAltura);  
  }
}
  

//Funções carro 
function velocidadeCarros(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCar[i] -= velocidade[i];
  }  
}
  
function loopCarros(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passaTela(xCar[i])){
      xCar[i] = 600
    } 
  } 
}

function passaTela(xCar){
  return xCar < -40;
}
