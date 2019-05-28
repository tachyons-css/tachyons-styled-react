import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import {
  space,
  width,
  display,
  fontSize,
  fontWeight,
  fontFamily,
  lineHeight,
  textAlign,
  textStyle,
  color,
  borders,
  borderRadius,
} from 'styled-system'

const Span = styled('span', { shouldForwardProp })(
  space,
  width,
  display,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  textStyle,
  color,
  borders,
  borderRadius,
  {},
)

Span.defaultProps = { 
  color: 'inherit'
}

export default Span
