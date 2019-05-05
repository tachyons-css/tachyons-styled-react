import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import {space, fontSize, fontWeight, color} from 'styled-system'

const Strong = styled('strong', { shouldForwardProp })(
  space, fontSize, fontWeight, color, {}
)

Strong.defaultProps = {
  fontWeight: 'bolder',
}

export default Strong
