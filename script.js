


const game    = document.querySelector('#game')

import Ball from "./Ball.js";

var tabBall = [];

let button_add_ball = document.querySelector('.add-ball');
let button_remove_ball= document.querySelector('.remove-ball');

button_add_ball.addEventListener('click', () => {
    let ball = new Ball(tabBall.length + 1);
    tabBall.push(ball);
    button_remove_ball.style.display = "block";
})



button_remove_ball.addEventListener('click', () => {

    if (tabBall.length != 0 ) {

        button_remove_ball.classList.add("secouer")
        setTimeout(function() {button_remove_ball.classList.remove("secouer")}, 250);
        
    }

   
    let all_ball = document.querySelectorAll('.ball');
    all_ball.forEach((ball) => {
        ball.remove();
    })

    tabBall = []

    button_remove_ball.style.display = "none";

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
