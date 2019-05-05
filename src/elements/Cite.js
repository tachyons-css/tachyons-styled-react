import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import {
  space,
  width,
  display,
  fontSize,
  lineHeight,
  textAlign,
  textStyle,
  color,
  borders,
  borderColor,
} from "styled-system"

const Cite = styled('cite', { shouldForwardProp })(
  space,
  width,
  display,
  fontSize,
  lineHeight,
  textAlign,
  textStyle,
  color,
  borders,
  borderColor,
  {}
)

Cite.defaultProps = {}

export default Cite
