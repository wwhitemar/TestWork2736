import { render, screen, fireEvent } from '@testing-library/react'
import FavoritesList from '@/components/FavoritesList'

describe('FavoritesList Component', () => {
  test('отображает список избранных городов', () => {
    const favorites = ['Москва', 'Санкт-Петербург']
    const onRemove = jest.fn()

    render(<FavoritesList favorites={favorites} onRemove={onRemove} />)

    expect(screen.getByText('Москва')).toBeInTheDocument()
    expect(screen.getByText('Санкт-Петербург')).toBeInTheDocument()
  })

  test('вызывает onRemove при клике на кнопку удаления', () => {
    const favorites = ['Москва']
    const onRemove = jest.fn()

    render(<FavoritesList favorites={favorites} onRemove={onRemove} />)

    const removeButton = screen.getByText('Удалить')
    fireEvent.click(removeButton)
    
    expect(onRemove).toHaveBeenCalledWith('Москва')
  })

  test('отображает сообщение, когда нет избранных городов', () => {
    const favorites: string[] = []
    const onRemove = jest.fn()

    render(<FavoritesList favorites={favorites} onRemove={onRemove} />)

    expect(screen.getByText('Нет избранных городов')).toBeInTheDocument()
  })
}) 