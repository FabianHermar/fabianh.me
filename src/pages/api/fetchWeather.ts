import axios from 'axios'
import type { WeatherData, LocationData } from '@/types/weather'

export const fetchWeather = async (): Promise<{ city: string; weather: WeatherData }> => {
  const ipInfoToken = import.meta.env.VITE_IPINFO_API_KEY;
  const openWeatherToken = import.meta.env.VITE_OPENWEATHER_API_KEY;
  console.log("Es lo que devuelve el env", import.meta.env)

  console.log("VITE_IPINFO_API_KEY", ipInfoToken)
  console.log("VITE_OPENWEATHER_API_KEY", openWeatherToken)

  try {
    const locationResponse = await axios.get<LocationData>(
      `https://ipinfo.io/json?token=${ipInfoToken}`
    )
    const { city, loc } = locationResponse.data
    const [ latitude, longitude ] = loc.split(',')

    const weatherResponse = await axios.get<WeatherData>(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${openWeatherToken}&units=metric`
    )

    return { city, weather: weatherResponse.data }

  } catch (error) {
    console.error("Error fetching weather data", error)
    throw error
  }
}