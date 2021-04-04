import React from 'react'

// Components
import Header from '../../components/header/Header'
import SmallIcon from '../../components/small-icon/SmallIcon'
import About from '../../components/about/About'
import Skills from '../../components/skills/Skills'

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
      <Skills />
    </HomePageContainer>
  )
}

export default HomePage
