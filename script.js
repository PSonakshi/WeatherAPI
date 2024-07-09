const apikey= "098a8768fac0113108178abe04c6842c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox= document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherIcon = document.querySelector(".icon");

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = '#d8f9ff';
        body.style.color = '#152238';
        body.style.transition = '2s';
    }else{
        body.style.background = '#152238';
        body.style.color = '#d8f9ff';
        body.style.transition = '2s';
    }
});
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".cityname").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".Feelslike").innerHTML = Math.round(data.main.feels_like) + "°C" ;
    document.querySelector(".maxt").innerHTML = Math.round(data.main.temp_max)+  "°C";
    document.querySelector(".mint").innerHTML = Math.round(data.main.temp_min)+  "°C";
    document.querySelector(".Humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".Pressure").innerHTML = data.main.pressure + "mb";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src= "icons/icons8-cloud-100.png";
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src= "icons/sun.png";
    }
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src= "icons/icons8-heavy-rain-100.png";
    }
    else if (data.weather[0].main == "Snow"){
        weatherIcon.src= "icons/snow_99609.png"
    }
    
}

searchbtn.addEventListener('click', ()=> {
    checkWeather(searchbox.value);
})