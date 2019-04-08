/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var movies = request.response;
    headerInhoud(movies);
    //showMovies(movies);
}

function headerInhoud(jsonObj) {
    console.log(jsonObj);
    for (var lijstObj of jsonObj) {
        var myH1 = document.createElement('h1');
        myH1.textContent = lijstObj.title;
        var header = document.querySelector('header');
        header.appendChild(myH1);
    }
}
