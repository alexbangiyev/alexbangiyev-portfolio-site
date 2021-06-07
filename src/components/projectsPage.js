import React, { useState } from 'react'
import { Projects } from "./singleProject"
// import {faArrowAltCircleRight, faArrowAltCircleLeft} from 'react-icons'
import './ProjectsPage.css'

const ProjectsPage = () => {
  const [current, setCurrent] = useState(0)
  // const length = slides.length

    return (
      <div className="Project-page" id="projectsPage">
        <div>
          {Projects.map((project, index) => {
            return (
              <div key={index}>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <p>{project.techStack}</p>
                <a href={project.linkOne} target="blank">
                  <img src={project.iconOne} alt="Project Logo" width="50" height="50" />
                </a>
                <a href={project.linkTwo} target="blank">
                  <img src={project.iconTwo} alt="Github Logo" width="50" height="50" />
                </a>
                <a href={project.linkThree} target="blank">
                  <img src={project.iconThree} alt="YouTube Logo" width="auto" height="50" />
                </a>
                <img src={project.image} alt="Project Demo Image" width="auto" height="600px" />
              </div>
            )
          })}
        </div>
      </div>
    )
}

export default ProjectsPage;