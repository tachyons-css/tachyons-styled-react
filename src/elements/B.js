import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import {space, width, display, fontSize, fontWeight, color} from 'styled-system'

const B = styled('b', { shouldForwardProp })(
  space, width, display, fontSize, fontWeight, color, 
  {}
)

B.defaultProps = {
  fontWeight: 'bolder',
}

export default B
