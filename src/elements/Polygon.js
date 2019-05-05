import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import { color } from "styled-system"

const Polygon = styled('polygon', { shouldForwardProp })(
  color, 
  {
    boxSizing: "border-box"
  }
)

Polygon.defaultProps = {
  fill: "currentColor"
}

export default Polygon
