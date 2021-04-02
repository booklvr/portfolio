import React from 'react'

// Components
import HamburgerIcon from '../../components/hamburger-icon/HamburgerIcon'
import Header from '../../components/header/Header'
import SmallIcon from '../../components/small-icon/SmallIcon'


// STYLES
import { HomePageContainer } from './homePage.styles'

const HomePage = () => {
  return (
    <HomePageContainer>
      <SmallIcon icon="hamburger-menu"><i class="fas fa-bars"></i></SmallIcon>
      <SmallIcon icon="contact"><i className="far fa-envelope"/></SmallIcon>
      <Header />
      
    </HomePageContainer>
  )
}

export default HomePage
