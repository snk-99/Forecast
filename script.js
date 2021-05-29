// variable declaration
let City = "";
let searchCity = $("#search-city");
let searchButton = $("#search-button");
let clearButton = $("#clear-button");
let currentCity = $("#current-city");
let currentTemperature = $("#temperature");
let currentHumidty = $("#humidty");
let currentWspeed = $("#wind-speed");
let currentUvindex = $("#uv-index");
let sCity = [];

//searches the existance of the city from the storage
function find(c){
    for(let i=0; i<sCity.length; i++){
        if(c.toUpperCase()===sCity[i]){
            return -1;
        }
    }
    return 1;
}

// API key
let APIKEY="5e286da78fe47dec5201cf375d1cf198"
//display current and future weather
function displayWeather(event){
    event.preventDefault();
    if(searchCity.val().trim()!==""){
        city=searchCity.val().trim();
        currentCity(city);
    }
}

//AJAX call function
function currentWeather(city){
//URL for server side data
let queryURl="api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" +APIkey;
$.ajax({
    URL:queryURl,
    method:"GET",
}).then(function(responce){
    
}
}