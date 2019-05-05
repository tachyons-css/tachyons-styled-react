import styled from "@emotion/styled"
import {
  space,
  width,
  fontSize,
  color,
  borders,
  borderColor,
  borderRadius
} from "styled-system"

const Kbd = styled.code(
  space,
  width,
  fontSize,
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
