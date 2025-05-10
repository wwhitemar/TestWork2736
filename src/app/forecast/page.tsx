'use client'

import { useState } from 'react'
import { ForecastData } from '@/services/weatherService'
import { weatherService } from '@/services/weatherService'
import SearchBar from '@/components/SearchBar'
import ForecastList from '@/components/ForecastList'

export default function ForecastPage() {
  const [forecast, setForecast] = useState<ForecastData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSearch = async (city: string) => {
    setLoading(true)
    setError(null)
    try {
      const data = await weatherService.getForecast(city)
      setForecast(data)
    } catch (err) {
      setError('Город не найден')
      setForecast(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="container">
      <h1 className="mb-4">Прогноз погоды</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <div className="alert alert-info">Загрузка...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {forecast && <ForecastList forecast={forecast} />}
    </main>
  )
} 