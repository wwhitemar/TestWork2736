import axios from 'axios'

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export interface WeatherData {
  name: string
  main: {
    temp: number
    feels_like: number
    humidity: number
    pressure: number
  }
  wind: {
    speed: number
  }
  weather: Array<{
    description: string
    icon: string
  }>
}

export interface ForecastData {
  list: Array<{
    dt: number
    main: {
      temp: number
      feels_like: number
      humidity: number
      pressure: number
    }
    weather: Array<{
      description: string
      icon: string
    }>
    wind: {
      speed: number
    }
    dt_txt: string
  }>
  city: {
    name: string
  }
}

class WeatherService {
  async getCurrentWeather(city: string): Promise<WeatherData> {
    try {
      console.log('Fetching weather for city:', city)
      console.log('Using API key:', API_KEY)
      
      const response = await axios.get(`${BASE_URL}/weather`, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric',
          lang: 'ru'
        }
      })
      
      console.log('Weather API response:', response.data)
      return response.data
    } catch (error: any) {
      console.error('Error fetching weather:', error.response?.data || error.message)
      throw new Error(error.response?.data?.message || 'Ошибка при получении данных о погоде')
    }
  }

  async getForecast(city: string): Promise<ForecastData> {
    try {
      console.log('Fetching forecast for city:', city)
      
      const response = await axios.get(`${BASE_URL}/forecast`, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric',
          lang: 'ru'
        }
      })
      
      console.log('Forecast API response:', response.data)
      return response.data
    } catch (error: any) {
      console.error('Error fetching forecast:', error.response?.data || error.message)
      throw new Error(error.response?.data?.message || 'Ошибка при получении прогноза погоды')
    }
  }
}

export const weatherService = new WeatherService() 