import React from 'react'
import { LargeIconContainer } from './icon.styles'


const LargeIcon = ({children, ...props}) => {
  return (
    <LargeIconContainer {...props}>
      {children}
    </LargeIconContainer>
  )
}

export default LargeIcon
