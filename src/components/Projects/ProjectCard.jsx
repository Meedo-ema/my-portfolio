import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import styles from './Projects.module.css'

export default function ProjectCard({ project, projectCard, projectImg, projectHeader, projectDesc, techsContainer, technology, linksContainer, openModal
}) {
  return (
    <article className={projectCard}>
      <button type="button" onClick={openModal} aria-label="View deatails for project" className={styles.cardAction}
      >
      </button>
        <div className={projectImg}>
          {project?.image
            ? <img src={project.image} alt={`${project.title} project preview`} />
            : <div>Image coming soon</div>
          }
        </div>
        <h3 className={projectHeader}>
          {project?.title || "No Project!"}
        </h3>
        <p className={projectDesc}>
          {project?.description || "No Project!"}
        </p>
        <div className={techsContainer}>
          {project?.technologies.map((tech) =>
            <span key={tech} className={technology}>
              {tech}
            </span>)}
        </div>
        <div className={linksContainer}>
          <a href={project?.github} target="_blank" onClick={(e) => e.stopPropagation()} >
            <FaGithub />
          </a>
          <a href={project?.demo} target="_blank" onClick={(e) => e.stopPropagation()} >
            <FiExternalLink />
          </a>
        </div>
    </article>
  )
}

