import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import { color } from "styled-system"

const Circle = styled('circle', { shouldForwardProp })(
  color, 
  {
    boxSizing: "border-box" 
  }
) 


Circle.defaultProps = {
  fill: "currentColor"
}

export default Circle
