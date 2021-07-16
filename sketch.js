var Path, PathImg
var Runner, Runner_moving
function preload(){
  //pre-load images
  PathImg=loadImage("path.png");
  Runner_moving=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
 //create path sprite
 Path=createSprite(200,200);
 Path.addImage(PathImg );
 //moving background
 Path.velocityY= 4;
 Path.scale= 1.4;
  //create runner sprite
  Runner=createSprite(180,340,30,30);
  Runner.addAnimation("moving",Runner_moving);
  Runner.scale= 0.08;

 leftBoundry= createSprite(0,0,100,800)
 leftBoundry.visible=false;
 rightBoundry= createSprite(400,0,100,800)
 rightBoundry.visible=false;

 
}
 


function draw() {
  background("black");
  Runner.x=World.mouseX
  Edges=createEdgeSprites();
  Runner.collide(leftBoundry);
  Runner.collide(rightBoundry);
  Runner.collide(Edges[3]);
  if(Path.y>400){
    Path.y=height/2
  }
  drawSprites();
}


