class ground{
    constructor(x,y,z,h){
        var options={
            isStatic:true
        }
this.body=Bodies.rectangle(x,y,z,h, options)
World.add(world,this.body)

    }
    display(){
        var pos=this.body.position
        rectMode(CENTER)
        fill ("blue")
        rect(pos.x,pos.y,this.width,this.height)

    }
}