import styled from 'styled-components'

export const HeadingText = styled.h1`
  text-transform: uppercase;
  font-family: 'Oswald';
  font-size: 4rem;

  @media (max-width: 1300px) {
    font-size: 3rem;
  }

  @media (max-width: 1000px) {
    font-size: 2.5rem;
  }

  @media (max-width: 750px) {
    font-size: 2rem;
    padding-left: 1rem;
  }

  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`
