var mvrect,fxrect;



function setup() {
  createCanvas(800,400);
 fxrect=createSprite(400, 200, 50, 50);
 fxrect.shapeColor="red";
 fxrect.debug=true;
 mvrect=createSprite(200, 200, 80, 40);
 mvrect.shapeColor="red";
 mvrect.debug=true;
}

function draw() {
  background(0);  
mvrect.x=World.mouseX;
mvrect.y=World.mouseY;

if (mvrect.x-fxrect.x<=mvrect.width/2+fxrect.width/2 &&
fxrect.x-mvrect.x<=mvrect.width/2+fxrect.width/2 &&
mvrect.y-fxrect.y<=mvrect.height/2+fxrect.height/2 &&
fxrect.y-mvrect.y<=mvrect.height/2+fxrect.height/2) {
    fxrect.shapeColor="yellow";
    mvrect.shapeColor="yellow";

} else {
    fxrect.shapeColor="red";
    mvrect.shapeColor="red";
}


  drawSprites();
}