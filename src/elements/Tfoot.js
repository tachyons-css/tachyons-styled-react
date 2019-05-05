import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import {space, width, fontSize, color} from 'styled-system'

const Tfoot = styled('tfoot', { shouldForwardProp })(
  space, width, fontSize, color, {}
)

Tfoot.defaultProps = {
  width: 1,
}

export default Tfoot
