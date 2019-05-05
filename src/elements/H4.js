import styled from "@emotion/styled"
import {
  space,
  width,
  maxWidth,
  display,
  alignItems,
  justifyContent,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderColor,
  textStyle,
} from 'styled-system'

const H4 = styled.h4(
  space,
  width,
  maxWidth,
  display,
  alignItems,
  justifyContent,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderColor,
  textStyle,
  {
    boxSizing: 'border-box',
  },
)

H4.defaultProps = {}

export default H4
