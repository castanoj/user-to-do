import axios from "axios";
import React, { useEffect, useState } from "react";

const WeatherApp = () => {
  const [weather, setWeather] = useState({});
  const [degrees, setDegrees] = useState(0);
  const [isKelvin, setIsKelvin] = useState(true);
  const [maxDeg, setMaxDeg] = useState(0);
  const [minDeg, setMinDeg] = useState(0);

  useEffect(() => {
    function success(pos) {
      var crd = pos.coords;

      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=ee8570035ff92725183a8a0417f44dcd`
        )
        .then((res) => {
          setWeather(res.data);
          setDegrees(res.data.main?.temp);
          setMaxDeg(res.data.main?.temp_max);
          setMinDeg(res.data.main?.temp_min);
        });
    }

    function error(err) {
      window.alert("You have to allow kown us your location");
    }

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  console.log(weather);

  const changeDeg = () =>{
    if(isKelvin){
        // Turn from kelvin degrees to celsius degrees
        setDegrees(degrees-273.15);
        setMaxDeg(maxDeg-273.15);
        setMinDeg(minDeg-273.15);
        setIsKelvin(false);
    } else {
        // Turn from celsius degrees to kelvin degrees
        setDegrees(degrees+273.15);
        setMaxDeg(maxDeg+273.15);
        setMinDeg(minDeg+273.15);
        setIsKelvin(true);
    }
}

  return (
    <div className="container">
      <div>
        <p>{weather.name} - {weather.sys.country} </p>
      </div>

    <div className="information">


      <img
        src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
        alt=""/>
        <p>{Math.ceil(degrees)} {isKelvin ? "°k" : "°C"}</p>

      <p>{weather.weather?.[0].main}</p>

      <p>Wind Speed: {weather.wind.speed}</p>

      <p>Clouds: {weather.clouds.all}</p>


    </div>


      <button onClick={changeDeg}><i className='bx bx-sync'></i><p>Change Degrees</p></button>
    </div>
  );
};

export default WeatherApp;
