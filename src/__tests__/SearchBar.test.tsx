import { render, screen, fireEvent } from '@testing-library/react'
import SearchBar from '@/components/SearchBar'

describe('SearchBar Component', () => {
  test('вызывает onSearch с введенным городом', () => {
    const onSearch = jest.fn()
    render(<SearchBar onSearch={onSearch} />)
    
    const input = screen.getByPlaceholderText('Введите город')
    const button = screen.getByText('Поиск')
    
    fireEvent.change(input, { target: { value: 'Москва' } })
    fireEvent.click(button)
    
    expect(onSearch).toHaveBeenCalledWith('Москва')
  })

  test('не вызывает onSearch при пустом вводе', () => {
    const onSearch = jest.fn()
    render(<SearchBar onSearch={onSearch} />)
    
    const button = screen.getByText('Поиск')
    fireEvent.click(button)
    
    expect(onSearch).not.toHaveBeenCalled()
  })
}) 