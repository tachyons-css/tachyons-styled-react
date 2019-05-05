import styled from "@emotion/styled"
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

const Th = styled.th(
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
