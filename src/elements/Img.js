import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"

import {
  space,
  display,
  width,
  maxWidth,
  height,
  color,
  borders,
  borderColor,
  borderRadius,
} from 'styled-system'

const Img = styled('img', { shouldForwardProp })(
  space,
  display,
  width,
  maxWidth,
  height,
  color,
  borders,
  borderColor,
  borderRadius,
  {

  },
)

Img.defaultProps = {
  width: 1,
  display: 'block',
  maxWidth: '100%',
  border: '0 none transparent'
}

export default Img
