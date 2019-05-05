import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import {
  space,
  width,
  fontSize,
  fontWeight,
  textAlign,
  color,
  display,
  textStyle
} from "styled-system"

const Abbr = styled('abbr', { shouldForwardProp })(
  space,
  width,
  fontSize,
  fontWeight,
  textAlign,
  color,
  display,
  textStyle,
  {}
)

Abbr.defaultProps = {}

export default Abbr
