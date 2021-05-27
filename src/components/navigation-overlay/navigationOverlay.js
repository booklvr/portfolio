import styled from 'styled-components'
import * as color from '../../styles/colors.styles'
import * as font from '../../styles/fonts.styles.js'

export const NavigationOverlayContainer = styled.div`
  top: ${(props) => props.activeSection * 100}vh;
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: ${(props) => (props.showNavigation ? 'flex' : 'none')};
  /* display: flex; */
  background-color: ${color.BLACK};
  z-index: 10000;
`

export const NavigationList = styled.ul`
  padding: 5rem 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;
`

export const NavigationListItem = styled.li`
  color: ${color.WHITE};
  font-family: ${font.FONT_MAIN};
  letter-spacing: 0.5rem;
  font-size: 2rem;
`
