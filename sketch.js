var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var myEngine, myWorld,box1,box2,box3,box4;
var box5,box6
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	myEngine= Engine.create();// world
  myWorld= myEngine.world;

  box1=new Box(400,650,200,20)

  box3=new Box(510,610,20,100)
   
  box4=new Box(305,610,20,100)
  
	createCanvas(800, 700);
	rectMode(CENTER);
	
   
	packageSprite=createSprite(width/2, 80, 10,10,);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	

	engine = Engine.create();
	world = engine.world;
	var options={
		isStatic:true
	} 
	
	box2=Bodies.rectangle(400,635,200,20,options);
	World.add(world, box2);
	
    box5=Bodies.rectangle(505,610,20,100,options);
	World.add(world, box5);

	box6=Bodies.rectangle(310,610,20,100,options);
	World.add(world, box6);
	
    
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 
    
	Engine.run(engine);
     
}   
    

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed() 
  drawSprites();
  box1.display();
  box3.display();
  box4.display();
}

function keyPressed() {
 if (keyDown("down")) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, packageBody);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
    
  }
}



