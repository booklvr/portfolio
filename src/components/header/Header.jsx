import React from 'react'
import backgroundGif from '../../assets/city-scape.gif'

// COMPONENTS
import CustomButton from '../custom-button/CustomButton'
import SmallIcon from '../small-icon/SmallIcon'

import {
  HeaderContainer,
  HeaderJumbotronContainer,
  BackgroundImageContainer,
} from './header.styles'

const Header = () => {
  return (
    <HeaderContainer>
      <BackgroundImageContainer>
        <img src={backgroundGif} alt='city-scape'></img>
      </BackgroundImageContainer>
      <HeaderJumbotronContainer>
        <h1>Nicholas de Waal</h1>
        <h2>Software developer</h2>
        <CustomButton>
          Contact <i className='far fa-envelope'></i>
        </CustomButton>
      </HeaderJumbotronContainer>
      <SmallIcon icon='scroll-down'>
        <i className='fas fa-arrow-down'></i>
      </SmallIcon>
    </HeaderContainer>
  )
}

export default Header
