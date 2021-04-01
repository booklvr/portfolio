import React from 'react'

// Components
import HamburgerIcon from '../../components/hamburger-icon/HamburgerIcon'
import Header from '../../components/header/Header'

// STYLES
import { HomePageContainer } from './homePage.styles'

const HomePage = () => {
  return (
    <HomePageContainer>
      <HamburgerIcon />
      <Header />
    </HomePageContainer>
  )
}

export default HomePage
