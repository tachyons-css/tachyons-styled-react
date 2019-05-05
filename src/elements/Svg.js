import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import {color, display, width, maxWidth, height} from 'styled-system'

const Svg = styled('svg', { shouldForwardProp })(
  color, display, width, maxWidth, height, 
  {
  boxSizing: 'border-box',
})

Svg.defaultProps = {
  fill: 'currentColor'
}

export default Svg
