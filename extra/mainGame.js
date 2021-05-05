class  Game{
    constructor(){
    this.index=-1
    this.gameIndex=1
}
    gameIteration=function(){
        if(numplayers>1){
        if(gameState===1){
            let i = 400
            for(let index=0;index<numplayers;index++){
              planes.push(new Plane(230,i))
              i -= 100
            }
            for(let numPlanes=0;numPlanes<planes.length;numPlanes++){
                planes[numPlanes].appear()
            }
           for(let index in allPlayers){
               console.log(true)
                if(allPlayers[index].name===formobj.input.value()){
                    console.log(planes[this.gameIndex-1])
                    camera.position.x=planes[this.gameIndex-1].body.position.x
                    camera.position.y=planes[this.gameIndex-1].body.position.y
                    this.gameIndex+=1
                }
            }
        }
    }
    //for(let i in planes){
      //  i.write(i.body.position.x,i.body.position.y)
    //}
}
}