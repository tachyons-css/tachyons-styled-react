import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import { space, width, fontSize, color } from "styled-system"

const Tbody = styled('tbody', { shouldForwardProp })(
  space, width, fontSize, color, {}
)

Tbody.defaultProps = {
  width: 1
}

export default Tbody
