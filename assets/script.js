let APIkey = '528234272a9750cafc4559111822d230';
const changeURL = '&exclude=';
const testLat = '32.21';
const testLon = '-110.94';
const baseURL = 'https://api.openweathermap.org/data/2.5/onecall';
const testURL = 'https://api.openweathermap.org/data/2.5/weather?lat=' + testLat + '&lon=' + testLon + '&appid=' + APIkey;
let testLocation = ''

let searchArray = ['Phoenix',  'Tucson', 'New York', 'London', 'Tokyo', 'Beijing'];

/*console.log(testURL)

fetch(testURL)
.then(function (response) {
    console.log(response.json())
    if (!response.ok) {
        alert('Not Working')
    }
    console.log(response.status, response.statusText)
})
*/
function findWeather() {
    var buttonEl = document.getElementById('search-button', 'history-holder');
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
