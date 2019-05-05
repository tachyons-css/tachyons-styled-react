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

const H1 = styled.h1(
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

H1.defaultProps = {}

export default H1
