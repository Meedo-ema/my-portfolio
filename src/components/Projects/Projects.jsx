import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

const Projects = () => {
  const featuredProject = projects.find(project => project.featured)
  const remainingProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects">
      <div className={`${styles.content} container`}>
        <h2>Selected Work</h2>
        <p>A selection of projects I've built, exploring ideas through design and code.</p>

        {/* FEATURED PROJECT */}
        <div className={styles.mainContainer}>
          <div className={styles.featuredSection}>
            {featuredProject ?
              <ProjectCard
                project={featuredProject}
                projectCard={styles.featuredProject}
                projectImg={styles.featuredImg}
                projectHeader={styles.featuredHeader}
                projectDesc={styles.featuredDesc}
                techsContainer={styles.featuredTechs}
                technology={styles.featuredTech}
                linksContainer={styles.featuredLinksCont}
              /> :
              <div>
                Coming Soon!
              </div>}
          </div>
          {/* REMAINING PROJECTS */}

          <div className={styles.projectsGrid}>
            {remainingProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                projectCard={styles.projectCard}
                projectImg={styles.projectImg}
                projectHeader={styles.projectHeader}
                projectDesc={styles.projectDesc}
                techsContainer={styles.projectTechs}
                technology={styles.projectTech}
                linksContainer={styles.projectLinksCont}
              />
            ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
