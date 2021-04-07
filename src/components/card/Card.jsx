import React from 'react'
import CustomButton from '../custom-button/CustomButton'
import SmallIcon from '../small-icon/SmallIcon'
import {
  ButtonsContainer,
  CardContainer,
  GifContainer,
  IconsContainer,
} from './card.styles'

const Card = ({ data: { title, url, github, gif, info, icons } }) => {
  const handleClick = () => {
    console.log('clicked card')
  }

  const handleHover = () => {
    console.log('hover over card')
  }

  return (
    <CardContainer onClick={() => handleClick()}>
      <GifContainer>
        <img src={`${process.env.PUBLIC_URL}/assets/gif/${gif}`} alt={gif} />
      </GifContainer>
      <h3>{title}</h3>
      <p>{info}</p>
      <ButtonsContainer>
        <CustomButton>CaseStudy</CustomButton>
        <CustomButton>Github</CustomButton>
      </ButtonsContainer>
      <IconsContainer>
        {icons.map((icon, index) => (
          <img
            key={index}
            src={`${process.env.PUBLIC_URL}/assets/icons/${icon}-icon.svg`}
            alt={icon}
          />
        ))}
      </IconsContainer>
    </CardContainer>
  )
}

export default Card
