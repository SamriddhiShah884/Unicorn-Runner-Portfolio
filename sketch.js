var unicorn, unicornRunningAnimation, unicornStand;
var PLAY=0;
var END=1;
var gameState=PLAY;
var b,bImg;
var rainbow, rainbowImg , rainbowGroup;
var edges;
var score=0;
var sound;

function preload(){
  unicornRunningAnimation=loadAnimation("2.svg", "3.svg", "4.svg", " 5.svg", "6.svg", "7.svg");
  unicornStand=loadAnimation("1.svg","1.svg");
  rainbowImg=loadImage("rainbow.png");
  bImg=loadImage("cloud-background-abc.png");

  sound=loadSound("a.mp3");
}

function setup() {

  sound.play();
  
 canvas= createCanvas(800,400);


  b=createSprite(0,200);
  b.addImage(bImg);
  b.scale=0.8;
  unicorn=createSprite(200,330,30,30);
  unicorn.addAnimation("abc", unicornRunningAnimation);
  unicorn.scale=0.8;
  edges=createEdgeSprites();
  
  rainbowGroup=new Group ();
}

function draw() {
  background("hotpink");
  document.getElementById("score-label").innerHTML="Score: "+score;
  unicorn.collide(edges);
  if(gameState===PLAY){
 b.velocityX=-8;
if(b.x<250){
  b.x=350;
}

if(keyDown("space") && unicorn.y>300){
  unicorn.velocityY=-8;
  
}
unicorn.velocityY=unicorn.velocityY+0.2;

    if(frameCount%100===0){
    rainbow=createSprite(700,200);
    rainbow.addImage(rainbowImg);
    rainbow.scale=0.2;
    rainbow.velocityX=-6;
    rainbowGroup.add(rainbow);
    
       
    }
    if(unicorn.isTouching(rainbowGroup)){
    score=score+1;
    rainbowGroup.destroyEach();
    console.log(score);
    }

    if(frameCount%100===0){

    }

  }

  else if(gameState===END){
    
  }

 drawSprites();
}


 
