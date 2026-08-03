const weatherAPI =
"https://api.open-meteo.com/v1/forecast";


navigator.geolocation.getCurrentPosition(
async position => {


let lat = position.coords.latitude;
let lon = position.coords.longitude;


let response =
await fetch(
`${weatherAPI}?latitude=${lat}&longitude=${lon}&current_weather=true`
);


let data = await response.json();


document.getElementById("temperature")
.innerHTML =
data.current_weather.temperature + "°F";


document.getElementById("condition")
.innerHTML =
"Current Weather";


document.getElementById("location")
.innerHTML =
"Your Location";


},
error => {

document.getElementById("condition")
.innerHTML =
"Location permission denied";

});
