import axios from 'axios';

function getWeatherFromLatLon(lat, lon) {
  // Not good to put API key in like this, but it's a free key.
  // If this were an important production API key, I would use a secret
  // hiding strategy like using a .env. Or if this had a backend,
  // I would hide the key in the backend.
  return axios
    .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c8778b555955e7f8a461624b17189b53`)
    .then((response) => response.data);
}

export default { getWeatherFromLatLon };
