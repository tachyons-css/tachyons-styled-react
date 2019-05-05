import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import {
  space,
  width,
  fontSize,
  textStyle,
  color,
  borders,
  borderColor,
  borderRadius
} from "styled-system"

const Kbd = styled('code', { shouldForwardProp })(
  space,
  width,
  fontSize,
  textStyle,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: "border-box",
    fontFamily: "monospace, monospace"
  }
)

Kbd.defaultProps = {
  fontSize: 2
}

export default Kbd
