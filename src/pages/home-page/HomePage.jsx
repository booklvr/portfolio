import React, { useEffect, useState, useRef } from 'react'

// Components
import Header from '../../components/header/Header'
import SmallIcon from '../../components/icons/SmallIcon'
import About from '../../components/about/About'
import Projects from '../../components/projects/Projects'
import Skills from '../../components/skills/Skills'
import Contact from '../../components/contact/Contact'

// STYLES
import { HomePageContainer } from './homePage.styles'

const HomePage = () => {
  const header = useRef(null)
  const about = useRef(null)
  // const projects = useRef(null)
  // const skills = useRef(null)
  // const contact = useRef(null)

  const [currentSection, setCurrentSection] = useState(0)
  const [sectionRefs, setSectionRefs] = useState([])

  useEffect(() => {
    const handleScroll = () => {
      if (
        sectionRefs[currentSection].current.getBoundingClientReact().bottom < 0
      ) {
        console.log('bottom')
      }
    }
    window.addEventListener('scroll', handleScroll)
    setSectionRefs([header, about])
    return window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <HomePageContainer>
      <SmallIcon icon='hamburger-menu'>
        <i class='fas fa-bars'></i>
      </SmallIcon>

      <SmallIcon icon='contact'>
        <i className='far fa-envelope' />
      </SmallIcon>
      <Header ref={header} />
      <About ref={about} />
      <Projects />
      <Skills />
      <Contact />
    </HomePageContainer>
  )
}

export default HomePage
