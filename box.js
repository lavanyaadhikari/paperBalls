class Box{
    constructor(x,y,width,height){
    var o = {
        isStatic : true 
     } 

     this.box = Bodies.rectangle(x,y,width,height);
     World.add(world,this.box);
     this.width = width;
     this.height = height;
    }

    display(){
        var pos = this.box.position;
      push();
        rectMode(CENTER);
        fill("blue")
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}