class Ground{
    constructor(x,y,w,h)
    {
     var options= {isStatic:true}
    }
    this.body=Bodies.rectangle(x,y,w,h,options)
    this.h=h
    this.w=w
    World.add(world,this.body)
    
}
