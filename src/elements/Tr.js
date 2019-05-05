import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import {space, fontSize, color} from 'styled-system'

const Tr = styled('tr', { shouldForwardProp })(
  space, fontSize, color, {}
)

Tr.defaultProps = {}

export default Tr
