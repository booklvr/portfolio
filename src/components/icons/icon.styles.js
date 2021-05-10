import styled, { css } from 'styled-components'
import * as color from '../../styles/colors.styles'

const exitButtonStyles = css`
  top: 10px;
  right: 10px;
`

const scrollButtonStyles = css`
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
`

const contactButtonStyles = css`
  position: fixed;
  bottom: 20px;
  right: 10px;
`

const hamburgerMenuStyles = css`
  position: fixed;
  top: 10px;
  right: 10px;
`

const aboutButtonStyles = css`
  position: fixed;
  bottom: 60px;
  right: 10px;
`

const expandButtonStyles = css`
  color: ${color.WHITE};
  cursor: pointer;
  i {
    color: white;
  }
`

const getButtonStyles = ({ icon }) => {
  // console.log('icon', icon)
  switch (icon) {
    case 'scroll-down':
      return scrollButtonStyles
    case 'contact':
      return contactButtonStyles
    case 'hamburger-menu':
      return hamburgerMenuStyles
    case 'about':
      return aboutButtonStyles
    case 'expand':
      return expandButtonStyles
    case 'exit':
      return exitButtonStyles
    default:
      return
  }
}

export const IconContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  z-index: 100;
  cursor: pointer;
  i {
    color: lightgrey;
  }

  ${getButtonStyles}
`

export const SmallIconContainer = styled(IconContainer)`
  height: 3rem;
  width: 3rem;

  i {
    font-size: 20px;
  }

  img {
    width: 2rem;
    height: 2rem;
  }
`

export const LargeIconContainer = styled(IconContainer)`
  height: 5rem;
  width: 5rem;

  i {
    font-size: 40px;
  }
`
