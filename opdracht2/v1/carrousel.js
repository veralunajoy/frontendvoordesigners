/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var buttonleft = document.querySelector('.leftbutton');
var buttonright = document.querySelector('.rightbutton');
//var buttons = document.querySelectorAll('.button');
var div = document.querySelector('div');
var currentImage = 1;


buttonleft.addEventListener('click', animateLeft);
buttonright.addEventListener('click', animateRight);

function animateLeft() {
    currentImage--;
    if(currentImage==2) {
        div.classList.add("moveleft2");
    }
    console.log('left', currentImage);
    div.classList.add("moveleft");
}

function animateRight() {
    currentImage++
    if(currentImage==2) {
        div.classList.add("moveright2");
    }
    console.log('right');
    div.classList.add("moveright");
}
















//function check() {
//    var className = this.classList[1];
//    
//    if(className === "leftbutton"){
//        console.log('left');
//        div.classList.add ='.moveleft';
//    }
//    else if(className === "rightbutton"){
//        console.log('right');
//        div.classList.add ='.moveright';
//    }
//}
