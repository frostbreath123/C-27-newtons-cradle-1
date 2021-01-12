
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
 
	//Create the Bodies Here.


	Engine.run(engine);

	roof = new Roof(400,100,600,50)

	bob1 = new Bob(200,600,50)
	bob2 = new Bob(300,600,50)
	bob3 = new Bob(400,600,50)
	bob4 = new Bob(500,600,50)
	bob5 = new Bob(600,600,50)

	rope1= new Rope(bob1.body,roof.body,-200)
	rope2= new Rope(bob2.body,roof.body,-100)
	rope3= new Rope(bob3.body,roof.body,0)
	rope4= new Rope(bob4.body,roof.body,100)	
	rope5= new Rope(bob5.body,roof.body,200)

}



function draw() {
  
	background("lightgrey");
  
	roof.display();

  
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	
  
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
  
	
	
  
	
  }
  
  function keyPressed(){
  
	  if (keyCode === UP_ARROW){
		  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-800,y:-800})
	  }
	  
	  if (keyCode === DOWN_ARROW){
		  Matter.Body.applyForce(bob5.body,bob5.body.position,{x:800,y:800})
	  }
  

	  if (keyCode === LEFT_ARROW){
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-800,y:-800})
	}
	
	if (keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x:800,y:800})
	}
  }
