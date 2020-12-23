class Umbrella { 
    constructor(){
         var options = {
              isStatic: true,
              restitution: 0.5
         };
         var radius = 25;
         this.body = Matter.Bodies.circle(350,320,radius, options);
         World.add(world, this.body);
    }

    display(){
         var umbpos = this.body.position;
         animation(man,umbpos.x-90,umbpos.y-20,166,160);
    }
    
}