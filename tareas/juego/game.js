//****** GAME LOOP ********//

var time = new Date();
var deltaTime = 0;
// Inicia el juego una vez el DOM está cargado
if(document.readyState === "complete" || document.readyState === "interactive"){
    setTimeout(Init, 1); // Añade un milisegundo de retardo para asegurar que el navegador termine de configurar cualquier aspecto interno antes de comenzar la ejecución de JavaScript.
}else{
    document.addEventListener("DOMContentLoaded", Init); 
}

function Init() {
    time = new Date();
    Start();
    Loop();
}

//  Bucle principal que se encarga de actualizar y renderizar el juego en cada frame
function Loop() {
    deltaTime = (new Date() - time) / 1000; // Calcula el tiempo transcurrido entre frames en segundos
    time = new Date();
    Update();
    requestAnimationFrame(Loop); //  Solicita al navegador que ejecute la función Loop() en el próximo frame de animación. Esta es una forma eficiente de crear bucles de animación en JavaScript, ya que se sincroniza con el refresco de la pantalla.
}

//****** GAME LOGIC ********//

var floorY = 22;
var velY = 0;
var impulse = 900;
var gravity = 2500;

var chickenPosX = 42;
var chickenPosY = floorY; 

var floorX = 0;
var velStage = 1280/3;
var gameVel = 1;
var score = 0;

var gameStarted = false;
var stopped = false;
var jumping = false;

var timeToObstacle = 2;
var minTimeObstacle = 0.7;
var maxTimeObstacle = 1.8;
var obstaclePosY = 16;
var obstacles = [];

var timeToCLoud = 0.5;
var minTimeCloud = 0.7;
var maxTimeCloud = 2.7;
var maxCloudY = 270;
var minCloudY = 100;
var clouds = [];
var cloudVel = 0.5;

var container;
var chicken;
var scoreText;
var floor;
var gameOver;

// Establece las referencias a los elementos del juego
function Start() {
    gameOver = document.querySelector(".game-over");
    floor = document.querySelector(".floor");
    container = document.querySelector(".container");
    scoreText = document.querySelector(".score");
    chicken = document.querySelector(".chicken");
    document.addEventListener("keydown", HandleKeyDown);
}

// Controla la actualización del juego en cada frame.
function Update() {
    if(stopped) return;
    
    MoveChicken();
    MoveFloor();
    CreateObstacles();
    CreateClouds();
    MoveObstacles();
    MoveClouds();
    DetectCollision();

    velY -= gravity * deltaTime;
}

// Controla que se presione la tecla asignada (botón de dirección arriba)
function HandleKeyDown(event){
    if(event.keyCode == 38){
        Jump();
    }
}

// Controla el salto del personaje
function Jump(){
    if(chickenPosY === floorY){
        jumping = true;
        velY = impulse;
    }
}

// Controla el movimiento del personaje
function MoveChicken() {
    chickenPosY += velY * deltaTime;
    if(chickenPosY < floorY){    
        TouchFloor();
    }
    chicken.style.bottom = chickenPosY + "px";
}

// Controla el que el personaje se pare al tocar el suelo
function TouchFloor() {
    chickenPosY = floorY;
    velY = 0;
    if(jumping){
        chicken.classList.add("chicken-running");
    }
    jumping = false;
}


// Controla el movimiento del suelo
function MoveFloor() {
    floorX += CalcDisplacement();
    floor.style.left = -(floorX % container.clientWidth) + "px";
}

// Controla la velocidad de desplazamiento
function CalcDisplacement() {
    return velStage * deltaTime * gameVel;
}

// Controla el cambio de apariencia del personaje y su detención al estrellarse
function Crash() {
    chicken.classList.remove("chicken-running");
    chicken.classList.add("fried-chicken");
    stopped = true;
}

// Controla la creación de obstáculos
function CreateObstacles() {
    timeToObstacle -= deltaTime;
    if(timeToObstacle <= 0) {
        var obstacleDiv = document.createElement("div");
        container.appendChild(obstacleDiv);
        obstacleDiv.classList.add("obstacle-colonel");
        if(Math.random() > 0.5) obstacleDiv.classList.add("obstacle-kfc");
        obstacleDiv.posX = container.clientWidth;
        obstacleDiv.style.left = container.clientWidth + "px";
    
        obstacles.push(obstacleDiv);
        timeToObstacle = minTimeObstacle + Math.random() * (maxTimeObstacle-minTimeObstacle) / gameVel;
    }
}

// Controla la creación de nubes
function CreateClouds() {
    timeToCLoud -= deltaTime;
    if(timeToCLoud <= 0) {
        var cloudDiv = document.createElement("div");
        container.appendChild(cloudDiv);
        cloudDiv.classList.add("cloud");
        cloudDiv.posX = container.clientWidth;
        cloudDiv.style.left = container.clientWidth+"px";
        cloudDiv.style.bottom = minCloudY + Math.random() * (maxCloudY-minCloudY) + "px";
        
        clouds.push(cloudDiv);
        timeToCLoud = minTimeCloud + Math.random() * (maxTimeCloud-minTimeCloud) / gameVel;
    }
}


// Controla el movimiento de los obstáculos
function MoveObstacles() {
    for (var i = obstacles.length - 1; i >= 0; i--) {
        if(obstacles[i].posX < -obstacles[i].clientWidth) {
            obstacles[i].parentNode.removeChild(obstacles[i]);
            obstacles.splice(i, 1);
            WinPoints();
        }else{
            obstacles[i].posX -= CalcDisplacement();
            obstacles[i].style.left = obstacles[i].posX + "px";
        }
    }
}

// Controla el movimiento de las nubes
function MoveClouds() {
    for (var i = clouds.length - 1; i >= 0; i--) {
        if(clouds[i].posX < -clouds[i].clientWidth) {
            clouds[i].parentNode.removeChild(clouds[i]);
            clouds.splice(i, 1);
        }else{
            clouds[i].posX -= CalcDisplacement() * cloudVel;
            clouds[i].style.left = clouds[i].posX + "px";
        }
    }
}

// Controla 
function WinPoints() {
    score++;
    scoreText.innerText = `Puntuación: ${score}`;
    if(score == 10){
        gameVel = 1.25;
        container.classList.add("midday");
    }else if(score == 20) {
        gameVel = 1.5;
        container.classList.add("afternoon");
    } else if(score == 30) {
        gameVel = 2;
        container.classList.add("night");
    }
    floor.style.animationDuration = (3/gameVel)+"s";
}

// Controla el bloqueo de la pantalla al finalizar del juego
function GameOver() {
    Crash();
    gameOver.style.display = "block";
}

// Verifica si se producen colisiones
function DetectCollision() {
    for (var i = 0; i < obstacles.length; i++) {
        if(obstacles[i].posX > chickenPosX + chicken.clientWidth) { //  Comprueba si el obstáculo está más adelante en el eje X que el extremo derecho del personaje 
            // Ha evitado el obstaculo
            break;
        } else {
            if(IsCollision(chicken, obstacles[i], 10, 30, 15, 20)) {
                GameOver();
            }
        }
    }
}

// Establece los parámetros necesario para saber lo que es una colisión
function IsCollision(character, hindrance, paddingTop, paddingRight, paddingBottom, paddingLeft) {
    var characterRect = character.getBoundingClientRect(); // Obtiene los rectángulos delimitadores (bounding rectangles) del personaje y el obstaculo (hindrance)
    var hindranceRect = hindrance.getBoundingClientRect();

    return !(
        ((characterRect.top + characterRect.height - paddingBottom) < (hindranceRect.top)) ||
        (characterRect.top + paddingTop > (hindranceRect.top + hindranceRect.height)) ||
        ((characterRect.left + characterRect.width - paddingRight) < hindranceRect.left) ||
        (characterRect.left + paddingLeft > (hindranceRect.left + hindranceRect.width))
    );
}

