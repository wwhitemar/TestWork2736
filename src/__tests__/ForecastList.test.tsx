import { render, screen } from '@testing-library/react'
import ForecastList from '@/components/ForecastList'

const mockForecastData = {
  list: [
    {
      dt: 1650000000,
      main: {
        temp: 20
      },
      weather: [
        {
          description: 'Ясно'
        }
      ]
    },
    {
      dt: 1650086400,
      main: {
        temp: 22
      },
      weather: [
        {
          description: 'Облачно'
        }
      ]
    }
  ]
}

describe('ForecastList Component', () => {
  test('корректно отображает данные прогноза', () => {
    render(<ForecastList forecast={mockForecastData} />)
    
    const temperatures = screen.getAllByText(/Температура:/)
    expect(temperatures).toHaveLength(2)
    
    expect(screen.getByText('Температура: 20°C')).toBeInTheDocument()
    expect(screen.getByText('Температура: 22°C')).toBeInTheDocument()
  })

  test('обрабатывает отсутствие данных', () => {
    render(<ForecastList forecast={null} />)
    
    expect(screen.queryByText(/Температура:/)).not.toBeInTheDocument()
  })

  test('отображает даты прогноза', () => {
    render(<ForecastList forecast={mockForecastData} />)
    
    const date1 = new Date(1650000000 * 1000).toLocaleDateString()
    const date2 = new Date(1650086400 * 1000).toLocaleDateString()
    
    expect(screen.getByText(date1)).toBeInTheDocument()
    expect(screen.getByText(date2)).toBeInTheDocument()
  })
}) 