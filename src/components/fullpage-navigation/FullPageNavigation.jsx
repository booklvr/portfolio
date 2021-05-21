import React from 'react'

import {
  FullPageNavigationContainer,
  FullPageNavigationListItem,
  FullPageNavigationList
} from './fullPageNavigation.styles'

const FullPageNavigation = ({ fullpageApi }) => {
  const sections = ['top', 'about', 'projects', 'skills', 'contact']

  return (
    <FullPageNavigationContainer>
      <FullPageNavigationList>
        {sections.map((section, index) => (
          <FullPageNavigationListItem>
            <a></a>
            <div>{section}</div>
          </FullPageNavigationListItem>
        ))}
      </FullPageNavigationList>
    </FullPageNavigationContainer>
  )
}

export default FullPageNavigation
