

const game    = document.querySelector('#game');

export default class Ball {
    constructor(name) {

        let taille = 20 + rand(150);
        let ball = document.createElement('div')
        ball.classList.add('ball')
        ball.style.display = "flex"
        ball.style.justifyContent = "center"
        ball.style.alignItems = "center"
        // ball.innerHTML = name
        ball.style.fontSize = taille / 4 + "px"
      
        // ball.style.backgroundColor = `rgb(${100 + rand(155)},${100 + rand(155)},${100 + rand(155)})`
        let numBall = 1 + rand(11);
        // console.log(numBall)
        ball.style.background =  `url('assets/ball_${numBall}.png') center / cover`
        ball.style.width = taille + "px"
        ball.style.height = taille + "px"
        ball.style.borderRadius = "50%"
        ball.style.position = "absolute"
        
        game.appendChild(ball);

       let posX = rand(game.clientWidth - taille)
       let posY = - taille // rand(game.clientHeight / 4);

       this.ball = ball
       this.r = 0
       this.vx = 20 + rand(30)

       let direction = rand(2)
       
       if (direction == 0) { this.vx = - this.vx}

       this.gy = 1
       this.m =  Math.round(taille / 20)

       this.py = this.m + this.gy 
       this.y = - taille - this.py
       this.x = posX
       this.y_max = game.clientHeight - this.ball.clientHeight
       this.x_max = game.clientWidth - this.ball.clientWidth
       this.draw();
       
    }

    move() {

        this.r = this.r + (this.vx / (this.ball.clientWidth / 100))

        if (this.r > 360) {this.r = 1}
        if (this.r < 1) {this.r = 360}

        this.ball.style.transform = "rotate(" + this.r + "deg)";


        if (this.vx > 0) {
            this.vx = this.vx - 0.05
            if (this.vx < 0) { this.vx = 0}
            
        } else if (this.vx < 0) {
            this.vx = this.vx + 0.05
            if (this.vx > 0) { this.vx = 0}
        }

        this.x = this.x + this.vx

        if (this.x >= this.x_max || this.x <= 0) {

            if (this.x >= this.x_max) {this.x = this.x_max}
            if (this.x <= 0) {this.x = 0}
            this.vx = - this.vx

            this.ball.classList.toggle('r-right')
            this.ball.classList.toggle('r-left')
           
        }

        

        this.py += this.m + this.gy 
        this.y = this.y + this.py

        if (this.y >= this.y_max  ) {
           
            this.y = this.y_max
            this.py = - this.py

        }

        this.draw()

    }

    draw() {

        this.ball.style.left = this.x + "px"
        this.ball.style.top = this.y + "px"

    }

}

function rand(value) {

    return Math.floor(Math.random() * value)

}