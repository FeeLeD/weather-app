import { SET_CITY_NAME, WeatherActionTypes } from './constants';

export const setCityName = (name: string): WeatherActionTypes => {
  return {
    type: SET_CITY_NAME,
    payload: name
  }
};

