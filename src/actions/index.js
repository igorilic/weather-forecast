/**
 * Actions
 */
import axios from 'axios';
import * as types from './actions';
const URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${types.API_KEY}`;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${types.API_KEY}`

export function fetchWeather(city) {
  
  const url = `${ROOT_URL}&q=${city}&type=like&sort=population&cnt=30`;
  const request = axios.get(url);

  return {
    type: types.FETCH_WEATHER,
    payload: request
  };
}
