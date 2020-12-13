
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paperBall;
var groundd;
var rect,rect2,rect3;

function setup() {
	createCanvas(windowWidth,windowHeight);

	engine = Engine.create();
	world = engine.world;

  paperBall = new Paper(300,30,30,30);
  groundd = new Ground();
  rect = new Box(800,385,250,10);
  rect2 = new Box(680,370,10,20);
  rect3 = new Box(920,370,10,20);

  
}


function draw() {
  
  background(0);
  Engine.update(engine);

  
   throwing();

  paperBall.display();
  groundd.display();
  rect.display();
  rect2.display();
  rect3.display();
 
}

function throwing(){

  if(keyCode === "SPACE"){
    Matter.Body.applyForce(paperBall.body,paperBall.body.position.x,paperBall.body.position.y,{x:85,y:85});
    }
  
}



