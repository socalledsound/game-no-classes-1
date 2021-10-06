// constants to set the canvas size to the size of the window
const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
// variables for the ball
let ballX = canvasWidth/2
let ballY = canvasHeight/2
let ballSize = canvasWidth/30
let ballColor = [220, 0, 220]
let ballSpeed = 10
// variables for the goal
let goalSize = canvasWidth/20
let goalX = canvasWidth - canvasWidth/10
let goalY = canvasHeight/2 - goalSize
let goalColor = [220,220,0]



function setup(){
    createCanvas(canvasWidth, canvasHeight)

}

function draw(){
    background(30)

    // draw the goal
    fill(goalColor)
    rect(goalX, goalY, goalSize, goalSize)
    // draw the ball
    fill(ballColor)
    ellipse( ballX, ballY, ballSize)

}

// make the ball move
function keyPressed(){
    console.log(key)
    if(key === 'd'){
        ballX+=ballSpeed
    }
    // now make it go other directions when other keys are pressed
}
