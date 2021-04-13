import React, { useCallback, useState } from 'react'
import CustomButton from '../custom-button/CustomButton'
import SmallIcon from '../small-icon/SmallIcon'
import { useFullScreenHandle } from 'react-full-screen'

import {
  ButtonsContainer,
  CardContainer,
  GifContainer,
  IconsContainer,
  FullScreenContainer,
  FullScreenGif,
} from './card.styles'

const Card = ({ data: { title, url, github, gif, info, icons } }) => {
  // const [showFullScreen, setShowFullScreen] = useState(false)

  const handle = useFullScreenHandle()

  // const handleClick = () => {
  //   console.log('clicked card')
  // }

  const handleHover = () => {
    console.log('hover over card')
  }

  return (
    <CardContainer handle={handle}>
      <GifContainer>
        <img src={`${process.env.PUBLIC_URL}/assets/gif/${gif}`} alt={gif} />
      </GifContainer>
      <h3>{title}</h3>
      <p>{info}</p>
      <ButtonsContainer>
        <CustomButton>CaseStudy</CustomButton>
        <SmallIcon onClick={handle.enter} icon='expand'>
          <i class='fas fa-expand'></i>
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
