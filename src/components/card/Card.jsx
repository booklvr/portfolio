import React from 'react'
import CustomButton from '../custom-button/CustomButton'
import SmallIcon from '../small-icon/SmallIcon'
import { ButtonsContainer, CardContainer } from './card.styles'

const Card = ({ data: { title, url, github, gif, info, icons } }) => {
  return (
    <CardContainer>
      <h3>{title}</h3>
      <p>{info}</p>
      <ButtonsContainer>
        <CustomButton>Live Site</CustomButton>
        <CustomButton>Github</CustomButton>
      </ButtonsContainer>
      <iconsContainer>
        {icons.map((icon) => (
          <SmallIcon>
            <img
              src={`${process.env.PUBLIC_URL}/assets/icons/${icon}-icon.svg`}
              alt={icon}
            />
          </SmallIcon>
        ))}
      </iconsContainer>
    </CardContainer>
  )
}

export default Card
