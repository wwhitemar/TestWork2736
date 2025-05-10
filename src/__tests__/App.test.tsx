import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { weatherService, WeatherData } from '@/services/weatherService'
import Home from '@/app/page'

jest.mock('@/services/weatherService')

const mockWeatherData: WeatherData = {
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

describe('App Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('поиск города отображает данные о погоде', async () => {
    const getCurrentWeatherMock = jest.fn().mockResolvedValue(mockWeatherData)
    jest.spyOn(weatherService, 'getCurrentWeather').mockImplementation(getCurrentWeatherMock)

    render(<Home />)
    
    const input = screen.getByPlaceholderText('Введите город')
    const button = screen.getByText('Поиск')
    
    fireEvent.change(input, { target: { value: 'Москва' } })
    fireEvent.click(button)
    
    await waitFor(() => {
      expect(screen.getByText('Москва')).toBeInTheDocument()
      expect(screen.getByText('Температура: 20°C')).toBeInTheDocument()
    })
  })

  test('отображает ошибку при неудачном поиске', async () => {
    const getCurrentWeatherMock = jest.fn().mockRejectedValue(new Error('Город не найден'))
    jest.spyOn(weatherService, 'getCurrentWeather').mockImplementation(getCurrentWeatherMock)

    render(<Home />)
    
    const input = screen.getByPlaceholderText('Введите город')
    const button = screen.getByText('Поиск')
    
    fireEvent.change(input, { target: { value: 'НесуществующийГород' } })
    fireEvent.click(button)
    
    await waitFor(() => {
      expect(screen.getByText('Город не найден')).toBeInTheDocument()
    })
  })
}) 