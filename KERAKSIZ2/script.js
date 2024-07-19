// script.js
document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'bfa16d81602eac60e902262a142943ee'; // Bu yerga o'zingizning OpenWeatherMap API kalitingizni qo'ying
    const city = 'Tashkent';
    const updateButton = document.getElementById('updateButton');

    function fetchWeather() {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const weatherElement = document.getElementById('weather');
                weatherElement.innerHTML = ''; // Oldingi ma'lumotlarni tozalash
                const forecast = data.list.filter((_, index) => index % 8 === 0).slice(0, 5);

                forecast.forEach(day => {
                    const dayElement = document.createElement('div');
                    dayElement.classList.add('day');
                    const date = new Date(day.dt_txt);
                    dayElement.innerHTML = `
                        <h2>${date.toLocaleDateString('uz-UZ', { weekday: 'long' })}</h2>
                        <p>${date.toLocaleDateString('uz-UZ')}</p>
                        <p>Temperatura: ${day.main.temp} °C</p>
                        <p>Ob-havo: ${day.weather[0].description}</p>
                    `;
                    weatherElement.appendChild(dayElement);
                });
            })
            .catch(error => console.error('Error fetching weather data:', error));
    }

    updateButton.addEventListener('click', fetchWeather);
    fetchWeather(); // Sahifa yuklanganda havo ma'lumotlarini olish
});
