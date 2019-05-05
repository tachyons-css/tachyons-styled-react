import styled from "@emotion/styled"
import {
  space,
  width,
  maxWidth,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  textStyle,
  color,
} from 'styled-system'

const Label = styled.label(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  textStyle,
  color,
  {},
)

Label.defaultProps = {}

export default Label
