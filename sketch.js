
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer
var stone
var rubber
var ground

function preload()
{
	
}

function setup() {
	
	createCanvas(1200, 800);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 
	hammer=Bodies.rectangle(600,400,30,20);
	World.add(world,hammer);

   ground=Bodies.rectangle(600,780,1200,20,{isStatic=true})
   World.add(world,ground)

   stone=Bodies.rectangle(500,600,100,50)
   World.add(world,stone)

   rubber=Bodies.circle(800,600,60)
   World.add(world,rubber)


	Engine.run(engine);
  
	
	
}


function draw() {
  rectMode(CENTER);
  background("skyblue")
  background(0);
  
  drawSprites();
 
 rect(hammer.position.x,hammer.position.y,30,20)
 rect(ground.position.x,ground.position.y,1200,20)
 rect(stone.position.x,stone.position.y,100,50)

}



