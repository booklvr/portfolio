import styled from 'styled-components'
import * as color from '../../styles/colors.styles'
import CustomButton from '../../components/custom-button/CustomButton'

export const GifPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${color.BLACK};
  padding: 2rem;
`

export const GifButtonsContainer = styled.div`
  margin-top: 2rem;
  width: 30rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const GifPageLink = styled.a`
  text-decoration: none;
  &:visted {
    text-decoration: none;
  }
`

export const BackButton = styled(CustomButton)`
  position: fixed;
  left: 10px;
  top: 20px;
  z-index: 100;
`
