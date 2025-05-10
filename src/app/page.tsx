'use client'

import { useState } from 'react'
import { WeatherData } from '@/services/weatherService'
import { weatherService } from '@/services/weatherService'
import { useWeatherStore } from '@/store/weatherStore'
import SearchBar from '@/components/SearchBar'
import WeatherCard from '@/components/WeatherCard'

export default function HomePage() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const addToFavorites = useWeatherStore((state) => state.addFavorite)
  const removeFromFavorites = useWeatherStore((state) => state.removeFavorite)
  const favorites = useWeatherStore((state) => state.favorites)

  const handleSearch = async (city: string) => {
    setLoading(true)
    setError(null)
    try {
      console.log('Searching for city on homepage:', city)
      const data = await weatherService.getCurrentWeather(city)
      console.log('Received weather data:', data)
      setWeather(data)
    } catch (err: any) {
      console.error('Error in homepage search:', err)
      setError(err.message || 'Город не найден')
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  const isFavorite = weather ? favorites.some(fav => fav.name === weather.name) : false

  const handleToggleFavorite = () => {
    if (!weather) return
    if (isFavorite) {
      removeFromFavorites(weather.name)
    } else {
      addToFavorites(weather)
    }
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Погода в городе</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <div className="alert alert-info mt-4">Загрузка...</div>}
      {error && <div className="alert alert-danger mt-4">{error}</div>}
      {weather && (
        <WeatherCard
          weather={weather}
          isFavorite={isFavorite}
          onToggleFavorite={handleToggleFavorite}
        />
      )}
    </main>
  )
} 