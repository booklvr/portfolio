import styled, { css } from 'styled-components'
import * as color from '../../styles/colors.styles'

const smallButtonStyles = css`
  border: none;
  background-color: inherit;
  color: ${color.WHITE};
`

const getButtonStyles = (props) => {
  if (props.isSmallButton) {
    return smallButtonStyles
  }
}

export const CustomButtonContainer = styled.button`
  border: 1px solid black;
  min-width: 9rem;
  height: 50px;
  padding: 0 1rem;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background-color: ${color.WHITE};

  &:hover {
    transform: scale(1.1);
  }

  transition: transform 0.3s ease;

  ${getButtonStyles}
`
