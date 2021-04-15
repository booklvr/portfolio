import React from 'react'
import { GifPageContainer, GifButtonsContainer } from './gifPage.styles'
import GifPlayer from 'react-gif-player'
import './gifPlayer.styles.scss';

// components
import LargeIcon from '../../components/icons/LargeIcon'
import CustomButton from '../../components/custom-button/CustomButton'

const GifPage = ({match}) => {
  console.log('match.params.id', match.params.name)
  


  return (
    <GifPageContainer>
      <LargeIcon icon='exit'>
        <i class="fas fa-times"></i>
      </LargeIcon>
      <GifPlayer 
        gif={`${process.env.PUBLIC_URL}/assets/gif/${match.params.name}.gif`} alt={match.params.name}
      />
      <GifButtonsContainer>
        <CustomButton>Live Site</CustomButton>
      </GifButtonsContainer>

    </GifPageContainer>
  )
}

export default GifPage
