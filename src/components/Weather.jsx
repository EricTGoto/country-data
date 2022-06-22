import React, { useState, useEffect } from 'react';
import WeatherData from '../services/WeatherData';

function Weather({ countryName, latlng }) {
  const [lat, lon] = latlng;

  const [weatherData, setWeatherData] = useState({});
  useEffect(() => {
    WeatherData
      .getWeatherFromLatLon(lat, lon)
      .then((data) => setWeatherData(data));
  }, []);

  let weatherElement;
  if (Object.keys(weatherData).length !== 0) {
    const temp = Math.floor(weatherData.main.temp - 273);
    const { icon } = weatherData.weather[0];
    weatherElement = (
      <div>
        <div>{`Weather in ${countryName}`}</div>
        <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="weather_icon" />
        <div>{`Temperature: ${temp} degrees Celcius`}</div>
      </div>
    );
  } else {
    weatherElement = <div />;
  }

  return (
    weatherElement
  );
}

export default Weather;
