import styled from "@emotion/styled"
import {
  space,
  width,
  maxWidth,
  display,
  fontSize,
  lineHeight,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius
} from "styled-system"

const Aside = styled.aside(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  lineHeight,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: "border-box"
  }
)

Aside.defaultProps = {}

export default Aside
