


const game    = document.querySelector('#game')

import Ball from "./Ball.js";


var tabBall = [];
let nbBall = 5;

// for (let i = 0; i < nbBall; i++) {

    // let ball = new Ball();
    // tabBall.push(ball);

// }

// setInterval(function(){
//     let ball = new Ball();
//     tabBall.push(ball);
// }, 10000)

document.body.addEventListener('click', () => {
    let ball = new Ball();
    tabBall.push(ball);
})


setInterval(running, 1000/60);

function running() {

    ball_move()

   
}

function ball_move() {

    tabBall.forEach((ball, id) => {
       
        ball.move();
       
        // if (ball.p === -0) {
          
        // }

       

    })


}

