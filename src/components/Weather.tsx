import React, { useEffect, useState} from 'react'
import { fetchWeather } from '@/pages/api/fetchWeather'
import type { WeatherData } from '@/types/weather'
import { getWeatherIcon } from '@/pages/api/getWeatherIcon'

const CurrentWeather: React.FC = () => {
  const [location, setLocation] = useState<string | null>(null)
  const [weather, setWeather] = useState<WeatherData | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { city, weather } = await fetchWeather()
        setLocation(city)
        setWeather(weather)
      } catch (error) {
        console.error("Failed to fetch weather data", error)
      }
    }
    fetchData()
  }, [])

  if(!weather || !location) return <p className='text-white'>Loading...</p>

  const currentTime = new Date().getHours()
  const icon = getWeatherIcon(weather, currentTime)

  return (
    <div>
      <h2>{location}</h2>
      <img src={`/weather/${icon}`} alt={weather.weather[0].description} />
      <p>{weather.weather[0].description}</p>
      <p>Temperature: {weather.main.temp}°C</p>
    </div>
  )
}

export default CurrentWeather
