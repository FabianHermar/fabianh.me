import type { WeatherData } from '@/types/weather'

export const getWeatherIcon = (weather: WeatherData, currentTime: number):string => {
  if (!weather) return ""
  
  const isDaytime = currentTime >= 6 && currentTime < 18
  const condition = weather.weather[0].main.toLowerCase()

  switch (condition) {
    case "clear":
      return isDaytime ? "clear-day.svg" : "clear-night.svg";
    
    case "clouds":
      return 'cloudy.svg';

    case "rain":
      return 'rain.svg';

    case "drizzle":
      return 'drizzle.svg';

    case "thunderstorm":
      return 'thunderstorm.svg';
    
    case "snow":
      return 'snow.svg';
    
    case "fog":
      return 'fog.svg';

    case "sleet":
      return 'sleet.svg';

    case "tornado":
      return 'tornado.svg';

    default:
      return "clear-day.svg";
  }
}