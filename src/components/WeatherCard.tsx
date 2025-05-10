'use client'

import { WeatherData } from '@/services/weatherService'

interface WeatherCardProps {
  weather: WeatherData
  isFavorite: boolean
  onToggleFavorite: () => void
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather, isFavorite, onToggleFavorite }) => {
  return (
    <div className="card mt-4">
      <div className="card-body">
        <h2 className="card-title">{weather.name}</h2>
        <div className="weather-info">
          <p className="card-text">Температура: {weather.main.temp}°C</p>
          <p className="card-text">Ощущается как: {weather.main.feels_like}°C</p>
          <p className="card-text">Влажность: {weather.main.humidity}%</p>
          <p className="card-text">Давление: {weather.main.pressure} гПа</p>
          <p className="card-text">Скорость ветра: {weather.wind.speed} м/с</p>
        </div>
        <button
          className={`btn ${isFavorite ? 'btn-danger' : 'btn-primary'} mt-3`}
          onClick={onToggleFavorite}
        >
          {isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
        </button>
      </div>
    </div>
  )
}

export default WeatherCard 