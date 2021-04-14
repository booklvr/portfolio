import React from 'react'


import Card from '../card/Card'

// data
import projectData from '../../data/project-data'

import {
  ProjectCard,
  ProjectCardsContainer,
  ProjectsContainer,
} from './projects.styles'

const Projects = () => {
  
  return (
    <ProjectsContainer>
      <h2>PROJECTS</h2>
      <ProjectCardsContainer>
        {projectData.map((data) => (
          <Card data={data}></Card>
        ))}
      </ProjectCardsContainer>
    </ProjectsContainer>
  )
}

export default Projects
