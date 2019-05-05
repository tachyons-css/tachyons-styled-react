import styled from "@emotion/styled"
import {
  space,
  width,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  borders,
  borderColor,
  borderRadius,
  color
} from "styled-system"

const Input = styled.input(
  space,
  width,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderColor,
  borderRadius,
  {}
)

Input.defaultProps = {
  type: "text"
}

export default Input
