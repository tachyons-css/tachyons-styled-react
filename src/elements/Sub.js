import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import {space, fontSize, fontWeight, lineHeight, color} from 'styled-system'

const Sub = styled('sub', { shouldForwardProp })(
  space, fontSize, fontWeight, lineHeight, color, {}
)

Sub.defaultProps = {}

export default Sub
