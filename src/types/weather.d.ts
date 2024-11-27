export interface WeatherData {
	main: {
		temp: number
		humidity: number
		temp_min: number
		temp_max: number
	}
	visibility: number
	weather: {
		main: string
		description: string
	}[]
	wind: {
		speed: number
	}
	clouds: {
		all: number
	}
}

export interface LocationData {
	city: string
	loc: string
}
