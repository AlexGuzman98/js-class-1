const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let xPosition = 0;
let yPosition = 0;
let xVelo = getRandomPosition(-10, 15);
let yVelo = getRandomPosition(-10,15);

let xPositionC = 0;
let yPositionC = 0;
let xVeloC = getRandomPosition(-10, 15);
let yVeloC = getRandomPosition(-10,15);

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //cuadrado
    ctx.fillStyle = "blue";
    ctx.fillRect(xPosition, yPosition, 50, 50,);

    //circulo
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(xPositionC , yPositionC, 30, 0, 2 * Math.PI);
    ctx.fill();

    if(xPosition + 50 > canvas.width) {
        xVelo = -xVelo;
    }else if (xPosition + xVelo < 0){
        xVelo = -xVelo;
    }
    if(yPosition + 50 > canvas.height) {
        yVelo = -yVelo;
    }else if (yPosition + yVelo < 0){
        yVelo = -yVelo;
    }
    if(xPositionC + 30 > canvas.width) {
        xVeloC = -xVeloC;
    }else if( xPositionC + xVeloC < 0){
        xVeloC = -xVeloC;
    }
    if(yPositionC + 30 > canvas.height) {
        yVeloC = -yVeloC;
    }else if( yPositionC + yVeloC < 0){
        yVeloC = -yVeloC;
    }
    xPosition += xVelo ;
    yPosition += yVelo ;

    xPositionC += xVeloC ;
    yPositionC += yVeloC ;

  return  window.requestAnimationFrame(draw);
}
function getRandomPosition(min, max){
    return Math.random() * (max - min) + min;
}
window.requestAnimationFrame(draw);

