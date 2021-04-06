import styled from 'styled-components'

import * as color from '../../styles/colors.styles'

export const ProjectsContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${color.WHITE};

  h2 {
    font-size: 4rem;
    font-weight: bold;
    color: ${color.BLACK};
  }
`

export const ProjectCardsContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`
