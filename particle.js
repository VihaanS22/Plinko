class Particle {
    constructor(x, y) {
      var options = {
          'restitution':0.3
         // 'friction':0.1,
          //'density':1.2
      }
      
      
      this.diameter = 10
      
 
      this.body = Bodies.circle(x, y, this.diameter, options);
      this.color = color(random(0, 255), random(0,255), random(0,255));

      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
      
     // var angle = this.body.angle;
      push();
     // translate(pos.x, pos.y);
     
     
      fill(this.color);
    //ellipseMode(RADIUS)
      ellipse(pos.x, pos.y , 20,20);
     pop();
    }
  };
 
  