import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import {
  GifPageContainer,
  GifButtonsContainer,
  GifPageLink,
  BackButton,
} from './gifPage.styles'
import GifPlayer from 'react-gif-player'
import './gifPlayer.styles.scss'

// components
import LargeIcon from '../../components/icons/LargeIcon'
import projectData from '../../data/project-data'
import CustomButton from '../../components/custom-button/CustomButton'

const GifPage = ({ match }) => {
  const history = useHistory()
  // console.log('match.params.name', match.params.name)

  const pageData = projectData.filter(
    (data) => data.name === match.params.name
  )[0]
  // console.log(pageData)

  const handleGoBack = () => {
    history.goBack()
  }

  return (
    <GifPageContainer>
      <BackButton isSmallButton={true} onClick={() => handleGoBack()}>
        back
      </BackButton>
      <LargeIcon icon='exit'>
        <i class='fas fa-times'></i>
      </LargeIcon>
      <GifPlayer
        gif={`${process.env.PUBLIC_URL}/assets/gif/${match.params.name}.gif`}
        alt={match.params.name}
      />
      <GifButtonsContainer>
        <GifPageLink target='_blank' href={pageData.url}>
          <CustomButton>Live Site</CustomButton>
        </GifPageLink>

        <CustomButton>Case Study</CustomButton>
        <GifPageLink href={pageData.github} target='_blank'>
          <CustomButton>Github</CustomButton>
        </GifPageLink>
      </GifButtonsContainer>
    </GifPageContainer>
  )
}

export default GifPage
