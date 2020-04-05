 var ball1,ball2;
 
 
 function setup() {
  createCanvas(800,400);
  ball1 = createSprite(200,200,50,100);
   ball1.shapeColor = "red";
   ball2 = createSprite(500,200,50,100);
   ball2.shapeColor = "skyblue"
}

function draw() {
  background(0);

  ball2.velocityX = -2;

  if(ball2.x-ball1.x===ball1.width/2+ball2.width/2){
    ball1.velocityX = -2;
    ball2.velocityX = 2;
  }
  drawSprites(); 
}