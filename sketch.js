var movingRect, fixedRect;


function setup() {

  createCanvas(800,400);
  movingRect = createSprite(400, 200, 80, 30);
  fixedRect = createSprite(400, 400, 50, 80);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  movingRect.velocityY=4;
  fixedRect.velocityY=-4;

}

function draw() {
  background("yellow"); 
  
 /* movingRect.x = mouseX;
  movingRect.y = mouseY;*/

  console.log(movingRect.x - fixedRect.x);

  if(movingRect.x - fixedRect.x < movingRect.width/2+fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2+fixedRect.width/2) {
    /*movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";*/
  movingRect.velocityX=movingRect.velocityX*-1;
  fixedRect.velocityX=fixedRect.velocityX*-1;
  }
  if( movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2
    && fixedRect.y-movingRect.y < movingRect.height/2+fixedRect.height/2 ){
      movingRect.velocityY=movingRect.velocityY*-1;
      fixedRect.velocityY=fixedRect.velocityY*-1;
  }

  drawSprites();
}