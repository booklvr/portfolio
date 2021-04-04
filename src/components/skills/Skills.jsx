import React from 'react'

// SVGS
import reactIcon from '../../assets/icons/react-icon.svg'
import firebaseIcon from '../../assets/icons/firebase-icon.svg'
// import { ReactComponent as HTML5Icon } from '../../assets/icons/html5-icon.svg'
// import { ReactComponent as MongodbIcon } from '../../assets/icons/mongodb-icon.svg'
// // import { ReactComponent as CSS3Icon } from '../../assets/icons/css3-icon.svg'
// import { ReactComponent as SassIcon } from '../../assets/icons/sass-icon.svg'
// import { ReactComponent as NodeIcon } from '../../assets/icons/node-icon.svg'

import { IconContainer, IconsContainer, SkillsContainer } from './skills.styles'

const Skills = () => {
  return (
    <SkillsContainer>
      <IconsContainer>
        <IconContainer>
          <img src={reactIcon} alt='react icon' />
        </IconContainer>
        <IconContainer>
          <img src={firebaseIcon} alt='firebase icon' />
        </IconContainer>
      </IconsContainer>
      <h2>Skills</h2>
    </SkillsContainer>
  )
}

export default Skills
