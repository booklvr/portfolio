import styled from 'styled-components'
import * as color from '../../styles/colors.styles'

export const ContactContainer = styled.div`
  width: 100vw;
  height: 50vh;
  background-color: ${color.BLACK};
`

export const ContactTitleContainer = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  h2 {
    color: ${color.WHITE};
    font-size: 4rem;
    margin: 0;
  }
`

export const ContactFormContainer = styled.div`
  width: 50vw;
  height: 100%;
`

export const ContactForm = styled.form``

export const ContactFormInput = styled.input``

export const ContactFormLabel = styled.label``
