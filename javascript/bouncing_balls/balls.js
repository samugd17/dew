let canvas = document.getElementsByTagName('canvas')[0];
let ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Ball {
    constructor (x, y, velX, velY, color, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
    }

    drawBall() {
        ctx.beginPath(); // empezamos a dibujar una forma en el canvas.
        ctx.fillStyle = this.color; // permite definir el color de la forma.
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI); // arc(x, y, radio, startAngle, endAngle) es un método de la API de Canvas 2D que añade un arco a la trayectoria centrada en la posición (x, y), con el radio r comenzando en startAngle y terminando en endAngle (en radianes). 
        ctx.fill(); // Finaliza el dibujo y rellena el área según el fillStyle.
    }

    updateBall() {
        if (this.x + this.size >= width) {
            this.velX = -this.velX;
        }

        if (this.x - this.size <= 0) {
            this.velX = -this.velX;
        }

        if (this.y + this.size >= height) {
            this.velY = -this.velY;
        }

        if (this.y - this.size <= 0) {
            this.velY = -this.velY;
        }

        this.x += this.velX;
        this.y += this.velY;
    }

    detectCollision() {
        for (let i = 0; i < balls.length; i++) {
            if (!(this === balls[i])) {
                let dx = this.x - balls[i].x;
                let dy = this.y - balls[i].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[i].size) {
                balls[i].color = this.color = `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`;
            }
        }
    }
}
}
let balls = [];

function loop() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 0, width, height);

    while (balls.length < 25) {
        let size = random(10,20);
        let ball = new Ball(
            random(0 + size, width - size),
            random(0 + size, height - size),
            random(-7, 7), 
            random(-7, 7),
            `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`,
            size,
        );
        balls.push(ball);
    }
    for (let i = 0; i < balls.length; i++) {
        balls[i].drawBall();
        balls[i].updateBall();
        balls[i].detectCollision();
    }
    requestAnimationFrame(loop);
}

loop();

