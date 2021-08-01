var bg,bgImg;
var snows;
var snows = [];

function preload() {
  bgImg = loadImage("snow3.jpg")
  snowImg = loadImage("snow4.webp");
}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
  
  
  bg = createSprite(400,200,);
  bg.addImage(bgImg)

}

function draw() {
  background(255,255,255);  
  drawSprites();
  
   
   drawSprites();

  if(frameCount%50===0){



   snow = createSprite(random(100,800),3,25);
   snow.addImage(snowImg)
   snow.scale = 0.3;

  }
       
   for(var j = 0; j< snows.length; j++){
      
    snows[j].display();
    snows[j].velocityY = 5;
   }


   }
