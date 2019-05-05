import styled from "@emotion/styled"
import {
  space,
  width,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderColor,
  borderRadius
} from "styled-system"

const Samp = styled.samp(
  space,
  width,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: "border-box",
    fontFamily: "monospace, monospace"
  }
)

Samp.defaultProps = {
  fontSize: 2
}

export default Samp
