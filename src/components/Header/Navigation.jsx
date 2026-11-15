import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
    }
    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  }, [isOpen])

  const handleCloseMenu = () => {
    setIsOpen(false)
  }
  return (
    <nav aria-label='Main navigation' className={styles.navigation}>
      <button type='button'
        className={styles.menuToggle}
        aria-label={!isOpen ? "Open menu" : "Close menu"}
        aria-expanded={isOpen}
        aria-controls='menu'
        onClick={() => setIsOpen(prev => !prev)}>
        {!isOpen ? <Menu aria-hidden='true' />
          : <X aria-hidden='true' />}
      </button>
      <ul id="menu" aria-label='Main menu'
        className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
        <li><a href="#home" onClick={handleCloseMenu}>Home</a></li>
        <li><a href="#projects" onClick={handleCloseMenu}>Projects</a></li>
        <li><a href="#about" onClick={handleCloseMenu}>About</a></li>
        <li><a href="#skills" onClick={handleCloseMenu}>Skills</a></li>
        <li><a href="#journey" onClick={handleCloseMenu}>Journey</a></li>
        <li><a href="#contact" onClick={handleCloseMenu}>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navigation
