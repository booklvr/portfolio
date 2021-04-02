import styled, { css } from 'styled-components'

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

const getButtonStyles = ({ icon }) => {
  console.log('icon', icon)
  switch (icon) {
    case 'scroll-down':
      return scrollButtonStyles
    case 'contact':
      return contactButtonStyles
    case 'hamburger-menu':
      return hamburgerMenuStyles
    default:
      return
  }
}

export const SmallIconContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  background-color: darkgrey;
  i {
    font-size: 20px;
    color: lightgrey;
  }

  ${getButtonStyles}
`
