class Mario{
    constructor(x,y,width,height){
    var options={
        isStatic:false,
        restitution:1,
        density:0.1
    }
   this.body= Bodies.rectangle(x,y,width,height,options)
    this.width=width;
    this.height=height;
    World.add(world,this.body)

    }
    display(){
        var pos =this.body.position;
        push()
        fill("red")
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
    
}