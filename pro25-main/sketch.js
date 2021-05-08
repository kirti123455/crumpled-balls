
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(800,690,1600,20);
	dustbinObj=new dustbin(1200,670);
	dustbinObj1=new dustbin(1500,670);
    paperObj= new Paper(280,680);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
 

  groundObject.display();
  dustbinObj.display();
 dustbinObj1.display();
  paperObj.display();
}

function keyPressed() {

if (keyCode === UP_ARROW) {


Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:100,y:-85});




}



}