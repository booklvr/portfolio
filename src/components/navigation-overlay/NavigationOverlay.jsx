import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

import {
  NavigationOverlayContainer,
  NavigationList,
  NavigationListItem,
} from './navigationOverlay'

import LargeIcon from '../../components/icons/LargeIcon'

const NavigationOverlay = ({
  showNavigation,
  setShowNavigation,
  activeSection,
}) => {
  const navLinks = ['Home', 'About', 'Projects', 'Skills', 'Contact']
  // REFS
  const exitIcon = useRef(null)

  const handleClick = (index) => {
    window.fullpage_api.silentMoveTo(index + 1)
    window.fullpage_api.setAllowScrolling(true)
    setShowNavigation(false)
  }

  const handleExit = () => {
    setShowNavigation(false)
    window.fullpage_api.setAllowScrolling(true)
  }

  useEffect(() => {
    gsap.from(exitIcon.current, {
      autoAlpha: 0,
      ease: 'none',
      delay: 1,
    })
  }, [])

  return (
    <NavigationOverlayContainer
      showNavigation={showNavigation}
      activeSection={activeSection}
    >
      <LargeIcon icon='exit' ref={exitIcon} onClick={handleExit}>
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
