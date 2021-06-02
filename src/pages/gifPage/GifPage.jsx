import React from 'react'
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

const GifPage = ({ project }) => {
  // const history = useHistory()
  // // console.log('match.params.name', match.params.name)

  // const pageData = projectData.filter(
  //   (data) => data.name === match.params.name
  // )[0]
  // // console.log(pageData)

  // const handleGoBack = () => {
  //   history.goBack()
  // }

  return (
    <GifPageContainer>
      {/* <BackButton isSmallButton={true} onClick={() => handleGoBack()}>
        back
      </BackButton> */}
      <LargeIcon icon='exit'>
        <i className='fas fa-times'></i>
      </LargeIcon>
      <GifPlayer
        gif={`${process.env.PUBLIC_URL}/assets/gif/${project.name}.gif`}
        alt={project.name}
      />
      <GifButtonsContainer>
        <GifPageLink target='_blank' href={project.url}>
          <CustomButton>Live Site</CustomButton>
        </GifPageLink>

        <CustomButton>Case Study</CustomButton>
        <GifPageLink href={project.github} target='_blank'>
          <CustomButton>Github</CustomButton>
        </GifPageLink>
      </GifButtonsContainer>
    </GifPageContainer>
  )
}

export default GifPage
