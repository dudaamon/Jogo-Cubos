let personagem
let grama

let tamanho = 64

let andarX = 0
let andarY = 0

let botao

// é executado uma vez quando o programa é iniciado
function setup() {
  createCanvas(576, 576);
  personagem = loadImage('person.png')
  grama = loadImage('grass.png')
}

// fica executado até que o programa seja encerrado
function draw() {
  background(220);
  
  if(andarX < 0) {
    andarX = 0
  }
  
  if(andarY < 0) {
    andarY = 0
  }
  
  if(andarX > tamanho*8){
    andarX = tamanho*8
  }
  
  if(andarY > tamanho*8){
    andarY = tamanho*8
  }
  
  for(let x = 0; x < 9; x++) {
    for(let y = 0; y < 9; y++) {
      image(grama, x*tamanho, y*tamanho, tamanho, tamanho)
    }
  }
  
  image(personagem, andarX, andarY, tamanho, tamanho)
  
  if(andarX === tamanho*8 && andarY === tamanho*8){
     //criar um retangulo
    rect(160, 160, 256, 256)
    //escrever um texto 'GANHOU'
    textSize(35)
    text('GANHOU', 200, 300)
    //criar um botão
    botao = createButton('Reiniciar')
    //resetar o jogo
    botao.mousePressed(reset)
    //parar o jogo
    noLoop()
  }
  
  // text(`x:${andarX} y: ${andarY}`, 500, 500)
}

function reset() {
  andarX = 0
  andarY = 0
  botao.remove()
  loop()
}

// é executado uma vez, toda vez que há um evento de teclado
// UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW
function keyPressed() {
  if(keyIsDown(DOWN_ARROW)){
    andarY += 64
  }
  
  if(keyIsDown(UP_ARROW)){
    andarY -= 64
  }
  
  if(keyIsDown(LEFT_ARROW)){
    andarX -= 64
  }
  
  if(keyIsDown(RIGHT_ARROW)){
    andarX += 64
  }
}