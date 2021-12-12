
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var leftside;
var rightside;
var ball;

function setup() {
	createCanvas(1000,800);
	engine = Engine.create();
	world = engine.world;

	ground =new Ground(width/2,500,width,10);
	rightside = new Ground(900,445,10,100);
	leftside  = new Ground(600,445,10,100);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
fill("white");

	//Create the Bodies Here.
ball = Bodies.circle(100,200,15,ball_options);
World.add(world,ball);


rectMode(CENTER);
ellipseMode(RADIUS);

}


function draw() {
  rectMode(CENTER);
  background(0);
 ellipse(ball.position.x,ball.position.y,15);
 

 ground.show();
 leftside.show();
 rightside.show();
 Engine.update(engine);
 
 
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x : 0, y : 0},{x : 4.00 , y : 0})
	}
}