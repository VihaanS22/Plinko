class Plinko{
    constructor(x, y) {
      var options = {
         'isStatic': true,
          'friction':0.1,
          'density':1.2
      }
      
      
      this.diameter = 10
      
 
      this.body = Matter.Bodies.circle(x, y, this.diameter/2, options);
     

      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
      
     // var angle = this.body.angle;
      //push();
     // translate(pos.x, pos.y);
     
     
      fill(255);
     ellipse(pos.x, pos.y , 20,20);
     
    }
  };
 
  