import styled from 'styled-components'
import * as color from '../../styles/colors.styles'
import FormInput from '../form-input/FormInput'

export const ContactContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: green;
  display: flex;
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
    font-weight: bold;
  }
`

export const ContactFormContainer = styled.div`
  width: 50vw;
  height: 100%;
  padding: 3rem;
`

export const ContactForm = styled.form`
  width: 80%;
`

export const ContactFormTextBox = styled(FormInput)`
  height: 5rem;
`
