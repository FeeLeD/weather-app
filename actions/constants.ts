export const SET_CITY_NAME = 'SET_CITY_NAME';

interface SetCityNameAction {
  type: typeof SET_CITY_NAME
  payload: string
}

export type WeatherActionTypes = SetCityNameAction;