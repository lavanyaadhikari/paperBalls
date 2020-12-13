class Paper{

    constructor(x,y,width,height,){

        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
     
        }
        
        this.paper = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.paper);
        this.width = width;
        this.height = height;
        
    }

    display(){
        var pos = this.paper.position;
        var angle = this.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.width,this.height);
        pop();
    }
}