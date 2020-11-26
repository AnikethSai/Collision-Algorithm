var fixedRect, movingRect;
var o1,o2;
var obj1,obj2,obj3,obj4;
var test =1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj1 = createSprite(400,200,80,30);
  obj1.shapeColor = "green";
  obj1.debug = true;
  obj2 = createSprite(600,200,80,30);
  obj2.shapeColor = "green";
  obj2.debug = true;
  obj3 = createSprite(800,200,80,30);
  obj3.shapeColor = "green";
  obj3.debug = true;
  obj4 = createSprite(1000,200,80,30);
  obj4.shapeColor = "green";
  obj4.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  /*if(isTouching(fixedRect,movingRect)){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }

  if(isTouching(obj1,movingRect)){
    obj1.shapeColor = "red";
    movingRect.shapeColor = "red";
  }

  if(isTouching(obj2,movingRect)){
    obj2.shapeColor = "red";
    movingRect.shapeColor = "red";
  }

  if(isTouching(obj3,movingRect)){
    obj3.shapeColor = "red";
    movingRect.shapeColor = "red";
  }

  if(isTouching(fixedRect,movingRect)){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }*/

if(test ===1){

  if(isTouching(movingRect,obj1)){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  
  
  else if(isTouching(movingRect,obj2)){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }

  
  else if(isTouching(movingRect,obj3)){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }

  
  else if(isTouching(movingRect,obj4)){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }

  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
}
 
 
  drawSprites();
}


function isTouching(o1,o2){
  if (o1.x - o2.x < o2.width/2 + o1.width/2
    && o2.x - o1.x < o2.width/2 + o1.width/2
    && o1.y - o2.y < o2.height/2 + o1.height/2
    && o2.y - o1.y < o2.height/2 + o1.height/2) {

return true;
    }

  else {
    return false;
  }
  

}




