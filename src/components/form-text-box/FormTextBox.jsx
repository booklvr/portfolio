import React, { useState } from 'react'

// STYLES
import {
  FormTextBoxContainer,
  FormTextBoxLabel,
  GroupContainer,
} from './formTextBox.styles'

const FormTextBox = ({ handleChange, label, ...otherProps }) => {
  const [focus, setFocus] = useState(false)

  return (
    <GroupContainer>
      <FormTextBoxContainer
        onChange={(e) => handleChange(e.target.value)}
        {...otherProps}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {label && (
        <FormTextBoxLabel
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {focus || otherProps.value.length ? 'Message' : label}
        </FormTextBoxLabel>
      )}
    </GroupContainer>
  )
}

export default FormTextBox
