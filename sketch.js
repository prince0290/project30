const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground ;
var block1 , block2 , block3 , block4 , block5 ,block6 , block7 , block8 , block9 ,block10 , block11 , block12 , block13 , block14 , block15 , block16 
var rope ;

function preload()
{
	polygonImg=loadImage("polygon.png");
}
	

function setup() {
	createCanvas(1500, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(1135,680,390,15);

	block1 = new Box(970,640,55,70);
	block2 = new Box(1025,640,55,70);
	block3 = new Box(1080,640,55,70);
	block4 = new Box(1135,640,55,70);
	block5 = new Box(1190,640,55,70);
	block6 = new Box(1245,640,55,70);
	block7 = new Box(1300,640,55,70);

	block8 = new Box(1025,570,55,70);
	block9 = new Box(1080,570,55,70);
	block10 = new Box(1135,570,55,70);
	block11= new Box(1190,570 ,55,70);
	block12 = new Box(1245,570 ,55,70);

	block13 = new Box(1080,500,55,70);	
	block14 = new Box(1135,500,55,70);
	block15 = new Box(1190,500,55,70);

	block16 = new Box(1135,430,55,70);	

	polygon=Bodies.circle(20,500,70);
	World.add(world,polygon);

	rope = new Rope(polygon,{x:200,y:500});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	ground.display();

	block1.display();
	block2.display();
	block3.display();
	block4.display();
	block5.display();
	block6.display();
	block7.display();
	block8.display();
	block9.display();
	block10.display();
	block11.display();
	block12.display();
	block13.display();
	block14.display();
	block15.display();
	block16.display();

	imageMode(CENTER);
	image(polygonImg,polygon.position.x,polygon.position.y,70,70);

	rope.display();

  	drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	rope.fly();
}

function keyPressed(){
	if(keyCode===32){
		rope.attach(polygon);
	}
}