import ThemeToggle from "./ThemeToggle"
import Navigation from './Navigation.jsx'
import styles from './Header.module.css'
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerContent} container`}>
        <div className={styles.brand}>
          <a href="#home"><span>ME.</span></a>
        </div>
        <Navigation />
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header
