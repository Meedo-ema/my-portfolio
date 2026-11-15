import { createContext, useContext, useEffect, useState } from "react";


const ThemeContext = createContext()
export const useThemeContext = () => useContext(ThemeContext)

const currentTheme = () => {
  if (typeof window !== 'undefined') {
    const themeStored = localStorage.getItem('theme')

    if (themeStored !== 'dark' && themeStored !== 'light') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    } else {
      return themeStored
    }
  }
  return 'light'
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(currentTheme)

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('dark-theme', theme === 'dark')
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }
  const value = { theme, toggleTheme }

  return <ThemeContext.Provider value={value}>
    {children}
  </ThemeContext.Provider>
}
