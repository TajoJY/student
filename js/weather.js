const API_KEY = "80ed914ed06143556a49da4f5b0a8fb2"

function onGeoOk(position){
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
            const weather = document.querySelector("#weather span:first-child")
            const city = document.querySelector("#weather span:last-child")
        city.innerText = `\n${data.name}`;
        weather.innerText = `Today's Weather\n${data.weather[0].main}\n${data.main.temp}°C` 
    });
}

function onGeoError(){
    alert("can't find you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

