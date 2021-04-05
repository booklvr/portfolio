import styled, { css } from 'styled-components'
import * as color from '../../styles/colors.styles'

const aboutSectionStyles = css`
  width: 50vw;
  display: flex;
`

export const AboutContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: ${color.BLACK};
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const AboutImageContainer = styled.div`
  ${aboutSectionStyles}
  background-color: ${color.BLACK};
  align-items: center;
  justify-content: center;
  img {
    max-height: 100vh;
    width: 100%;
    object-fit: cover;
  }
`

export const AboutTextContainer = styled.div`
  ${aboutSectionStyles}

  display: block;
  color: ${color.WHITE};

  h2 {
    font-size: 3.5rem;
  }

  p {
    padding-right: 5rem;
    line-height: 2rem;
    font-size: 1.2rem;
  }
`
