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

const InputCheckbox = styled.input(
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
  {},
)

InputCheckbox.defaultProps = {
  type: 'checkbox',
}

export default InputCheckbox
