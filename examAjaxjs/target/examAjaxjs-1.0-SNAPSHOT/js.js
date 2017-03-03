var svg = document.getElementById("svg2");
var selected;
var output = document.getElementById("output");
var url = "http://restcountries.eu/rest/v1/alpha?codes=";
var config = {method: 'get'};

svg.addEventListener("click",clickHandler);

function clickHandler(evt){
    url = "http://restcountries.eu/rest/v1/alpha?codes=";
    selected = evt.target;
    url += selected.id;
    
    var promise = fetch(url, config);

    promise.then(function (response) {
        return response.text();
    }).then(function (text) {
        alert(text);
    });
    selected.style.fill("red");
};

