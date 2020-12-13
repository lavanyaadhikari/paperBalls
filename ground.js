class Ground{

    Constructor(){

        var o = {
            isStatic : true 
         }
          
          this.ground = Bodies.rectangle(700,400,1400,20,o);
          World.add(world,this.ground);
          this.width = width;
          this.height = height;
        console.log(this.ground);
    }

    display(){
       
        var pos = this.ground.position;
        push();
        fill("orange");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}