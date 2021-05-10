import React from 'react'
import { useHistory } from 'react-router-dom'
import CustomButton from '../custom-button/CustomButton'
import SmallIcon from '../icons/SmallIcon'

import {
  ButtonsContainer,
  CardContainer,
  GifContainer,
  IconsContainer,
} from './card.styles'

const Card = ({ data: { title, name, url, github, gif, info, icons } }) => {
  const history = useHistory()

  return (
    <CardContainer>
      <GifContainer>
        <img src={`${process.env.PUBLIC_URL}/assets/gif/${gif}`} alt={gif} />
      </GifContainer>
      <h3>{title}</h3>
      <p>{info}</p>
      <ButtonsContainer>
        <CustomButton>CaseStudy</CustomButton>
        <SmallIcon onClick={() => history.push(`/gif/${name}`)} icon='expand'>
          <i className='fas fa-expand'></i>
        </SmallIcon>
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
