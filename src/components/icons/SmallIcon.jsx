import React from 'react'
import { SmallIconContainer } from './icon.styles'


const SmallIcon = ({children, ...props}) => {
  return (
    <SmallIconContainer {...props}>
      {children}
    </SmallIconContainer>
  )
}

export default SmallIcon
