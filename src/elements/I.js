import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import {space, width, fontSize, fontWeight, textStyle, color} from 'styled-system'

const I = styled('i', { shouldForwardProp })(
  space, width, fontSize, fontWeight, color, textStyle, {}
)

I.defaultProps = {}

export default I
