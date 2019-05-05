import styled from "@emotion/styled"
import {
  space,
  display,
  width,
  maxWidth,
  fontSize,
  color,
  borders,
  borderColor,
  borderRadius,
} from 'styled-system'

const Form = styled.form(
  space,
  display,
  width,
  maxWidth,
  fontSize,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: 'border-box',
  },
)

Form.defaultProps = {}

export default Form
