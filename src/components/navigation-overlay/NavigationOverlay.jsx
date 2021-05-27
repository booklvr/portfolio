import React, { useEffect } from 'react'

import {
  NavigationOverlayContainer,
  NavigationList,
  NavigationListItem,
} from './navigationOverlay'

const NavigationOverlay = ({
  showNavigation,
  fullpageApi,
  setShowNavigation,
  activeSection,
}) => {
  const navLinks = ['Home', 'About', 'Projects', 'Skills', 'Contact']

  const handleClick = (index) => {
    fullpageApi.silentMoveTo(index + 1)
    fullpageApi.setAllowScrolling(true)
    setShowNavigation(false)
  }

  useEffect(() => {
    if (showNavigation) {
      console.log('show navigation and prevent scrolling')
      fullpageApi.setAllowScrolling(false)
    } else {
      fullpageApi.setAllowScrolling(true)
    }
  }, [showNavigation])

  return (
    <NavigationOverlayContainer
      showNavigation={showNavigation}
      activeSection={activeSection}
    >
      <NavigationList id='#myMenu'>
        {navLinks.map((link, index) => (
          <NavigationListItem
            data-menu-anchor={
              ['header', 'about', 'projects', 'skills', 'contact'][index]
            }
            key={index}
            onClick={() => {
              handleClick(index)
            }}
          >
            {link}
          </NavigationListItem>
        ))}
      </NavigationList>
    </NavigationOverlayContainer>
  )
}

export default NavigationOverlay
