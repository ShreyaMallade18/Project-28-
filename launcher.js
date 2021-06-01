class launcher{
    constructor(body, pointB){
        var options = {
            bodyA: body,
            pointB: pointB,
            stiffness: 0.04,
            length:25
        }
        this.bodyA = body;
        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    fly(){
        this.launcher.bodyA = null;
    }

    display(){
        if(this.launcher.bodyA){
            var pointA = this.bodyA.position;
            var pointb = this.pointB;
            strokeWeight(4);


                line(pointA.x, pointA.y, pointb.x, pointb.y);




        }
    }
}