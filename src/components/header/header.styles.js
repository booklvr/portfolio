import styled from 'styled-components'
import * as color from '../../styles/colors.styles'

export const HeaderContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: darkgrey;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderJumbotronContainer = styled.div`
  width: 600px;
  height: 300px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 100;
  background-color: ${color.WHITE};
  color: ${color.WHITE};
  opacity: 0.5;
  padding-bottom: 2rem;
  box-shadow: 10px 10px 100px #fff;
  border-radius: 10px;

  h2 {
    color: ${color.BLACK};
  }
`

export const BackgroundImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center bottom;
  }

  &::after {
    content: ''; // ::before and ::after both require content
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #010101;
    /* background-image: linear-gradient(120deg, #eaee44, #33d0ff); */
    opacity: 0.85;
  }
`
