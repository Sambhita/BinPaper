class Paper{
        constructor(x, y, radius) {
            var options = {
                'isStatic':false,
                'restitution':0.3,
                'friction':0.8,
                'density':7,
            }
            this.body = Bodies.circle(x, y, radius, options);
            this.radius = radius;
            
            World.add(world, this.body);
          }
          display(){
            ellipseMode(RADIUS);
            fill("pink");
            ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
          }
}