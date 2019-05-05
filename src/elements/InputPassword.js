import styled from "@emotion/styled"
import {
  space,
  width,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  borders,
  borderColor,
  borderRadius,
  color,
} from 'styled-system'

const InputPassword = styled.input(
  space,
  width,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: 'border-box',
  },
)

InputPassword.defaultProps = {
  type: 'password',
}

export default InputPassword
