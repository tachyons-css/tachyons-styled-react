import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import {
  space,
  width,
  fontSize,
  fontWeight,
  lineHeight,
  textStyle,
  color,
} from 'styled-system'

const Small = styled('small', { shouldForwardProp })(
  space,
  width,
  fontSize,
  fontWeight,
  lineHeight,
  textStyle,
  color,
  {},
)

Small.defaultProps = {}

export default Small
