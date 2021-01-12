 class Bob
{

    constructor(x,y,r)
    {
      var options ={
        isStatic: false,
        restitution:1   ,
        friction: 0,
        density: 1.5
     }
     
     this.x=x
     this.y=y
     this.r=r
     this.body = Bodies.circle(x,y,r,options)
     World.add(world,this.body)
    }

    display()
    {
     
        var pos = this.body.position;
        var angle = this.body.angle;
       
        push();
        
          translate(pos.x,pos.y);
          rotate(angle);

          fill("magenta");
          ellipseMode(RADIUS);
          ellipse(0,0,this.radius,this.radius);

        pop()
      
    }
}





