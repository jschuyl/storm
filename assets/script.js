let APIkey = '528234272a9750cafc4559111822d230';
const changeURL = '&exclude=';
const testLat = '32.21';
const testLon = '-110.94';
const baseURL = 'https://api.openweathermap.org/data/2.5/onecall';
const testURL = 'https://api.openweathermap.org/data/2.5/weather?lat=' + testLat + '&lon=' + testLon + '&appid=' + APIkey;
let testLocation = ''



function findWeather() {
    var buttonEl = document.getElementById('search-button');
    buttonEl.addEventListener('click', searchWeather);

    function searchWeather(event) {
        const clickedButton = event.target.id;
        const targetInput = clickedButton.replace('-button', '');
        const locationInput = document.getElementById(targetInput);
        let testLocation = locationInput.value;
        console.log(locationInput.value);
        
        const geoURL ='http://api.openweathermap.org/geo/1.0/direct?q=' + testLocation + '&appid=' + APIkey;

        fetch(geoURL)
        .then(function (response) {
            console.log(response.json())
            if (!response.ok) {
                alert('Not Working')
            }
            console.log(response.status, response.statusText)
    })
    }
    
}
findWeather();

function localStorageList(){
    searchArray = [];
}






/*
console.log(testGeoURL)
fetch(testGeoURL)
.then(function (response) {
    console.log(response.json())
    if (!response.ok) {
        alert('Not Working')
    }
    console.log(response.status, response.statusText)
})
fetch(testURL)
.then(function (response) {
    console.log(response.json())
    if (!response.ok) {
        alert('Not Working')
    }
    console.log(response.status, response.statusText)
})*/