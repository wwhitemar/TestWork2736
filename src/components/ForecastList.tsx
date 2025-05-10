import { ForecastData } from '@/services/weatherService'

interface ForecastListProps {
  forecast: ForecastData | null
}

const ForecastList = ({ forecast }: ForecastListProps) => {
  if (!forecast) return null

  return (
    <div className="forecast-list">
      {forecast.list.slice(0, 5).map((item, index) => (
        <div key={index} className="weather-card">
          <h3>{new Date(item.dt * 1000).toLocaleDateString('ru-RU')}</h3>
          <div className="weather-info">
            <p>Температура: {Math.round(item.main.temp)}°C</p>
            <p>Погода: {item.weather[0].description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ForecastList 