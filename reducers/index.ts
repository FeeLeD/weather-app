import { combineReducers } from 'redux';
import weather, { WeatherState } from '../reducers/weather';

export interface RootState {
  weather: WeatherState
}

export default combineReducers({
  weather
});