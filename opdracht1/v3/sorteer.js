/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


/*// SELECTEERT DE ID'S UIT DE HTML PAGINA WAAR DE AFBEELDINGEN IN KOMEN TE STAAN
var colorImages = document.querySelector("#putImagesHere");


var button = document.querySelector(button).value;

// ARRAY MET IMAGES
var imgArray = ["images/red1.jpg", "images/red2.jpg", "images/red3.jpg", "images/red4.jpg", "images/red5.jpeg", 
                "images/orange1.jpg", "images/orange2.jpg", "images/orange3.jpg", "images/orange4.jpg", "images/orange5.jpg", 
                "images/yellow1.jpg", "images/yellow2.jpg", "images/yellow3.jpg", "images/yellow4.jpg", "images/yellow5.jpg", 
                "images/green1.jpeg", "images/green2.jpg", "images/green3.jpg", "images/green4.jpg", "images/green5.jpg", 
                "images/blue1.jpg", "images/blue2.jpg", "images/blue3.jpg", "images/blue4.jpg", "images/blue5.jpg", 
                "images/purple1.jpg", "images/purple2.jpg", "images/purple3.jpg", "images/purple4.jpg", "images/purple5.jpg", 
                "images/pink1.jpg", "images/pink2.jpg", "images/pink3.jpg", "images/pink4.jpg", "images/pink5.jpg"];

// FUNCTIE OM DE AFBEELDINGEN TE LATEN VERDWIJNEN ALS ER OP EEN VAN DE KNOPPEN WORDT GEKLIKT
function hideImages(event) {
    event.preventDefault();
    console.log('hoi');
    // VERBERGT ALLE AFBEELDINGEN DMV DOM MANIPULATIE
    document.querySelectorAll('img').classList.add(".hideAllImages");
}

//button.addEventListener('click', hideImages);

document.querySelector('button').addEventListener("click", hideImages);*/

var button = document.querySelectorAll('button');

function verwijderImages(){
    var alleImg = document.querySelectorAll('img');
    for(var i = 0; i < alleImg.length; i++){
        alleImg[i].classList.remove('show');
    }
}

for(var j = 0; j < button.length; j++){
    button[j].addEventListener('click', verwijderImages);
}

