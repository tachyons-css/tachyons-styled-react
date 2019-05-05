import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import {
  space,
  width,
  maxWidth,
  display,
  fontSize,
  fontWeight,
  color,
  borders,
  borderColor,
  borderRadius
} from "styled-system"

const Legend = styled('legend', { shouldForwardProp })(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  fontWeight,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: "border-box",
    maxWidth: "100%",
    whiteSpace: "normal"
  }
)

Legend.defaultProps = {
  color: "inherit",
  display: "table",
  p: 0
}

export default Legend
