//API Key and additional elements
const apiKey = "404f81b19f40dfd3579cd80f6a954fb8"
const search = document.getElementById("search");
const form = document.getElementById("search-form");
const currentTemp = document.getElementById("temp");
const currentConditions = document.getElementById("condition");
const currentHumidity = document.getElementById("humidity");
const currentWind = document.getElementById("wind");
const forecastEl = document.getElementById("forecast-5-day")

//current date and time
function displayDateTime() {
    const date = new Date();
    const dateEl = document.getElementById("current-date");
    dateEl.textContent = 'Current date and time: ${date}';
}

//location submission event listener
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value;
    if (isValidZip(searchTerm)) {
        getWeatherByZip(searchTerm);
        addToSearchHistory(searchTerm);
    } else {
        getWeatherByCity(searchTerm);
        addToSearchHistory(searchTerm);
    }
    displayDateTime();
});

//add Open Weather to retreive data
function getWeatherByZip(zip) {
    const units = "imperial";
    const currentWeather = 'https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}';
    const forecast = 'https://api.openweathermap.org/data/2.5/forecast?zip=${zip}&appid=${apiKey}&units=${units}';
}

//Current Weather
fetch(currentWeather)
    .then((res) => res.json())
    .then((json) => {
        currentTemp.innerHTML = '${json.main.temp} &deg;F';
        currentConditions.innerHTML = json.weather[0].description;
        currentHumidity.innerHTML = 'Humidity; ${json.main.humidity}%';
        currentWind.innerHTML = 'Wind: ${json.wind.speed} mph';
    })

