class bob{
 constructor(x,y){
   var options={
     isStatic: false,
     restitution:1,
     friction:0,
     desity:7.8 
    }
    this.body = Bodies.circle(x,y,50,options);
    World.add(world,this.body);
 }
  display(){
    push();
    ellipseMode(RADIUS);
    fill("blue");
    ellipse(this.body.position.x,this.body.position.y,50,50);
    pop();

 }
}