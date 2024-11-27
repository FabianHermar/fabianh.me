import axios from 'axios'
import type { WeatherData, LocationData } from '@/types/weather'
import { OPENWEATHER_API_KEY, IPINFO_API_KEY } from 'astro:env/client'

export const fetchWeather = async (): Promise<{ city: string; weather: WeatherData }> => {
	try {
		const locationResponse = await axios.get<LocationData>(
			`https://ipinfo.io/json?token=${IPINFO_API_KEY}`
		)
		const { city, loc } = locationResponse.data
		const [latitude, longitude] = loc.split(',')

		const weatherResponse = await axios.get<WeatherData>(
			`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPENWEATHER_API_KEY}&units=metric`
		)
		return { city, weather: weatherResponse.data }
	} catch (error) {
		console.error('Error fetching weather data', error)
		throw error
	}
}
