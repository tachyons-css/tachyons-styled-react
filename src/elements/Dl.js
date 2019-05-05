import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import {
  space,
  width,
  maxWidth,
  display,
  fontSize,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius
} from "styled-system"

const Dl = styled('dl', { shouldForwardProp })(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
  {}
)

Dl.defaultProps = {}

export default Dl
