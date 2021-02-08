class Paper{
        constructor(x, y, radius) {
            var options = {
                'isStatic':false,
                'restitution':0.3,
                'friction':0.1,
                'density':1.7,
            }
            this.body = Bodies.circle(x, y, radius, options);
            this.radius = radius;
            
            World.add(world, this.body);
          }
          display(){
            ellipseMode(RADIUS);
            fill("#FF1694");
            ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
          }
}