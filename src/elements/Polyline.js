import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import { color } from 'styled-system'

const Polyline = styled('polyline', { shouldForwardProp })(
  color, 
  {
    boxSizing: 'border-box',
  }
)

Polyline.defaultProps = {
  fill: 'currentColor',
}

export default Polyline
