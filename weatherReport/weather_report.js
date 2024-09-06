function showweatherDetails(event){
    event.preventDefault();
    const city = document.getElementById('city').value;
    const lat = document.getElementById('lat').value;
    const long = document.getElementById('long').value;
    const apiKey = 'API KEY';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const apiUrl2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp} &#8451;</p>
            <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });

    fetch(apiUrl2)
    .then(response => response.json())
        .then(data => {
            const weatherInfo2 = document.getElementById('weatherInfo2');
            weatherInfo2.innerHTML = `<h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp} &#8451;</p>
            <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );
document.getElementById('weatherForm2').addEventListener('submit',showweatherDetails );