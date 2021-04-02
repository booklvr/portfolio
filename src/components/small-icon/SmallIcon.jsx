import React from 'react'
import { SmallIconContainer } from './smallIcon.styles'

const SmallIcon = ({children, ...props}) => {
  return (
    <SmallIconContainer {...props}>
      {children}
    </SmallIconContainer>
  )
}

export default SmallIcon
