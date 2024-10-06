import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type DarkModeState = {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

export const useDarkModeStore = create(
  persist<DarkModeState>(
    (set) => ({
      isDarkMode: false,
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode }))
    }),
    {
      name: 'darkMode'
    }
  )
)
