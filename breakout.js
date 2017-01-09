// This is the beginning for the BreakOut game from MDN
var canvas = document.getElementById('myCanvas') //var to grab the Canvas Element
var ctx = canvas.getContext('2d'); //2D Drawing API I have to research

var x = canvas.width/2; //Changes the width to..... divided by 2? Have to research
var y = canvas.height-30; //Changes the canvas to -30 height?...

//var x2 = 200
//var y2 = 200

var dx = 2
var dy = -2

//var dx2 = 4
//var dy2 = -2

var ballRadius = 10;

//var ballRadius2 = 15


var paddleHeight = 15;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;


function getRandomColor() { // I don't know currently how this works entirely, but I do know that it provides a Hexidecimal Value. HW
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color; //This stops the function from going continuously. Provides an endpoint if you will.
}

/*
function getRandomColor2() {
    var letters = '0123456789ABCDEF';
    var color2 = '#';
    for (var i = 0; i < 6; i++ ) {
        color2 += letters[Math.floor(Math.random() * 16)];
    }
    return color2;
}
*/

var color = getRandomColor();
//color2 = getRandomColor2();

function drawPaddle(){
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "0066CC";
  ctx.fill();
  ctx.closePath();
}

function draw() { //This function is for the movement of the ball. The sprites.
  ctx.clearRect(0,0, canvas.width, canvas.height); //Clears ball after every interval loop to avoid "trail"

  function drawBall1(){ //This function is for the styling of the Ball
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2); //Circle Syntax. x and y position, arc radius, start angle and end angle in radiuns
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
    console.log(ctx.fillStyle);
  }

drawBall1();
drawPaddle();

  x += dx; //Adds 2 to the x axis to keep placing the ball in different areas to simulate movement
  y += dy; //Same as above (dx)

  if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) { //The OR operator (||) returns true if one or both expressions are true, otherwise it returns false.
    dy = -dy; // This may seem confusing at first, but think of what this is saying. If y (canvas.height) + dy (-2) , or essentially if the current position of the ball is higher than the canvas.height, begin to reverse it's y trajectory ( -dy ).
    color = getRandomColor();
}
  if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
    color = getRandomColor();
}
if(rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX += 3;
}
else if(leftPressed && paddleX > 0) {
    paddleX -= 3;
}
}



/*
function draw2() { //This function is for the movement of the ball. The sprites.
  ctx.clearRect(0,0, canvas.width, canvas.height); //Clears ball after every interval loop to avoid "trail"

  function drawBall2(){ //This function is for the styling of the Ball
    ctx.beginPath();
    ctx.arc(x2, y2, ballRadius2, 0, Math.PI*2); //Circle Syntax. x and y position, arc radius, start angle and end angle in radiuns
    ctx.fillStyle = color2;
    ctx.fill();
    ctx.closePath();
    console.log(ctx.fillStyle);
  }

    drawBall2();

    x2 += dx2; //Adds 2 to the x axis to keep placing the ball in different areas to simulate movement
    y2 += dy2; //Same as above (dx)


    if(y2 + dy2 > canvas.height-ballRadius2 || y2 + dy2 < ballRadius) { //The OR operator (||) returns true if one or both expressions are true, otherwise it returns false.
      dy2 = -dy2; // This may seem confusing at first, but think of what this is saying. If y (canvas.height) + dy (-2) , or essentially if the current position of the ball is higher than the canvas.height, begin to reverse it's y trajectory ( -dy ).
      color = getRandomColor2();
  }
    if(x2 + dx2 > canvas.width-ballRadius2 || x2 + dx2 < ballRadius2) {
      dx2 = -dx2;
      color = getRandomColor2();
  }
  }
*/

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

setInterval(draw, 6);//Syntax : setInterval(function, milliseconds). This function runs a function forever in the given milliseconds unless told otherwise
//Having trouble figuring out why the ball won't go vertical






/*
ctx.beginPath(); //all the instructions sit in between beginpath() and closePath()
ctx.rect(400, 200, 50, 50); //first two values specify position (x,y), the other two values determine size (w, h)
ctx.fillStyle = '#0066FF'; //Color of the object
ctx.fill(); //fills the object witht he
ctx.closePath(); //all the instructions sit in between beginpath() and closePath()

ctx.beginPath();
ctx.arc(390, 180, 20, 0, Math.PI*2, false); //x and y coordinates, arc radius, start angle and end angle (in radians)
//lasttly, direction of drawing (false clockwise, true counterclockwise.) This last value is optional
ctx.fillStyle = 'orange';//As with CSS, you can use Hexidecimal, keywords,or rgba()
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(370, 115, 100, 40);
ctx.strokeStyle = 'rgba(400, 0, 40, 5)';//FOR WHATEVER REASON (something about rgba alpha channel) this thing has an apacity.
//This function is also a Red,green,blue combo. THe first three values are a combination of the colors to make the color you want.
//You don't have to fill. Strokes can also be done with this function.
ctx.stroke();
ctx.closePath();
*/
