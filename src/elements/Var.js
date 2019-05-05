import styled from "@emotion/styled"
import {space, width, fontSize, color} from 'styled-system'
import theme from '../theme'

const Var = styled.var(space, width, fontSize, color, {
  fontFamily: 'monaco, monospace',
})

Var.defaultProps = {}

export default Var
