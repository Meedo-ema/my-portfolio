import { useState } from 'react'
import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'
import ProjectModal from './ProjectModal'

const Projects = () => {
  const [projectObject, setProjectObject] = useState(null)
  const featuredProject = projects.find(project => project.featured)
  const remainingProjects = projects.filter(project => !project.featured)

  // FUNCTIONS
  const handleOpenModal = (project) => {
    setProjectObject(project)
  }

  const handleCloseModal = () => {
    setProjectObject(null)
  }

  return (
    <section id="projects">
      {projectObject &&
        <ProjectModal closeModal={handleCloseModal} project={projectObject} />}

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
                openModal={() => handleOpenModal(featuredProject)}
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
                openModal={() => handleOpenModal(project)}
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
