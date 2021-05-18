import React from 'react'

import {
  FullPageNavigationContainer,
  FullPageNavigationListItem,
} from './fullPageNavigation.styles'

const FullPageNavigation = ({ fullpageApi }) => {
  const sections = ['top', 'about', 'projects', 'skills', 'contact']

  return (
    <FullPageNavigationContainer>
      <ul>
        {sections.map((section, index) => (
          <FullPageNavigationListItem>
            <span></span>
            <div>{section}</div>
          </FullPageNavigationListItem>
        ))}
      </ul>
    </FullPageNavigationContainer>
  )
}

export default FullPageNavigation
