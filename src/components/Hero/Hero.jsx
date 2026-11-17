import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={'container'}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <span className={styles.jobTitle}>FRONT-END DEVELOPER</span>
            <h1 className={styles.mainTopic}>Building thoughtful digital experiences.</h1>
            <p className={styles.description}>I enjoy turning ideas into clean, intuitive, and responsive web experiences, with a focus on thoughtful design, usability, and writing maintainable code.</p>
            <div className={styles.heroActions}>
              <a href="#projects" className={styles.primaryButton}>Explore Work</a>
              <a href="#contact" className={styles.secondaryButton}>Let's Work</a>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.shapeCircle}></div>
            <div className={styles.shapeRectangle}></div>
            <div className={styles.shapeOutline}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
