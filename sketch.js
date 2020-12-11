
var monkey , monkey_running,soundjump,backsound,winsound,lostsound;
var banana ,bananaImage, obstacle, obstacleImage,monkeyColide;
var bananaGroup, obstacleGroup;
var score=0;
var gameState=PLAY;
var PLAY;
var survivalTime=0;
var END;
var monkey , monkey_running,ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score,stopMonkey;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  groundImage=loadImage("grass.jpg");
  monkeyCollide = loadAnimation("sprite_1.png");
  soundjump=loadSound("preview.mp3");
  backsound=loadSound("preview2.mp3");
  winsound=loadSound("mixkit-achievement-bell-600.wav");
  lostsound=loadSound("mixkit-losing-piano-2024.wav");
  stopMonkey=loadImage("sprite_0.png");
}



function setup() {
  createCanvas(600,600);
  
  
   monkey=createSprite(86,438,10,10);
  monkey.addAnimation( "moving",monkey_running );
  monkey.scale=0.2;
   
 

  ground=createSprite(300,550,600,100);
  ground.addImage(groundImage);
  
  ground.x = ground.width/2;
  console.log(ground.x);
  ground.scale=2;
  
 
  
  
 //monkey.debug=true;
 bananaGroup=new Group();
  obstacleGroup=new Group();
  
 
  
  
  
 
}


function draw() {
  background("#BBDEFB");  

  
  
 
  if(keyDown("space")){
    monkey.velocityY=-13 ;
    soundjump.play();
  }
  
  
   if (ground.x <0){
      ground.x = ground.width/2;
    }
    
    ground.velocityX=-5;
  
     monkey.velocityY = monkey.velocityY + 0.8   
  monkey.collide(ground);
  
    obstacles();
    bananas();
    
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
    winsound.play();
    score=score+1;
  }

  
  
  
  

  
   
  
  if(monkey.collide(obstacleGroup)){
    lostsound.play();  
    survivalTime=0;
    
  }          
  
   stroke("white");
  textSize(20);
  fill("white");
  text("score="+score,300,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
   text("survivalTime="+survivalTime,100,50);
  
 
 

  drawSprites();
}

function bananas(){
  if (frameCount%120 === 0){
    
    banana = createSprite(600,round(random(250,180)), 50, 50 )
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX =-(4);           
    banana.lifetime = 220;
    bananaGroup.add(banana);
   

    
  }
  

  
}

function obstacles(){
  if (frameCount%200 === 0){
    
    obstacle = createSprite(600,385,50,50);
    obstacle.addImage(obstacleImage);

    obstacle.scale = 0.1 ;
    obstacle.velocityX = -(4);
    obstacle.lifetime = 220;
    obstacleGroup.add(obstacle);
    
  }
  
  
}







  











