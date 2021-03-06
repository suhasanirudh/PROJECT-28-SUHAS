
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var launcher,stone;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new mango (1100,100,30);
	mango2 = new mango (1200,150,30);
	mango3 = new mango (1200,210,30);
	mango4 = new mango (900,220,30);
	mango5 = new mango (900,280,30);
	mango6 = new mango (1000,200,30);
	mango7 = new mango (1100,200,30);
	mango8 = new mango (1000,90,30);
	mango9 = new mango (1125,90,30);
	mango10 = new mango (1125,300,30)

	treeObj = new tree (1050,580);
	groundObject = new ground (width/2,600,width,20);
	stone = new Stone (241,425,20);
	launcher = new Launcher (stone.body,{x:241,y:425});


	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display ();
  mango1.display ();
  mango2.display ();
  mango3.display ();
  mango4.display ();
  mango5.display ();
  mango6.display (); 
  mango7.display (); 
  mango8.display ();
  mango9.display ();
  mango10.display ();

  stone.display();
  groundObject.display();
  launcher.display();


  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
 
 
}

function mouseDragged () {
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased () {
	launcher.fly (); 
}

function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position
	
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	  if(distance <= lmango.r + lstone.r){
		  Matter.Body.setStatic(lmango.body, false);
	  }
   }

function keyPressed(){
    if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:241,y:425})
		launcher.attach(stone.body);
	}
}



