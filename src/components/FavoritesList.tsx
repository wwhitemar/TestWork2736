'use client'

import { WeatherData } from '@/services/weatherService'

interface FavoritesListProps {
  favorites: WeatherData[]
  onRemove: (city: string) => void
}

const FavoritesList: React.FC<FavoritesListProps> = ({ favorites, onRemove }) => {
  if (!favorites.length) {
    return <div className="alert alert-info">Список избранного пуст</div>
  }

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {favorites.map((city) => (
        <div key={city.name} className="card">
          <div className="card-body">
            <h5 className="card-title">{city.name}</h5>
            <p className="card-text">Температура: {city.main.temp}°C</p>
            <p className="card-text">Влажность: {city.main.humidity}%</p>
            <button
              className="btn btn-danger"
              onClick={() => onRemove(city.name)}
            >
              Удалить из избранного
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FavoritesList 