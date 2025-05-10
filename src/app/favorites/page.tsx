'use client'

import { useWeatherStore } from '@/store/weatherStore'
import FavoritesList from '@/components/FavoritesList'

export default function FavoritesPage() {
  const favorites = useWeatherStore((state) => state.favorites)
  const removeFavorite = useWeatherStore((state) => state.removeFavorite)

  return (
    <main className="container">
      <h1 className="mb-4">Избранные города</h1>
      <FavoritesList favorites={favorites} onRemove={removeFavorite} />
    </main>
  )
} 