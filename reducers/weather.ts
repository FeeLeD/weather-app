import { SET_CITY_NAME, WeatherActionTypes } from '../actions/constants';

export interface WeatherState {
  city: string
}

const initialState: WeatherState = {
  city: ''
}

export default function(state = initialState, action: WeatherActionTypes): WeatherState {
  const { type, payload } = action;
  switch(type) {
    case SET_CITY_NAME:
      return {
        ...state,
        city: payload
      }
    default:
      return state;
  }
};