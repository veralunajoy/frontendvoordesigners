/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var left = document.querySelector('.leftbutton');
var right = document.querySelector('.rightbutton');
var buttons = document.querySelectorAll('.button');


for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', check);
}

function check() {
    var className = this.classList[1];
    
    if(className === "leftbutton"){
        console.log('left');
    }
    else if(className === "rightbutton"){
        console.log('right');
    }
}
