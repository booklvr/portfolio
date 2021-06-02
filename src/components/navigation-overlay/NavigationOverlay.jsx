import React, { useEffect } from 'react'

import {
  NavigationOverlayContainer,
  NavigationList,
  NavigationListItem,
} from './navigationOverlay'

import LargeIcon from '../../components/icons/LargeIcon'

const NavigationOverlay = ({
  showNavigation,
  fullpageApi,
  setShowNavigation,
  activeSection,
}) => {
  const navLinks = ['Home', 'About', 'Projects', 'Skills', 'Contact']

  console.log('windowfullpage', window.fullpage_api)

  const handleClick = (index) => {
    console.log('showNavigation', showNavigation)
    window.fullpage_api.silentMoveTo(index + 1)
    window.fullpage_api.setAllowScrolling(true)
    setShowNavigation(false)
  }

  const handleExit = () => {
    setShowNavigation(false)
    window.fullpage_api.setAllowScrolling(true)
  }

  useEffect(() => {
    window.fullpage_api.setAllowScrolling(false)
  }, [])

  return (
    <NavigationOverlayContainer
      showNavigation={showNavigation}
      activeSection={activeSection}
    >
      <LargeIcon icon='exit' onClick={handleExit}>
        <i className='fas fa-times'></i>
      </LargeIcon>
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
