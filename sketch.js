const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var play,how,back;
var shooter;
var ball = [];

var j;
function preload()

{
  bg = loadImage("bgm.jpeg")
  s = loadImage("shooter.png")
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,690);
//shooter
 shooter = createSprite(200,610,20,20)
 shooter.addImage(s)
 

 bulletGroup = createGroup();
 for (var j = 52; j <=width; j=j+40) 
 {
 
    ball.push(new Plinko(j,75));
 }

 for (var j = 30; j <=width-10; j=j+40) 
 {
 
    ball.push(new Plinko(j,112));
 }
//balls
}
function draw(){
  background(bg)
shooter.scale = 1;
shooter.x = mouseX;


if(keyCode === 32){
  createBullet(shooter.x);
  
}

for (var i = 0; i < ball.length; i++) {
     
  ball[i].display();
  
}
drawSprites();

}



function createBullet(x)
{

 
  var bullet = Bodies.circle(400,610,5,10);
  coluor=color(random(0,255), random(0,255), random(0,255));
  r = 20;
  bullet.y = 400;
  bullet.x = 610
  bullet.shapeColor = "red";
  
  bullet.lifetime = 1000;

  var pos = bullet.position;
  var angle = bullet.angle;
if(bullet.mouseReleased){
  bullet.velocityY = -12;
}
  push();
  translate(pos.x, pos.y);
  rotate(angle);
  noStroke();
  fill("red");
  ellipseMode(RADIUS);
  ellipse(0,0,r,r);
  pop();

}