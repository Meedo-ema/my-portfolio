import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ project, projectCard, projectImg, projectHeader, projectDesc, techsContainer, technology, linksContainer
}) {
  return (
    <article className={projectCard}>
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
        <a href={project?.github} target="_blank">
          <FaGithub />
        </a>
        <a href={project?.demo} target="_blank">
          <FiExternalLink />
        </a>
      </div>

    </article>
  )
}

