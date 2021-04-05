import React, { useState } from 'react'

// COMPONENTS
import FormInput from '../form-input/FormInput'
import FormTextBox from '../form-text-box/FormTextBox'

import {
  ContactContainer,
  ContactForm,
  ContactFormContainer,
  ContactFormTextBox,
  ContactTitleContainer,
} from './contact.styles'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <ContactContainer>
      <ContactTitleContainer>
        <h2>Let's</h2>
        <h2>Work</h2>
        <h2>Together</h2>
      </ContactTitleContainer>
      <ContactFormContainer>
        <ContactForm>
          <FormInput
            type='text'
            name='name'
            value={name}
            label={'Name'}
            handleChange={setName}
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            label={'Email'}
            handleChange={setEmail}
            required
          />
          <FormTextBox
            type='text'
            name='message'
            value={message}
            label={
              'Please tell me a little about yourself, or your business.  I would love work with you on your next project.  Send me a message for a free quote.'  
            }
            handleChange={setMessage}
            required
          />
        </ContactForm>
      </ContactFormContainer>
    </ContactContainer>
  )
}

export default Contact
