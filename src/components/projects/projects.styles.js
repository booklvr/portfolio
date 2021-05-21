import styled from 'styled-components'

import * as color from '../../styles/colors.styles'

export const ProjectsContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${color.WHITE};
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  padding: 0 2rem;
`

export const ProjectCardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    height: 90%;
    flex-direction: column;
    justify-content: space-around;
    align-items: space-around;
  }
`
