import styled from 'styled-components'

export const FullPageNavigationContainer = styled.div`
  z-index: 1000;
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
`

export const FullPageNavigationListItem = styled.li`
  list-style: none;
  width: 5rem;
  height: 5rem;

  span {
    display: block;
    width: 10px;
    height: 10px;
    background-color: blue;
  }

  div {
    display: none;
  }

  hover {
    div {
      display: block;
    }
  }
`
