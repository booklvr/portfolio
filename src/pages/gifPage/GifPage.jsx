import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import {
  GifPageContainer,
  GifButtonsContainer,
  GifPageLink,
} from './gifPage.styles'
import GifPlayer from 'react-gif-player'
import './gifPlayer.styles.scss'

// components
import LargeIcon from '../../components/icons/LargeIcon'
import CustomButton from '../../components/custom-button/CustomButton'
import projectData from '../../data/project-data'

const GifPage = ({ match }) => {
  const history = useHistory()
  console.log('match.params.name', match.params.name)

  const pageData = projectData.filter(
    (data) => data.name === match.params.name
  )[0]
  console.log(pageData)

  return (
    <GifPageContainer>
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
