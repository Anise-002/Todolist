(function(){
    const API_KEY = "24936146ee777e0a46cc56963b93d5b1";
    const errorText = document.querySelector('.error');
    const successCon = document.querySelector('.success');
    const weatherImg = successCon.querySelector('.weather-img');
    const currentCity = successCon.querySelector('.city');
    const weatherText = successCon.querySelector('.weather');
    const tempText = successCon.querySelector('.temper');
    
    
    function success(position){
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        fetch(url)
            .then((response) => response.json())
            .then((data)=> {
            const weather = data.weather[0].description;
            const city = data.name;
            const tempMax = data.main.temp_max;
            const tempMin = data.main.temp_min;
            const IconNum= data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${IconNum}@2x.png`;
            weatherImg.src = iconUrl; 
            currentCity.innerText = city;
            weatherText.innerText = weather;
            tempText.innerText = `${tempMax}°C / ${tempMin}°C`;
        });
        
        
        
        
    }
    function error(){
        errorText.innerText = `I couldn't find where you live.`;
    }
    
    navigator.geolocation.getCurrentPosition(success ,error);
})();
