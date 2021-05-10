import React, { forwardRef } from 'react'
import backgroundGif from '../../assets/city-scape.gif'

// COMPONENTS
import CustomButton from '../custom-button/CustomButton'
import SmallIcon from '../icons/SmallIcon'

import {
  HeaderContainer,
  HeaderJumbotronContainer,
  BackgroundImageContainer,
} from './header.styles'

const Header = forwardRef((props, ref) => {
  return (
    <HeaderContainer ref={ref}>
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
})

export default Header
