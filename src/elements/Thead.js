import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import { space, width, fontSize, color } from "styled-system"

const Thead = styled('thead', { shouldForwardProp })(
  space, width, fontSize, color, {}
)

Thead.defaultProps = {
  width: 1
}

export default Thead
