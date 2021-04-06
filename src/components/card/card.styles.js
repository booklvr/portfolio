import styled from 'styled-components'

import * as color from '../../styles/colors.styles'

export const CardContainer = styled.div`
  width: 25rem;
  height: 20rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 1rem;
  border: 1px solid ${color.BLACK};
`

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
`

export const IconsContainer = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  bottom: 0;
  justify-content: space-around;
`
