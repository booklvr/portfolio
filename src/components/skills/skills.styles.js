import styled from 'styled-components'
import * as color from '../../styles/colors.styles'

export const SkillsContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${color.BLACK};
`

export const SkillsTextAndTitleContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding-top: 3rem;
  color: ${color.WHITE};
`

export const SkillsTextContainer = styled.div`
  width: 50vw;
  display: flex;
  padding: 0 5rem;
  font-size: 1.2rem;

  p {
    margin: 0;
    color: ${color.WHITE};
  }
`

export const SkillsTitleContainer = styled.div`
  width: 50vw;

  h2 {
    font-weight: bold;
    font-size: 4rem;
    margin: 0;
    padding: 0;
    line-height: 0.7;
  }
`

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  padding: 0 5rem 5rem;
`

export const IconContainer = styled.div`
  height: 10rem;
  width: 10rem;
  background-color: ${color.BLACK};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
    height: 80%;
  }
`
