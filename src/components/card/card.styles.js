import styled from 'styled-components'

import * as color from '../../styles/colors.styles'

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
    background-color: red;
    width: 35rem;
  }

  @media (max-width: 1200px) {
    width: 30rem;
  }

  @media (max-width: 1000px) {
    width: 25rem;
  }

  @media (max-width: 500px) {
    height: 10rem;
  }
`
