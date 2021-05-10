import React, { forwardRef } from 'react'

// SVGS
import reactIcon from '../../assets/icons/react-icon.svg'
// import firebaseIcon from '../../assets/icons/firebase-icon.svg'
import html5Icon from '../../assets/icons/html5-icon.svg'
import mongodbIcon from '../../assets/icons/mongodb-icon.svg'
import css3Icon from '../../assets/icons/css3-icon.svg'
import sassIcon from '../../assets/icons/sass-icon.svg'
import nodeIcon from '../../assets/icons/node-icon.svg'
import javascriptIcon from '../../assets/icons/javascript-icon.svg'

import {
  IconContainer,
  IconsContainer,
  SkillsContainer,
  SkillsTextAndTitleContainer,
  SkillsTextContainer,
  SkillsTitleContainer,
} from './skills.styles'

const Skills = forwardRef((props, ref) => {
  return (
    <SkillsContainer ref={ref}>
      <SkillsTextAndTitleContainer>
        <SkillsTextContainer>
          <p>
            I am focused on using a react for my frontend, nodeJs for my
            backend, with a mongodb database, but I am more than happy to work
            with any other technologies.
          </p>
        </SkillsTextContainer>
        <SkillsTitleContainer>
          <h2>SKILLS</h2>
        </SkillsTitleContainer>
      </SkillsTextAndTitleContainer>
      <IconsContainer>
        <IconContainer>
          <img src={reactIcon} alt='react icon' />
        </IconContainer>
        <IconContainer>
          <img src={nodeIcon} alt='node icon' />
        </IconContainer>
        <IconContainer>
          <img src={mongodbIcon} alt='mongodb icon' />
        </IconContainer>
        <IconContainer>
          <img src={sassIcon} alt='sass icon' />
        </IconContainer>
        <IconContainer>
          <img src={javascriptIcon} alt='javascript icon' />
        </IconContainer>
        <IconContainer>
          <img src={html5Icon} alt='html5 icon' />
        </IconContainer>
        <IconContainer>
          <img src={css3Icon} alt='css3 icon' />
        </IconContainer>
      </IconsContainer>
    </SkillsContainer>
  )
})

export default Skills
