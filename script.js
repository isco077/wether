function search() {
    let cityName = document.querySelector("#cityName").value;
    fetch(
        https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=a29af7578ca4cd472bc0b509b6acdde7&units=metric
    )
        .then(function (res) {
            if (!res.ok) {
                throw new Error(
                    "Network response was not ok " + res.statusText
                );
            }
            return res.json();
        })
        .then(function (val) {
            console.log(val);
            displayWeather(val);
        })
        .catch(function (error) {
            console.error(
                "There has been a problem with your fetch operation:",
                error
            );
        });
}