
//script.js
//console.log(this);
//var uri = "https://api.data.amsterdam.nl/panorama/recente_opnames/2018/?format=json";
//var uri = "https://open.data.amsterdam.nl/Attracties.json";
//var uri = "https://open.data.amsterdam.nl/Activiteiten.json";
//var uri = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
//var uri = "http://dennistel.nl/movies"; //online, geen https
var uri = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json'; //json file op github
var button = document.querySelector("button");
var loaderElement = document.querySelector("span");
var section = document.querySelector('section');
//console.log("loaderElement",loaderElement);

////https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
function showData(jsonObj) {
  var films = jsonObj;
  console.log("showData films",films);

  for (var i = 0; i < films.length; i++) {
    console.log("film " + i);
    var filmpiekijken = document.createElement('article');

    //TITEL, COVER EN BESCHRIJVING
    var filmtitel = document.createElement('h2');
      filmtitel.textContent = films[i].title;
    var filmplot = document.createElement('p');
      filmplot.textContent = films[i].simple_plot;
    var filmcover = document.createElement('img');
      filmcover.src = films[i].cover;
    //myImg.textContent = films[i].cover;
    //console.log(filmcover.src);

    //GENRES
    var genres = films[i].genres;
    for (var n = 0; n < genres.length; n++) {
      console.log("genre: ",genres[n]);
    } //for: genres

    //REVIEWS
    var reviewslezen = document.createElement('ul');
    var reviewsheader = document.createElement('button');
      reviewsheader.textContent = "Lees reviews";
    //reviewslezen.appendChild(reviewsheader);
    var reviews = films[i].reviews;
    for (var j = 0; j < reviews.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = reviews[j].score + ' - ' + reviews[j].created_at;
      reviewslezen.appendChild(listItem);
    } //for: films

    //ALLE DATA KOPPELEN
    filmpiekijken.appendChild(filmtitel);
    filmpiekijken.appendChild(filmplot);
    filmpiekijken.appendChild(filmcover);
    filmpiekijken.appendChild(reviewsheader);
    filmpiekijken.appendChild(reviewslezen);

    //HTML INJECTION IN BESTAANDE SECTION
    section.appendChild(filmpiekijken);

    //functies om elementen toe te voegen
    reviewsheader.nr = i;
    reviewsheader.onclick = function(){
      console.log("click this = " + this.nr, this);
      console.log(this.parentNode);
      var reviews = this.parentNode.querySelector('ul');
      console.log(reviews);
      reviews.classList.toggle('show');
    }


  }//for: films
}

//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
function loadimagesmetXHR(){
  var request = new XMLHttpRequest();
  request.open('get', uri);
  request.responseType = 'json';
  //request.responseType = 'text'; // now we're getting a string!
  request.send();

  request.addEventListener("load", function(){
    //console.log("request load: ",request.response);
    loaderElement.classList.remove('show');
    console.log("XHR data",request.response);
    console.table(request.response);
    showData(request.response);
  });
//  request.onload = function() {
//      console.log("request.onload: ",request.response);
//    }
/*request.timeout = 10000; // time in milliseconds
  request.ontimeout = function(e) {
    // XMLHttpRequest timed out. Do something here.
    console.log("ontimeout: " +request.timeout+", het laden duurt te lang !",e);
  };
  */
  request.onerror = function() {
      console.log('Fetch Error', request.status);
  };
}
//loadimagesmetXHR();

//actie
button.onclick = function(){
  loaderElement.classList.add('show');
  //this.classList.add('hide');
  //hier iets doen met de button die laadt, dan weer gewoon een button wordt ...

  section.innerHTML = ""; //main leeghalen. just in case
  loadimagesmetXHR();
};






function loadRestApiFetch(){ //Rest Api call met Fetchs
  console.log("function loadRestApiFetch");

  loaderElement.classList.add('show');
  fetch(uri)
    .then(function(response) {
      console.log(response.headers.get('Content-Type'));
      console.log(response.headers.get('Date'));

      console.log(response.status);
      console.log(response.statusText);
      console.log(response.type);
      console.log(response.url);

      return response.json();
    })
    .then(function(myJson) {
      console.log('Request successful', myJson);
      //eerst de loader weg halen !
      loaderElement.classList.remove('show');
      //dan de html renderen
      //document.querySelector("p").innerHTML="joehoe";
      //console.log(myJson);
    })
    .catch(function(error) {
      console.log('Request failed', error)
    });
}
//loadRestApiFetch();