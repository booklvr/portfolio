import styled from 'styled-components'

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
  }

  &::after {
    content: '';
    height: 100%;
    width: 100%;
    background-color: pink;
    opacity: 0.5;
  }
`
