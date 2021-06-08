import React, { useState } from 'react'
import { Projects } from "./singleProject"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaSlideshare } from 'react-icons/fa'
import './ProjectsPage.css'

const ProjectsPage = ({ projectSlides }) => {
  const [current, setCurrent] = useState(0)
  const length = projectSlides.length

  const prevProject = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  const nextProject = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  if (!Array.isArray(projectSlides) || projectSlides.length <= 0) {
    return null
  }

  return (
    <div className="Project-page" id="projectsPage">
      <div>
        <section className="projects-slider">
          <FaArrowAltCircleLeft className="left-arrow" onClick={prevProject} />
          <FaArrowAltCircleRight className="right-arrow" onClick={nextProject} />
          {Projects.map((project, index) => {
            return (

              <div key={index} className={index === current ? 'projectSlide active' : 'projectSlide'}>
                {index === current && (

                  <>
                    <h1>{project.title}</h1>
                    <p className="project-description ">{project.description}</p>
                    <p className="project-tech-stack">{project.techStack}</p>
                    <a href={project.linkOne} target="blank">
                      <img src={project.iconOne} alt="Project Logo" width="50" height="50" />
                    </a>
                    <a href={project.linkTwo} target="blank">
                      <img src={project.iconTwo} alt="Github Logo" width="50" height="50" />
                    </a>
                    <a href={project.linkThree} target="blank">
                      <img src={project.iconThree} alt="YouTube Logo" width="auto" height="50" />
                    </a>
                    <img src={project.image} className="project-image" alt="Project Demo Image" width="auto" height="600px" />
                  </>

                )}
              </div>

            )
          })}
        </section>
      </div>
    </div>
  )
}

export default ProjectsPage;