import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import {
  space,
  display,
  width,
  fontSize,
  lineHeight,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
  textStyle,
} from 'styled-system'

const Address = styled('address', { shouldForwardProp })(
  space,
  display,
  width,
  fontSize,
  lineHeight,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
  textStyle,
  {},
)

Address.defaultProps = {}

export default Address
