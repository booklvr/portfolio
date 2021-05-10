import React, { useEffect, forwardRef } from 'react'

import Card from '../card/Card'

// data
import projectData from '../../data/project-data'

// HOOKS
// import { useScroll } from '../../hooks/useScroll'

import { ProjectCardsContainer, ProjectsContainer } from './projects.styles'

const Projects = forwardRef((props, ref) => {
  // const ref = useRef(null)

  const handleScroll = () => {
    const bottomRef = ref.current.getBoundingClientRect().bottom
    console.log('projectBottom', bottomRef)
  }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)

  //   // return window.removeEventListener('scroll', handleScroll)
  // })

  return (
    <ProjectsContainer ref={ref}>
      <h2>PROJECTS</h2>
      <ProjectCardsContainer>
        {projectData.map((data, index) => (
          <Card key={index} data={data}></Card>
        ))}
      </ProjectCardsContainer>
    </ProjectsContainer>
  )
})

export default Projects
