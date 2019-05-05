import styled from "@emotion/styled"
import {
  space,
  width,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  textStyle,
  color,
} from 'styled-system'

const Span = styled.span(
  space,
  width,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  textStyle,
  color,
  {},
)

Span.defaultProps = { 
  color: 'inherit'
}

export default Span
