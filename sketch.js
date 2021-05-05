const Bodies = Matter.Bodies
const Engine = Matter.Engine
const World = Matter.World
let database = firebase.database()
let world,engine
var formobj
let numplayers
let planes = []
let gameState
let gameLoop
let allPlayers
function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world=engine.world
  Engine.run(engine)
  formobj = new Form()
  gameLoop = new Game()
}

function draw(){
  background(0); 
  Engine.update(engine)
  let playernumber = database.ref('/')
  playernumber.on('value',(data)=>{
    numplayers=data.val().numPlayer
  })
  formobj.button.mousePressed(()=>{
    database.ref('/').update({
        'numPlayer':numplayers+1
    })
    formobj.hide()
    formobj.title.position(400,200)
    database.ref('players/'+formobj.input.value()).set({
      name:formobj.input.value(),
      traveledDistance:0,
    })
    let gamestateref = database.ref('/')
    gamestateref.on('value',(data)=>{
      gameState = data.val().gameState
    })
    database.ref('/').update({
      'gameState':1
    })
  }) 
  let playerref = database.ref('players')
playerref.on('value',(data)=>{
  allPlayers=data.val()
})
let a 
let nameref = database.ref('players/'+formobj.input.value())
nameref.on('value',(data)=>{
  a = data.val().name
})
gameLoop.gameIteration()
}