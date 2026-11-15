import { Moon, Sun } from 'lucide-react';
import styles from './Header.module.css'
import { useThemeContext } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeContext()
  return (
    <div className={styles.mode}>
      <button type='button'
        className={styles.modeToggle}
        aria-label={theme === 'dark' ? "Toggle to light mode" : "Toggle to dark mode"}
        onClick={() => toggleTheme()}>
        {theme === 'dark' ? <Sun aria-hidden='true' /> : <Moon aria-hidden='true' />}
      </button>
    </div>
  )
}

export default ThemeToggle
