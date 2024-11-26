export interface WeatherData {
  main: {
    temp: number
    humedity: number
  }
  weather: {
    main: string
    description: string
  }[]
  wind: {
    speed: number
  }
}

export interface LocationData {
  city: string
  loc: string
}