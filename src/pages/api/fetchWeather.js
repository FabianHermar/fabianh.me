import axios from 'axios'

export const fetchWeather = async () => {
  try {
    const locationResponse = await axios.get(
      `https://ipinfo.io/json?token=${process.env.IPINFO_API_KEY}`
    )
    const { city, loc } = locationResponse.data
    const [ latitude, longitude ] = loc.split(',')

    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
    )

    return { city, weather: weatherResponse.data }

  } catch (error) {
    console.error("Error fetching weather data", error)
    throw error
  }
}