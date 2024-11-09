// hooks/useTheme.js
import { useState, useEffect } from 'react'

export const useTheme = () => {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' && localStorage.getItem('theme')
      ? localStorage.getItem('theme')
      : 'light'
  )

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(theme === 'dark' ? 'light' : 'dark')
    root.classList.add(theme ?? 'light')
    localStorage.setItem('theme', theme ?? 'light')
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return { theme, toggleTheme }
}
