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

  setTimeout(() => {
    console.log(fullpageApi.version)
  }, 1000)

  // console.log(fullpageApi.version)

  // fullpageApi.setAllowScrolling(false)

  const setScrolling = () => {
    // fullpageApi.setAllowScrolling(showNavigation)
  }

  // useEffect(() => {}, [showNavigation])

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
