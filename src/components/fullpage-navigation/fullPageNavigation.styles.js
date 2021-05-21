import styled from 'styled-components'

export const FullPageNavigationContainer = styled.div`
  z-index: 1000;
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
`

export const FullPageNavigationList = styled.ul`
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 0;
  list-style: none;
  cursor: default;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const FullPageNavigationListItem = styled.li`
  position: relative;
  display: block;
  float: left;
  margin: 0 16px;
  width: 16px;
  height: 16px;
  cursor: pointer;

  a {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    outline: none;
    border-radius: 50%;
    background-color: #fff;
    background-color: rgba(255, 255, 255, 0.3);
    text-indent: -999em; /* make the text accessible to screen readers */
    cursor: pointer;
    position: absolute;
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
