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

const InputFile = styled.input(
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

InputFile.defaultProps = {
  type: "file"
}

export default InputFile
