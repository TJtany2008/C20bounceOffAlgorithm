var fixedRect , movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600, 700, 100, 50);
  fixedRect.shapeColor = "green";
  movingRect=createSprite(600,100,50,100);
  movingRect.shapeColor = "green";

  fixedRect.velocityY = -1;
  movingRect.velocityY = 1;
}

function draw() {
  background("lightBlue");
    
  console.log(fixedRect.y);
  if (movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 && 
    fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2 ) {
    movingRect.velocityY = movingRect.velocityY * -1;
    fixedRect.velocityY = fixedRect.velocityY * -1;
  }

  drawSprites();
}