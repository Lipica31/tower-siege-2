
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var stand;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11;
var block12,block13,block14,block15,block16;
var ground;
var ball;


function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(700,200,200,10);
  stand = new Ground(600,400,40,20);
  
 

  block1 = new Box(300,275,30,40);
 
  block2 = new Box(330,275,30,40);
  block3 = new Box(360,275,30,40);
  block4 = new Box(390,275,30,40);
  block5 = new Box(420,275,30,40);
  block6 = new Box(450,275,30,40);
  block7 = new Box(480,275,30,40);
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);
  block16 = new Box(390,155,30,40);

 
 

 ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});
}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  textSize(15);
  fill("blue");
  text("CLICK ON SPACE KEY TO RESTART THE GAME",200,30);

  ground.display();
  stand.display();
  
  strokeWeight(2);
  stroke(15);
  fill("green");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("purple");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("red");
  block13.display();
  block14.display();
  block15.display();
  fill("orange");
  block16.display();
  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    slingShot.attach(this.ball);
  }
}