const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingshot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,400,10);
  
 
block1 = new Block(390,50,30,30)
block2 = new Block(390,50,30,30)
block3 = new Block(390,50,30,30)
block4 = new Block(390,50,30,30)
block5 = new Block(390,50,30,30)
block6 = new Block(390,50,30,30)
block7 = new Block(390,50,30,30)
block8 = new Block(390,50,30,30)
block9 = new Block(440,50,30,30)
block10 = new Block(440,50,30,30)
block11 = new Block(440,50,30,30)
block12 = new Block(440,50,30,30)
block13 = new Block(440,50,30,30)
block14 = new Block(440,50,30,30)
block15 = new Block(440,50,30,30)
//block16 = new Block(440,50,30,30)
block17 = new Block(340,50,30,30)
block18 = new Block(340,50,30,30)
block19 = new Block(340,50,30,30)
block20 = new Block(340,50,30,30)
block21 = new Block(340,50,30,30)
block22 = new Block(340,50,30,30)
block23 = new Block(340,50,30,30)
//block24 = new Block(340,50,30,30)
block24 = new Block(290,50,30,30)
block25 = new Block(290,50,30,30)
block26 = new Block(290,50,30,30)
block27 = new Block(290,50,30,30)
block28 = new Block(290,50,30,30)
block29 = new Block(240,50,30,30)
block30 = new Block(240,50,30,30)
block31 = new Block(240,50,30,30)
block32 = new Block(240,50,30,30)
block33 = new Block(240,50,30,30)
block34 = new Block(240,50,30,30)
block35 = new Block(240,50,30,30)
block36 = new Block(240,50,30,30)
block37 = new Block(490,50,30,30)
block38 = new Block(490,50,30,30)
block39 = new Block(490,50,30,30)
block40 = new Block(490,50,30,30)
block41 = new Block(490,50,30,30)
block42 = new Block(490,50,30,30)
block43 = new Block(490,50,30,30)
block44 = new Block(490,50,30,30)
block45 = new Block(490,50,30,30)
block46 = new Block(540,50,30,30)
block47 = new Block(540,50,30,30)
block48 = new Block(540,50,30,30)
block49 = new Block(540,50,30,30)
block50 = new Block(540,50,30,30)
block51 = new Block(540,50,30,30)




ball = Bodies.circle(100,100,25)
World.add(world,ball)

slingshot = new SlingShot(ball,{x:150, y:50})
  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  imageMode(CENTER)
  image(polygon_img,ball.position.x,ball.position.y,50,50)
  ground.display();
  stand1.display();
  

  strokeWeight(2);
  stroke(15);
  fill("red");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  fill("green")
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  fill("purple")

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  fill("darkBlue")
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  fill("seaGreen")
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();
  block35.display();
  block36.display();
  
  fill("maroon")
  block37.display();
  block38.display();
  block39.display();
  block40.display();
  block41.display();
  block42.display();
  block43.display();
  block44.display();
  block45.display();
  fill("darkSlateBlue")
  block46.display();
  block47.display();
  block48.display();
  block49.display();
  block50.display();
  block51.display();
  
  slingshot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(ball,{x:mouseX, y:mouseY})
}