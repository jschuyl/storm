const APIkey = '528234272a9750cafc4559111822d230';
const changeURL = '&exclude=';
const testLat = '32.21';
const testLon = '-110.94';
const baseURL = 'https://api.openweathermap.org/data/2.5/onecall';
const testURL = 'https://api.openweathermap.org/data/2.5/weather?lat=' + testLat + '&lon=' + testLon + '&appid=' + APIkey;

const weatherLocation = document.getElementById('search').value
const testGeoURL ='http://api.openweathermap.org/geo/1.0/direct?q=' + weatherLocation + '&appid=' + APIkey;



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
})