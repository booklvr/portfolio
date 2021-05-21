import React from 'react'

import Card from '../card/Card'

// data
import projectData from '../../data/project-data'

// Components
import { SmallIconContainer } from '../icons/icon.styles'
import Heading from '../../components/heading/Heading'

import { ProjectCardsContainer, ProjectsContainer } from './projects.styles'

const Projects = ({ fullpageApi }) => {
  return (
    <ProjectsContainer>
      <Heading>projects</Heading>
      <ProjectCardsContainer>
        {projectData.map((data, index) => (
          <Card
            key={index}
            data={data}
            fullpageApi={fullpageApi}
            slideIndex={index + 1}
          ></Card>
        ))}
      </ProjectCardsContainer>
      <SmallIconContainer
        icon='scroll-down'
        inverted='true'
        onClick={() => fullpageApi.moveSectionDown()}
      >
        <i className='fas fa-arrow-down'></i>
      </SmallIconContainer>
    </ProjectsContainer>
  )
}

export default Projects
