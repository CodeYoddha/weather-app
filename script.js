async function getWeather(){

const city = document.getElementById("city").value;

const apiKey = "473f7f5b2280b23e00b9fee2a3fac47a";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

try {

const response = await fetch(url);
const data = await response.json();

if(data.cod !== 200){
document.getElementById("weather").innerHTML = "City not found";
return;
}

document.getElementById("weather").innerHTML =
`
Temperature: ${data.main.temp} °C <br>
Weather: ${data.weather[0].main} <br>
Humidity: ${data.main.humidity}%
`;

} catch(error){
document.getElementById("weather").innerHTML = "Error fetching weather";
}

}