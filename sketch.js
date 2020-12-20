
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var Roof,bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	Roof = new roof(500,100,450,40);
	bob1 = new bob(350,600);
	bob2 = new bob(400,600);
	bob3 = new bob(450,600);
	bob4 = new bob(500,600);
	bob5 = new bob(550,600);
	rope1 = new rope(bob1.body,Roof.body,-150,0);
	rope2 = new rope(bob2.body,Roof.body,-75,0);
	rope3 = new rope(bob3.body,Roof.body,0,0);
	rope4 = new rope(bob4.body,Roof.body,75,0);
	rope5 = new rope(bob5.body,Roof.body,150,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  

  
  drawSprites();
  Roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed(){
  if (keyCode === 32) {
    Matter.Body.applyForce(bob1.body,bob1.body.position,{
    x: -0.8,
    y: 0
    });
  }

}

