import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { celsiusToFahrenheit, fahrenheitToCelsius } from "../changetemp";

const Weather = () => {
  const [weather, setWeather] = useState({});

  const success = (pos) => {
    console.log(pos);
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=eff8366e4075ef103eecc07fc05f166e`
      )
      .then((res) => setWeather(res.data));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  let kelvinToCelsius = Math.round(weather.main?.temp - 273.15);

  let decimal = kelvinToCelsius.toFixed(1);

  const [temperature, setTemperature] = useState();

  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {
    setTemperature(decimal);
  }, [weather, decimal]);

  return (
    <div className="weather-app">
      <h1>Weather App</h1>

      <h2>
        {weather.name} - {weather.sys?.country}
      </h2>

      <div className="sectioneOne">
        <p>{weather.weather?.[0].main}</p>

        <img
          src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
          alt="weatherimg"
        />
      </div>

      <p>
        <i class="fa-solid fa-temperature-high"></i> Temperature: {temperature}
      </p>

      <p>
        <i class="fa-solid fa-wind"></i> Wind Speed: {weather.wind?.speed}m/s
      </p>

      <p>
        <i class="fa-solid fa-cloud"></i> Clouds: {weather.clouds?.all}%
      </p>

      <p>
        <i class="fa-solid fa-droplet"></i> Humidity: {weather.main?.humidity}%
      </p>

      <button
        className="button-convert"
        onClick={() => {
          if (isCelsius) {
            setTemperature(celsiusToFahrenheit(temperature));
            setIsCelsius(!isCelsius);
          }
          if (!isCelsius) {
            setTemperature(fahrenheitToCelsius(temperature));
            setIsCelsius(!isCelsius);
          }
        }}
      >
        {isCelsius ? "Change to °F" : "Change to °C"}
      </button>
      


        
    </div>
  );
};

export default Weather;
