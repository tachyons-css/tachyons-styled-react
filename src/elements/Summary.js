import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import {
  space,
  display,
  width,
  fontSize,
  fontWeight,
  textAlign,
  color,
} from 'styled-system'

const Summary = styled('summary', { shouldForwardProp })(
  space,
  display,
  width,
  fontSize,
  fontWeight,
  textAlign,
  color,
  {},
)

Summary.defaultProps = {}

export default Summary
