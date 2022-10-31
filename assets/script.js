let APIkey = '1eeaa1ce3b0dd35be268690b4652258a';
const changeURL = '&exclude=';
const testLat = '32.21';
const testLon = '-110.94';
const baseURL = 'https://api.openweathermap.org/data/2.5/onecall';

let testLocation = ''

let searchArray = ['Phoenix',  'Tucson', 'New York', 'London', 'Tokyo', 'Beijing'];


function getWeather(data) {
    const currentLat = data[0].lat;
    const currentLon = data[0].lon;
    const testURL = 'https://api.openweathermap.org/data/2.5/weather?lat=' + currentLat + '&lon=' + currentLon + '&units=imperial&appid=' + APIkey;

    fetch(testURL)
    .then(function (response) {
        return response.json() 
    }) .then(function (data) {
        disperseData(data)
    })

}
function findLocation() {
    var buttonEl = document.getElementById('search-button');
    buttonEl.addEventListener('click', searchLocation);

    function searchLocation(event) {
        const clickedButton = event.target.id;
        const targetInput = clickedButton.replace('-button', '');
        const locationInput = document.getElementById(targetInput);
        let testLocation = locationInput.value;
        
        const geoURL ='http://api.openweathermap.org/geo/1.0/direct?q=' + testLocation + '&appid=' + APIkey;

        fetch(geoURL)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            getWeather(data) // calls getWeather
        })
    }
    
}
findLocation();

function disperseData(data) {
    currentTemp = data.main.temp;
    windSpeed = data.wind.speed;
    humidity = data.main.humidity;
    howTheSkyLooks = data.weather.main;
    tempShow = document.getElementById('current-temp');
    tempShow.textContent = currentTemp;
    windShow = document.getElementById('current-wind');
    windShow.textContent = windSpeed;
    humidityShow = document.getElementById('current-humidity');
    humidityShow.textContent = humidity;
    showHowTheSkyLooks = document.getElementById('current-uv');
    showHowTheSkyLooks.textContent = howTheSkyLooks;
}

function searchHistoryList() {
    if (searchArray.length > 5) {
        searchArray.pop()
    } for (i = 0; i < searchArray.length; i++) {
        
        const historyHolder = document.getElementById('history-holder');

        function createHistoryButton() {
            const newBtn = document.createElement('button');
            console.log('add');
            newBtn.classList.add('list-group-item', 'list-group-item-action', 'rounded');
            newBtn.ariaCurrent = true;
            newBtn.textContent = searchArray[i];
            historyHolder.appendChild(newBtn)
        }
    createHistoryButton();
}

const btnAdd = document.querySelector('.search-button');

btnAdd.addEventListener('click', createHistoryButton);

}
searchHistoryList();
/*
console.log(testGeoURL)
fetch(testGeoURL)
.then(function (response) {
    console.log(response.json())
    if (!response.ok) {
        alert('Not Working')
    }
    console.log(response.status, response.statusText)
})*/
