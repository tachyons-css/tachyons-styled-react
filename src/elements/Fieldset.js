import styled from "@emotion/styled"
import {
  space,
  width,
  maxWidth,
  display,
  fontSize,
  color,
  borders,
  borderColor,
  borderRadius,
} from 'styled-system'

const Fieldset = styled.fieldset(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: 'border-box',
  },
)

Fieldset.defaultProps = {}

export default Fieldset
