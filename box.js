class box{
    constructor(x,y,w,h){
        var options={
            restitution:1
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push ();
        translate(
            pos.x,pos.y)
        rotate (angle)
        rectMode(CENTER)
        
        fill ("RED")
        rect(0,0,this.width,this.height)
        pop ();
    }
}