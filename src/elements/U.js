import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import {space, width, fontSize, fontWeight, color} from 'styled-system'

const U = styled('u', { shouldForwardProp })(
  space, width, fontSize, fontWeight, color, {}
)

U.defaultProps = {}

export default U
