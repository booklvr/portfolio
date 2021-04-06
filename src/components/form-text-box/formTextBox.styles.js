import styled, { css } from 'styled-components'

import * as color from '../../styles/colors.styles'

const shrinkLabelStyles = css`
  top: -18px;
  font-size: 12px;
  color: ${color.BLACK};
  content: 'Message';
  line-height: 1;
`

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`

export const FormTextBoxContainer = styled.textarea`
  background: none;
  background-color: white;
  color: ${color.GREY};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  height: 10rem;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${color.GREY};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`

export const FormTextBoxLabel = styled.label`
  color: ${color.GREY};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  line-height: 1.5;

  &.shrink {
    ${shrinkLabelStyles}
  }
`
