
const API_KEY = "f226352eff823cd89a5689294af43012";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then((data)=> {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:nth-child(2)");
        const temp = document.querySelector("#weather span:last-child");
        city.innerText = `📍 : ${data.name}`;
        weather.innerText = `\n☂ : ${data.weather[0].main}`;
        temp.innerText = `\n🌡 : ${data.main[0]}℃`;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);