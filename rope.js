class rope{
    constructor(body1,body2,offsetX,offsetY){

        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX,y:this.offsetY},
            //stiffness: 0.04,
            //length: 10
        }
        //this.pointB = pointB;
        
        this.rope = Matter.Constraint.create (options);
        World.add(world, this.rope);
    }
     

      
    display(){
        
            var point1 = this.rope.bodyA.position;
            var point2 = this.rope.bodyB.position;
            stroke("white")
            strokeWeight(4);
            var Anchor1X = point1.x;
            var Anchor1Y = point1.y;
            var Anchor2X = point2.x + this.offsetX;
            var Anchor2Y = point2.y + this.offsetY;
            line(Anchor1X,Anchor1Y-50,Anchor2X,Anchor2Y+20);

        }
}