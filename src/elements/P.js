import styled from "@emotion/styled"
import {
  space,
  width,
  display,
  maxWidth,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  textStyle,
  color,
  borders,
  borderColor,
  borderRadius,
} from 'styled-system'

const P = styled.p(
  space,
  width,
  display,
  maxWidth,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  textStyle,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: 'border-box',
  },
)

P.defaultProps = {
  maxWidth: '42em', // Sets text to maximum ~80 characters wide
  lineHeight: 1.5,
}

export default P
