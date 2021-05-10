import React, { useEffect, forwardRef, useState } from 'react'

import computerImage from '../../assets/computer.jpeg'
import SmallIcon from '../icons/SmallIcon'
import { SmallIconContainer } from '../icons/icon.styles'

import {
  AboutContainer,
  AboutImageContainer,
  AboutTextContainer,
} from './about.styles'

const About = forwardRef((props, ref) => {
  // const ref = useRef(null)

  const [scroll, setScroll] = useState({
    y: 0,
    direction: '',
  })

  const handleScroll = () => {
    setScroll((prev) => ({
      y: -ref.current.getBoundingClientRect().top,
      // Here we’re comparing the previous state to the current state to get the scroll direction
      direction:
        prev.y > -ref.current.getBoundingClientRect().top ? 'up' : 'down',
    }))

    console.log('scroll', scroll)

    const aboutTop = ref.current.getBoundingClientRect().top
    console.log('aboutTop', aboutTop)
  }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)

  //   return () => window.removeEventListener('scroll', handleScroll)
  // })
  return (
    <AboutContainer ref={ref}>
      <AboutImageContainer>
        <img src={computerImage} alt='computer' />
      </AboutImageContainer>
      <AboutTextContainer>
        <h2>ABOUT ME</h2>
        <p>
          My name is Nick de Waal and I am a full stack developer currently
          located in Korea with plans to move to Vancouver, British Columbia
          soon. I specialize coding***. I believe web development is a process,
          and through research and innovative thinking the right solutions will
          present themselves.
        </p>
        <p>
          I have been working as an English Teacher in Korea for the past 6
          years, and have been using my passion for code in the classroom to
          create fun web games for my students as well as tools for my
          colleagues. My websites are being used by teachers all over the world.
          I have enjoyed working on these projects so much that I am now leaving
          teaching to focus 100% of my time and energy into creating new
          innovative web solutions.
        </p>
        <p>
          If you have any projects that you'd like to work on together, please
          don't hesitate to get in touch.
        </p>
      </AboutTextContainer>
      <SmallIcon icon='about'>
        <i className='fas fa-address-card'></i>
      </SmallIcon>
      <SmallIconContainer icon='scroll-down'>
        <i className='fas fa-arrow-down'></i>
      </SmallIconContainer>
    </AboutContainer>
  )
})

export default About
