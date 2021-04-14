import React from 'react'
import { GifPageContainer } from './gifPage.styles'
import GifPlayer from 'react-gif-player'

// components
import LargeIcon from '../../components/icons/LargeIcon'

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
      

    </GifPageContainer>
  )
}

export default GifPage
