import styled from "@emotion/styled"
import {
  space,
  width,
  fontSize,
  fontWeight,
  lineHeight,
  color,
} from 'styled-system'

const Q = styled.q(space, width, fontSize, fontWeight, lineHeight, color, {})

Q.defaultProps = {}

export default Q
