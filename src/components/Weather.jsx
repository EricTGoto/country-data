import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Weather({ countryName, latlng }) {
  const [lat, lon] = latlng;

  const [weatherData, setWeatherData] = useState({});
  useEffect(() => {
    // Not good to put API key in like this, but it's a free key
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c8778b555955e7f8a461624b17189b53`).then((response) => {
      setWeatherData(response.data);
    });
  }, []);

  let weatherElement;
  if (Object.keys(weatherData).length !== 0) {
    const temp = Math.floor(weatherData.main.temp - 273);
    const { icon } = weatherData.weather[0];
    weatherElement = (
      <div>
        <div>{`Weather in ${countryName}`}</div>
        <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="weather_icon" />
        <div>{`Temperature ${temp}`}</div>
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
