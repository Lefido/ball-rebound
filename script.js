


const game    = document.querySelector('#game')

import Ball from "./Ball.js";

var tabBall = [];

let button_add_ball = document.querySelector('.add-ball');

button_add_ball.addEventListener('click', () => {
    let ball = new Ball(tabBall.length + 1);
    tabBall.push(ball);
})

let button_remove_ball= document.querySelector('.remove-ball');

button_remove_ball.addEventListener('click', () => {
   
    let all_ball = document.querySelectorAll('.ball');
    all_ball.forEach((ball) => {
        ball.remove();
    })

    tabBall = []

})

setInterval(running, 1000/60);

function running() {

    ball_move();

}

function ball_move() {

    tabBall.forEach((ball, id) => {
       
        ball.move();
        
    })

}
