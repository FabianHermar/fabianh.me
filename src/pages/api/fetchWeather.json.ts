import type { APIRoute } from 'astro'
import axios from 'axios'
import type { WeatherData, LocationData } from '@/types/weather'
import { getSecret } from 'astro:env/server'

const OPENWEATHER_API_KEY = getSecret('OPENWEATHER_API_KEY')
const IPINFO_API_KEY = getSecret('IPINFO_API_KEY')

export const GET: APIRoute = async () => {
	try {
		const locationResponse = await axios.get<LocationData>(
			`https://ipinfo.io/json?token=${IPINFO_API_KEY}`
		)
		const { city, loc } = locationResponse.data
		const [latitude, longitude] = loc.split(',')

		const weatherResponse = await axios.get<WeatherData>(
			`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPENWEATHER_API_KEY}&units=metric`
		)
		const data = { city, weather: weatherResponse.data }

		return new Response(JSON.stringify(data), {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
		})
	} catch (error) {
		console.error('Error fetching weather data', error)
		return new Response(JSON.stringify({ error: 'Failed to fetch weather data' }), {
			status: 500,
			headers: {
				'Content-Type': 'application/json',
			},
		})
	}
}
