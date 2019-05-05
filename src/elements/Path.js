import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import { color } from 'styled-system'

const Path = styled('path', { shouldForwardProp })(
  color, 
  {
    boxSizing: 'border-box',
  }
)

Path.defaultProps = {
  fill: 'currentColor',
}

export default Path
