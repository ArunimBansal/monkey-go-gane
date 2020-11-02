
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var score
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  monkey=createSprite(50,350,20,20)
  monkey.addAnimation("running",monkey_running)
 monkey. scale=0.15
  ground=createSprite(40,400,600,10)
foodGroup=new Group()
  obstaclesGroup=new Group()
  score=0
}


function draw() {
background("white")
  if(keyDown("space")&&monkey.y>70){
    monkey.velocityY = -6
    monkey.collide(ground)
       
  }
  monkey.velocityY=monkey.velocityY+0.8
   monkey.collide(ground)
  drawSprites()
  food()
  obstacle()
text("score:"+score,310,10)
  
     score = score + Math.round(getFrameRate()/60);
    
  
  
  
}

function food(){
  if(frameCount%80===0){
   banana = createSprite(400,120,40,10);
    banana.y = Math.round(random(150,200));
banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime=200
    
}
  
}


function obstacle(){
  if(frameCount%80===0){
  var obstacle=createSprite(400,390,10,10)
   obstacle.addImage(obstacleImage)
   obstacle.velocityX=-6
   obstacle.scale=0.15
  
}
}