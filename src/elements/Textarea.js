import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import {
  display,
  space,
  width,
  maxWidth,
  fontSize,
  color,
  borders,
  borderRadius
} from "styled-system"

const Textarea = styled('textarea', { shouldForwardProp })(
  display,
  space,
  width,
  maxWidth,
  fontSize,
  color,
  borders,
  borderRadius,
  {
    overflow: "auto"
  }
)

Textarea.defaultProps = {}

export default Textarea
