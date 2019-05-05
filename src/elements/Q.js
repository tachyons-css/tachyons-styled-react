import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import {
  space,
  width,
  fontSize,
  fontWeight,
  lineHeight,
  color,
} from 'styled-system'

const Q = styled('q', { shouldForwardProp })(
  space, width, fontSize, fontWeight, lineHeight, color, {}
)

Q.defaultProps = {}

export default Q
