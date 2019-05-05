import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import {
  space,
  display,
  width,
  fontSize,
  fontWeight,
  textAlign,
  color,
} from 'styled-system'

const Details = styled('details', { shouldForwardProp })(
  space,
  display,
  width,
  fontSize,
  fontWeight,
  textAlign,
  color,
  {},
)

Details.defaultProps = {
  display: 'block',
}

export default Details
