import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import {space, width, fontSize, color} from 'styled-system'
import theme from '../theme'

const Var = styled('var', { shouldForwardProp })(
  space, width, fontSize, color, 
  {
  fontFamily: 'monaco, monospace',
})

Var.defaultProps = {}

export default Var
