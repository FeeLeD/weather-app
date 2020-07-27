export interface NavigationLink {
  name: string,
  href: string
}

export interface WeatherData {
  cod: string
  name: string,
  weather: Weather[],
  main: Main,
  wind: Wind,
  clouds: Clouds,
  sys: Sys
}

export type Weather = {
  id: number | string,
  main: string,
  description: string,
  icon: string
};

export type Main = {
  temp: number,
  feels_like: number,
  pressure: number,
  humidity: number
}

export type Wind = {
  speed: number,
  deg: number
}

export type Clouds = {
  all: number
}

export type Sys = {
  country: string
}