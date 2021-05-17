import React from 'react'

// STYLES
import { HeadingText } from './heading.styles'

const Heading = ({ children, ...props }) => {
  return <HeadingText {...props}>{children}</HeadingText>
}

export default Heading
