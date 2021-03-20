class Ground{
    constructor(x,y,width,height){
    var options={
        isStatic:true
    }
   this.body= Bodies.rectangle(x,y,width,height,options)
    this.width=width;
    this.height=height;
    World.add(world,this.body)
    this.body.setVelocityX=2;
    }
    display(){
        var pos =this.body.position;
        push()
        fill("brown")
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
    
}