const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


var divisions = [];
var plinkos = [];
var particles = [];

var divisionHeight = 300;

	
var ground;

function setup() {
	createCanvas(500, 625);


	engine = Engine.create();
	world = engine.world;

  
  for (var k = 8; k <=width; k = k + 80) {
    divisions.push(new Ground(k, height-divisionHeight/3, 10, divisionHeight));
}

for(var j = 13; j<= width;j=j+45)
{
  plinkos.push(new Plinko(j,75));
}

for (var j = 10; j <=width; j=j+40) 
{

   plinkos.push(new Plinko(j,175));
}

for (var j = 25; j <=width; j=j+50) 
{

   plinkos.push(new Plinko(j,275));
}
ground = new Ground(600,height,1600,30)





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
	Engine.update(engine);
  background(200, 100, 0);
  
 

 
 
  
 
 
 


ground.display();


if(frameCount%60===0){
  particles.push(new Particle(random(width/2-15,width/2+15),0,0));
}

for (var y=0;y<particles.length; y++){
  particles[y].display();
}

for (var k=0;k<divisions.length; k++){
  divisions[k].display();
}

for (var j=0;j<plinkos.length; j++){
  plinkos[j].display();
}
  

drawSprites();

 
}


