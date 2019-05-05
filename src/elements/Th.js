import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import {
  space,
  width,
  fontSize,
  fontWeight,
  textAlign,
  color,
  borders,
  borderColor
} from "styled-system"

const Th = styled('th', { shouldForwardProp })(
  space,
  width,
  fontSize,
  fontWeight,
  textAlign,
  color,
  borders,
  borderColor,
  {}
)

Th.defaultProps = {
  fontWeight: "bold"
}

export default Th
