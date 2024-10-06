'use client'
import { useDarkModeStore } from '@/lib/stores/useDarkStore'
import { Sun, Moon } from 'lucide-react'

export default function DarkMode() {
  const { isDarkMode, toggleDarkMode } = useDarkModeStore()

  return (
    <p onClick={toggleDarkMode} className="cursor-pointer transition-colors duration-300">
      {isDarkMode ? <Sun className="text-white hover:text-white" /> : <Moon className="text-black hover:text-black dark:text-white dark:hover:text-white" />}
    </p>
  )
}
