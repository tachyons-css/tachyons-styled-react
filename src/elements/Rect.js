import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import { color } from "styled-system"

const Rect = styled('rect', { shouldForwardProp })(
  color, 
  {
  boxSizing: "border-box"
})

Rect.defaultProps = {
  fill: "currentColor"
}

export default Rect
