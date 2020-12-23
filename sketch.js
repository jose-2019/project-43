const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var currentFrame;
var buildingSprite
var building1,building2;
var thunder1,thunder2,thunder3,thunder4;
var person; 
var drops =[]
var dropSprite;
var thunderSprite;
function preload(){
  thunder1 = loadImage("1.png");
  thunder2 = loadImage("2.png");
  thunder3 = loadImage("3.png");
  thunder4 = loadImage("4.png")
man =loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","waling_6.png","walking_7.png","walking_8 .png")
building1 = loadImage("building1.png");
building2 = loadImage("building2.png");

}

function setup(){
   createCanvas(600,500);   
   engine = Engine.create();
   world  = engine.world;

   person = new Umbrella();

   if(frameCount%120 === 0){
       for(var i=0;i<25;i++)
            drops.push(new Drop(random(0,400),random(0,400),3,10));
   }
}

function draw(){
    background(0)
    Engine.update(engine);
    var x=Math.round(random(1,4));
    if(frameCount%120==0)
    {
         thunderSprite = createSprite(random(10,380),30,15,15);
        currentFrame=frameCount;
        switch(x)
        {
            case 1: thunderSprite.addImage(thunder1);
                    thunderSprite.visible =1;
                    break;
            case 2: thunderSprite.addImage(thunder2);
                    thunderSprite.visible =1;
                    break;
            case 3: thunderSprite.addImage(thunder3);
                    thunderSprite.visible =1;
                    break;
            case 4: thunderSprite.addImage(thunder4);
                     thunderSprite.visible =1;
                    break;
          
        }  
    }

if(frameCount%100===0){
buildingSprite = createSprite(580,250,20,20);
buildingSprite.velocityX=-4;
currentFrame=frameCount;
switch(x){

    case 1:buildingSprite.addImage(building1);
            buildingSprite.visible=1;
    break;
    case 2:buildingSprite.addImage(building2);
            buildingSprite.visible=1;
    break;

}

}

    if(frameCount===currentFrame+850 )
    {
        buildingSprite.visible = 0;
    }

    if(frameCount===currentFrame+20 )
    {
        thunderSprite.visible = 0;
    }

    person.display();

    for(var i=0;i<25;i++)
    {
        drops[i].display();
        drops[i].update();
    }

    person.depth=buildingSprite.depth;
    person.depth=person.depth+1;

    drawSprites();
}   

