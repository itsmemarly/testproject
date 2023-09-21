// Wrap your code in an event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    // Add an event listener to the search button
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', getWeather);

    async function getWeather() {
        const apiKey = 'c183ecb268msh96e48d3764a44a7p1ee200jsn4cd00a52a1f2';
        const baseUrl = 'https://weatherapi-com.p.rapidapi.com/current.json';

        // Get the user's input from the HTML input field
        const cityInput = document.querySelector('#cityInput'); // Use the correct ID
        const cityName = cityInput.value;

        // Construct the API URL with the user's input
        const apiUrl = `${baseUrl}?q=${encodeURIComponent(cityName)}`;

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(apiUrl, options);
            const result = await response.json(); // Parse the response as JSON
            console.log(result);

            // Update HTML elements with weather data
            const cityElement = document.querySelector('.city');
            const tempElement = document.querySelector('.temp');
            const iconElement = document.querySelector('.icon');
            const descriptionElement = document.querySelector('.description');
            const humidityElement = document.querySelector('.humidity');
            const windElement = document.querySelector('.wind');

            cityElement.textContent = `Weather in ${result.location.name}`;
            tempElement.textContent = `${result.current.temp_c}°C`;
            iconElement.src = result.current.condition.icon;
            descriptionElement.textContent = result.current.condition.text;
            humidityElement.textContent = `Humidity: ${result.current.humidity}%`;
            windElement.textContent = `Wind speed: ${result.current.wind_kph} km/h`;

                  // Construct the background image URL and log it
        const backgroundImageUrl = `url('https://source.unsplash.com/1600x900/?${cityName}')`;
        console.log('Background Image URL:', backgroundImageUrl);

        // Change the background image based on the city name
        document.body.style.backgroundImage = backgroundImageUrl;
        } catch (error) {
            console.error(error);
        }
    }
});
