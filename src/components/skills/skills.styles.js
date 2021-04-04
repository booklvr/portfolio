import styled from 'styled-components'

export const SkillsContainer = styled.div`
  width: 100vw;
  min-height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: green;

  h2 {
    font-size: 3.5rem;
  }
`

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20rem;
  width: 100vw;
`

export const IconContainer = styled.div`
  height: 10rem;
  width: 10rem;

  img {
    width: 100%;
    height: 100%;
  }
`
