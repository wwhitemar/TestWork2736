'use client'

import { useState, FormEvent } from 'react'

interface SearchBarProps {
  onSearch: (city: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (city.trim()) {
      console.log('Searching for city:', city.trim())
      onSearch(city.trim())
      setCity('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Введите название города..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Поиск
        </button>
      </div>
    </form>
  )
}

export default SearchBar 