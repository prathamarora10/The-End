var car,carImage;
var road,roadImage;
var coin,coinImage;
var score;
var coinGroup;


function preload()
{

  carImage = loadImage('download-1.jpg')
  roadImage = loadImage('maxresdefault.jpg')
  coinImage = loadImage('gold-coin-in-cartoon-style-vector-14892356-1.jpg')
  
}

function setup() 
{
 
    createCanvas(800,750);

    road = createSprite(450,380)
    road.addImage('road',roadImage)
    road.scale = 1.3  
    road.velocityY = 3
  
    car = createSprite(450,570,20,20);
    car.addImage('car',carImage)
    car.scale = 0.7
  
    coinGroup = new Group();
  
    score = 0;
  
}

function draw() 
{
   background('white');

  camera.position.y = car.y - 200
  camera.position.x = 400
  
    if(road.y>400){
      road.y = 300
    }

    if(keyDown('left')){
      car.x = car.x - 2;
    }

    if(keyDown('right')){
      car.x = car.x + 2;
    }  

    if(keyDown('up')){
      car.y = car.y - 2;
    }  

    if(keyDown('down')){
      car.y = car.y + 2;
    }
     
    coins();
    drawSprites();
  
    fill('black')
    textSize(20)
    text('score : ' + score,50,50)
}

function coins()
{  
   if(frameCount % 150 === 0)
   {    
    coin = createSprite(450,-225);
    coin.addImage('coin',coinImage);
    coin.scale = 0.09;
    coin.velocityY = 3;
    coin.x = Math.round(random(300,650));
    coinGroup.add(coin);
    coin.debug = true
    coin.setCollider('circle',0,0,500)
  
     if(coinGroup.isTouching(car))
     {
       score = score + 1
       coinGroup.destroyEach();
     }
   }
}
