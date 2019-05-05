import styled from "@emotion/styled"
import {
  space,
  width,
  fontSize,
  fontWeight,
  lineHeight,
  borderRadius,
  color,
} from 'styled-system'

const Sup = styled.sup(space, fontSize, fontWeight, lineHeight, color, borderRadius, {})

Sup.defaultProps = {}

export default Sup
