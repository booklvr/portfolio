import styled from 'styled-components'
import * as color from '../../styles/colors.styles'
import FormInput from '../form-input/FormInput'

export const ContactContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: green;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const ContactTitleContainer = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 1000px) {
    align-items: center;
    margin-top: 3.5rem;
  }

  h2 {
    color: ${color.WHITE};
    font-size: 4rem;
    margin: 0;
    font-weight: bold;

    @media (max-width: 1000px) {
      font-size: 3rem;
    }
  }
`

export const ContactFormContainer = styled.div`
  width: 50vw;
  padding: 3rem;

  @media (max-width: 1000px) {
    width: 100vw;
    padding: 0rem 3rem;
  }
`

export const ContactForm = styled.form`
  margin-right: 10rem;
`

export const ContactFormTextBox = styled(FormInput)`
  max-height: 5rem;
`
