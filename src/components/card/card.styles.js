import styled from 'styled-components'

import * as color from '../../styles/colors.styles'
import * as font from '../../styles/fonts.styles'

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 5rem;

  /* transition: transform 350ms ease; */
`

export const CardTitle = styled.h3`
  font-family: ${font.FONT_MAIN};
  text-transform: uppercase;
  padding-left: 0.5rem;
`

export const IconsContainer = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  bottom: 1rem;
  justify-content: space-around;
  opacity: 1;
  transition: opacity 250ms ease;

  @media (max-width: 1360px) {
    display: none;
  }

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    padding: 0.5rem;
    background-color: black;
  }
`

export const GifContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem 2rem 5rem 2rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  opacity: 0;

  transition: opacity 500ms ease;

  img {
    width: 90%;
    height: auto;
  }

  @media (max-width: 500px) {
    display: none;
  }
`

export const SmallCard = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  overflow-y: hidden;

  a {
    width: 50%;

    img {
      width: 100%;
      object-fit: cover;
    }
  }
`

export const SmallCardRight = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 50%;

  img {
    object-fit: none;
    height: 100%;
    padding: 0.5rem;
  }
`

export const SmallCardButton = styled.div`
  padding-left: 0.5rem;
  position: absolute;
  bottom: 10px;
  left: 0;

  &:hover {
    transform: translateX(2px) scale(1.1);
  }
`

export const CardContainer = styled.div`
  width: 40rem;
  height: 20rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 1rem;
  border: 1px solid ${color.BLACK};

  h3 {
    margin: 1rem 0;
  }

  p {
    margin: 1rem 2rem;
    opacity: 1;

    transition: all 250ms ease;
  }

  &:hover {
    p {
      transform: translateY(-4rem);
      opacity: 0;
    }
  }

  &:hover ${ButtonsContainer} {
    transform: translateY(4rem);
  }

  &:hover ${IconsContainer} {
    opacity: 0;
  }

  &:hover ${GifContainer} {
    opacity: 1;
  }

  @media (max-width: 1360px) {
    width: 35rem;
  }

  @media (max-width: 1200px) {
    width: 30rem;
  }

  @media (max-width: 1000px) {
    width: 25rem;
  }

  @media (max-width: 500px) {
    height: 7rem;
  }
`
