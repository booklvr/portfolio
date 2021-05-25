import React from 'react'

import {
  FullScreenNavigationOverlayContainer,
  NavigationList,
  NavigationListItem,
} from './fullScreenNavigationOverlay'

const FullScreenNavigationOverlay = ({
  showNavigation,
  fullpageApi,
  setShowNavigation,
}) => {
  const navLinks = ['Home', 'About', 'Projects', 'Skills', 'Contact']

  const handleClick = (index) => {
    fullpageApi.silentMoveTo(index + 1)
  }

  return (
    <FullScreenNavigationOverlayContainer showNavigation={showNavigation}>
      <NavigationList>
        {navLinks.map((link, index) => (
          <NavigationListItem
            onClick={() => {
              handleClick(index)
            }}
          >
            {link}
          </NavigationListItem>
        ))}
      </NavigationList>
    </FullScreenNavigationOverlayContainer>
  )
}

export default FullScreenNavigationOverlay
