import styles from './ProjectModal.module.css'
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const ProjectModal = ({ closeModal, project }) => {
  return (
    <div className={styles.modalBack}>
      <div className={styles.projectModal}>
        <button type='button' onClick={closeModal} aria-label="Close Project Modal" className={styles.closeModal}
        >
          <IoMdClose />
        </button>
        <div className={styles.projectImg}>
          {project?.image
            ? <img src={project.image} alt={`${project.title} project preview`} />
            : <div>Image coming soon</div>
          }
        </div>

        <h3 className={styles.projectHeader}>
          {project?.title || "No Project!"}
        </h3>

        <div className={styles.projectDetails}>
          <p className={styles.projectDesc}>
            {project?.description || "No Project!"}
          </p>
          <p className={styles.projectType}>
            {project?.type || "No Project!"}
          </p>
          {project?.features?.length > 0 ?
            (<ul className={styles.projectFeatures}>
              {project?.features?.map(feature => <li key={feature}>{feature}</li>)}
            </ul>)
            : "No Project Features To Display!"}
        </div>

        {project.technologies && (<div className={styles.techsContainer}>
          {project?.technologies?.map((tech) =>
            <span key={tech} className={styles.technology}>
              {tech}
            </span>)}
        </div>)}

        <div className={styles.linksContainer}>
          {project.github ? (<a href={project?.github} target="_blank" rel='noopener noreferrer'>
            <FaGithub />
          </a>) : ""}
          {project.demo ? (<a href={project?.demo} target="_blank" rel='noopener noreferrer'>
            <FiExternalLink />
          </a>) : ""}
        </div>

      </div>
    </div>
  )
}

export default ProjectModal
