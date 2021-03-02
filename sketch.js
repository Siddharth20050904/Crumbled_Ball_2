
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundBody;
var ballBody;
var box1,box2,box3;
var dustbinImg;

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundBody = new Ground(600,580,1200,20);
	ballBody = new Ball(50,350,40,40);
	box1 = new Box(875,550,200,20);
    box2 = new Box(960,450,20,200);
	box3 = new Box(790,450,20,200);
	dustbinImg = new Dustbin(900,550,200,250);
	Engine.run(engine)
}


function draw() {
	rectMode(CENTER);
	background(255);
	ballBody.display();
	groundBody.display();
	dustbinImg.display();
}
function keyPressed(){
	if(keyCode ===UP_ARROW){
		Matter.Body.applyForce(ballBody.body,ballBody.body.position,{x:100,y:-125});
	}
};