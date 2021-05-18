import React, { Fragment } from 'react'

import { useHistory, Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import CustomButton from '../custom-button/CustomButton'
import SmallIcon from '../icons/SmallIcon'

import githubIcon from '../../assets/icons/github-icon.svg'

import {
  ButtonsContainer,
  CardContainer,
  SmallCard,
  SmallCardRight,
  GifContainer,
  IconsContainer,
  CardTitle,
  SmallCardButton,
} from './card.styles'

const Card = ({
  data: { title, name, url, github, gif, info, icons, img },
  fullpageApi,
  slideIndex,
}) => {
  const history = useHistory()

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1244px)',
  })
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)',
  })
  const isMobile = useMediaQuery({
    query: '(max-device-width: 500px)',
  })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  return (
    <CardContainer >
      {(isMobile && (
        <SmallCard>
          <a target='_blank' href={url}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/${img}`}
              alt={img}
            />
          </a>

          <SmallCardRight>
            <CardTitle>{title}</CardTitle>
            <a target='_blank' href={github}>
              <SmallIcon icon='github'>
                <img src={githubIcon}></img>
              </SmallIcon>
            </a>
            <SmallCardButton onClick={() => fullpageApi.moveTo('projects', slideIndex)}>more &#8594;</SmallCardButton>
          </SmallCardRight>
        </SmallCard>
      )) || (
        <Fragment>
          <GifContainer>
            <img
              src={`${process.env.PUBLIC_URL}/assets/gif/${gif}`}
              alt={gif}
            />
          </GifContainer>
          <CardTitle>{title}</CardTitle>
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
        </Fragment>
      )}
    </CardContainer>
  )
}

export default Card
