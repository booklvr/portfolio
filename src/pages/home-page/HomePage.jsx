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

// HOOKS
// import { useScroll } from '../../hooks/useScroll'

const HomePage = () => {
  const header = useRef(null)
  const about = useRef(null)
  const projects = useRef(null)
  const skills = useRef(null)
  const contact = useRef(null)

  const [sectionRefs, setSectionRefs] = useState([
    header,
    about,
    projects,
    skills,
    contact,
  ])
  const [currentSection, setCurrentSection] = useState(0)
  const [scroll, setScroll] = useState({ y: 0, direction: '' })

  const determineScrollDirection = () => {
    setScroll((prev) => ({
      y: -sectionRefs[currentSection].current.getBoundingClientRect().top,
      direction:
        prev.y >
        -sectionRefs[currentSection].current.getBoundingClientRect().top
          ? 'up'
          : 'down',
    }))
  }

  const handleScroll = () => {
    determineScrollDirection()
    console.log('scroll', scroll)

    if (scroll.direction === 'up') {
      if (
        sectionRefs[currentSection].current.getBoundingClientRect().top <= 0
      ) {
        setCurrentSection((prev) => {
          return currentSection - 1 <= 0 ? 0 : currentSection - 1
        })
      }
    } else if (scroll.direction === 'down') {
      if (
        sectionRefs[currentSection].current.getBoundingClientRect().bottom < 0
      )
        setCurrentSection((prev) => {
          return currentSection + 1 >= sectionRefs.length
            ? sectionRefs.length - 1
            : currentSection + 1
        })
    }

    console.log('currentSection', currentSection)
    console.log(sectionRefs[currentSection].current.getBoundingClientRect())

    // setScroll((prev) => ({
    //   y: -about.current.getBoundingClientRect().top,
    //   // Here we’re comparing the previous state to the current state to get the scroll direction
    //   direction:
    //     prev.y > -about.current.getBoundingClientRect().top ? 'up' : 'down',
    // }))

    // console.log('scroll', scroll)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  })

  useEffect(() => {
    console.log(currentSection, 'currentSection')
  }, [currentSection])

  return (
    <HomePageContainer>
      <SmallIcon icon='hamburger-menu'>
        <i className='fas fa-bars'></i>
      </SmallIcon>

      <SmallIcon icon='contact'>
        <i className='far fa-envelope' />
      </SmallIcon>
      <Header ref={header} />
      <About ref={about} />
      <Projects ref={projects} />
      <Skills ref={skills} />
      <Contact ref={contact} />
    </HomePageContainer>
  )
}

export default HomePage
