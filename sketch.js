//Create variables here
var dog,dogSprite,happydog,database,foodS,foodStock;

function preload()
{
  //load images here
  dog= loadImage("images/dogImg.png");
  happydog=loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  dogSprite= createSprite(250,250);
  dogSprite.addImage(dog);
  dogSprite.scale= 0.5;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock)
}


function draw() {  
  background(46,139,87);
  fill("red");
  textSize(20);
  text("Food remaining"+foodS,300,50);
  
  if(keyWentDown(UP_ARROW)){
    console.log("beforeaddimage");
    writeStock(foodS);
    dogSprite.addImage(happydog);
    console.log("after add image")

  }
  drawSprites();
  //add styles here
 
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  
  database.ref('/').update({
    Food:x
  })
  
}



