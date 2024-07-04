export interface WeatherData {
  cod: string
  message: number
  cnt: number
  list: WeatherDataList[]
  clouds: Clouds
  wind: Wind
}

export interface WeatherDataList {
  dt: number
  main: WeatherDataMain
  weather: WeatherDataWeather[]
}

export interface WeatherDataMain {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
  temp_kf: number
}

export interface WeatherDataWeather {
  id: number
  main: string
  description: string
  icon: string
}

export interface Clouds {
  all: number
}

export interface Wind {
  speed: number
  deg: number
  gust: number
  
}