import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import { space, width, display, fontSize, color, textStyle } from "styled-system"

const Em = styled('em', { shouldForwardProp })(
  space, width, display, fontSize, color, textStyle, {}
)

Em.defaultProps = {}

export default Em
