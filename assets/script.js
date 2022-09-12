let APIkey = '528234272a9750cafc4559111822d230';
const changeURL = '&exclude=';
const testLat = '32.21';
const testLon = '-110.94';
const baseURL = 'https://api.openweathermap.org/data/2.5/onecall';
const testURL = 'https://api.openweathermap.org/data/2.5/weather?lat=' + testLat + '&lon=' + testLon + '&appid=' + APIkey;
let testLocation = ''

let searchArray = ['phoenix',  'Tucson', 'New York', 'London', 'Tokyo', 'Beijing'];

/*console.log(testURL)

fetch(testURL)
.then(function (response) {
    console.log(response.json())
    if (!response.ok) {
        alert('Not Working')
    }
    console.log(response.status, response.statusText)
})

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
*/
function searchHistoryButtonList() {
    if (searchArray.length > 5) {
        searchArray.pop()
    } for (i = 0; i < searchArray.length; i++) {
        const addBtn = document.querySelector('#sidebar')
        addBtn.addEventListener('click', addSearchHistoryButton)
        addBtn.addEventListener('click', buttonLocalStorage) 
    } 
    function buttonLocalStorage(event) {
        const clickedButton = event.target.id;
        const targetInput = clickedButton.replace('search', 'history');
        const input = document.getElementById(targetInput);
        input.value;
        localStorage.setItem(targetInput, input.value)
    }

    function addSearchHistoryButton() {
        const newBtn = document.createElement('button');
        console.log('add')
        newBtn.innerHTML = searchArray[i];
        document.body.appendChild(newBtn);
    }
}
searchHistoryButtonList();
function loadLocalStorage() {
    for (i = 0; i < timeArray.length; i++) {

    }
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
})*/
