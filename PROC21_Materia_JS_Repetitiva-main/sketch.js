
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground;
var engine, world;

function preload()
{
	
 		
}

function setup() {
	createCanvas(800, 700);

var ball_options={
	isStatic:false,
	restitucion:0.3,
	friction:0,
	density:1.2
}


	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.

	ball = Bodies.circle(220,10,10,ball_options);

	groundObj=new ground(width/2,670,width,20);
  	leftSide=new ground(1100,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  
}



