import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import {
  space,
  width,
  fontSize,
  fontWeight,
  lineHeight,
  borderRadius,
  color,
} from 'styled-system'

const Sup = styled('sup', { shouldForwardProp })(
  space, fontSize, fontWeight, lineHeight, color, borderRadius, {}
)

Sup.defaultProps = {}

export default Sup
