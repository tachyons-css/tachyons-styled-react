import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import { space, width, fontSize, color } from 'styled-system'

const S = styled('s', { shouldForwardProp })(
  space, width, fontSize, color, {}
)

S.defaultProps = {}

export default S
