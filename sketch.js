
var monkey , monkeyr
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
var score=0
var st
function preload(){
  
  
  monkeyr =      loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
 
  monkey=createSprite(80,315,50,50)
  monkey.addAnimation("m",monkeyr)
  monkey.scale =0.1
   ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2
}


function draw() {
  background(0,255,0)
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
     if (ground.x < 210){
      ground.x = ground.width/2;
    }
   //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 160) {
        monkey.velocityY = -12;
    
    }
   //add gravity
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)
  stroke("white")
  textSize(20)
  fill("white")
  text("score :"+score,500,50)
  
  stroke("black")
  textSize(20)
  fill("black")
  st=Math.ceil(frameCount/frameRate())
  text("survival time:"+st,100,50);
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  food();
  obstacles();
  drawSprites();
}
function food(){
  if (frameCount % 80 === 0) {
    var banana= createSprite(400,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    FoodGroup.add(banana)
  }
}
function obstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(400,330,10,40);
   obstacle.addImage(obstacleImage)
   obstacle.scale=0.1
   obstacle.velocityX = -3;
   obstacle.lifetime = 200;
   obstacleGroup.add(obstacle)
 }  
    }




