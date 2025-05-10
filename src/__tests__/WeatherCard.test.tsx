import { render, screen, fireEvent } from '@testing-library/react'
import WeatherCard from '@/components/WeatherCard'

const mockWeatherData = {
  name: 'Москва',
  main: {
    temp: 20,
    feels_like: 18,
    humidity: 50
  },
  weather: [
    {
      description: 'Ясно'
    }
  ]
}

describe('WeatherCard Component', () => {
  test('корректно отображает данные о погоде', () => {
    render(<WeatherCard weather={mockWeatherData} onAddFavorite={() => {}} />)
    
    expect(screen.getByText('Москва')).toBeInTheDocument()
    expect(screen.getByText('Температура: 20°C')).toBeInTheDocument()
    expect(screen.getByText('Погода: Ясно')).toBeInTheDocument()
  })

  test('не отображается при отсутствии данных', () => {
    render(<WeatherCard weather={null} onAddFavorite={() => {}} />)
    
    expect(screen.queryByText('Температура:')).not.toBeInTheDocument()
  })

  test('кнопка добавления в избранное вызывает callback', () => {
    const onAddFavorite = jest.fn()
    render(<WeatherCard weather={mockWeatherData} onAddFavorite={onAddFavorite} />)
    
    const button = screen.getByText('Добавить в избранное')
    fireEvent.click(button)
    
    expect(onAddFavorite).toHaveBeenCalled()
  })
}) 