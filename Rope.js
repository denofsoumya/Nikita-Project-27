class Rope{
    constructor(bodyA, bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope= Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(4);
        stroke("white");
       // console.log("Bob.x : "+pointA.x);
       // console.log("Bob.y : "+pointA.y);
        line(pointA.x, pointA.y-30, pointB.x+this.offsetX, pointB.y+this.offsetY);
    }
    
}
