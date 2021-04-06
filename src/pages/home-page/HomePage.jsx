import React from 'react'

// Components
import Header from '../../components/header/Header'
import SmallIcon from '../../components/small-icon/SmallIcon'
import About from '../../components/about/About'
import Projects from '../../components/projects/Projects'
import Skills from '../../components/skills/Skills'
import Contact from '../../components/contact/Contact'

// STYLES
import { HomePageContainer } from './homePage.styles'

const HomePage = () => {
  return (
    <HomePageContainer>
      <SmallIcon icon='hamburger-menu'>
        <i class='fas fa-bars'></i>
      </SmallIcon>
      <SmallIcon icon='contact'>
        <i className='far fa-envelope' />
      </SmallIcon>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </HomePageContainer>
  )
}

export default HomePage
