import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { WeatherData } from '@/services/weatherService'

interface WeatherStore {
  favorites: WeatherData[]
  addFavorite: (weather: WeatherData) => void
  removeFavorite: (cityName: string) => void
}

export const useWeatherStore = create<WeatherStore>()(
  persist(
    (set) => ({
      favorites: [],
      addFavorite: (weather) =>
        set((state) => ({
          favorites: [...state.favorites, weather]
        })),
      removeFavorite: (cityName) =>
        set((state) => ({
          favorites: state.favorites.filter((city) => city.name !== cityName)
        }))
    }),
    {
      name: 'weather-storage'
    }
  )
) 