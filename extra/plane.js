function Plane(x,y){
    this.body=Bodies.rectangle(x,y,20,50,{isStatic:true})
    World.add(world,this.body)
    this.appear = function(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        rect(0,0,20,50)
        pop()
    }
    this.write=function(data1,data2){
        return data1+''+data2
    }
}