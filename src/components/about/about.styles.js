import styled from 'styled-components'
import * as color from '../../styles/colors.styles'
import * as font from '../../styles/fonts.styles.js'

export const AboutContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: ${color.BLACK};
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

export const AboutImageContainer = styled.div`
  background-color: ${color.BLACK};
  align-items: center;
  justify-content: center;
  img {
    max-height: 100vh;
    width: 100%;
    object-fit: cover;

    @media (max-width: 1000px) {
      max-height: 300px;
    }

    @media (max-width: 750px) {
      max-height: 200px;
    }
  }

  @media (max-width: 500px) {
    display: none;
  }
`

export const AboutTextContainer = styled.div`
  display: block;
  color: ${color.WHITE};

  p {
    padding-right: 5rem;
    line-height: 2rem;
    font-family: ${font.FONT_SECONDARY};
    font-size: 1.2rem;

    @media (max-width: 750px) {
      padding: 1rem;
      line-height: 1.3rem;
      font-size: 1rem;
    }

    @media (max-width: 400px) {
      line-height: 1.1rem;
      font-size: 0.75rem;
    }
  }
`
