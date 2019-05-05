import styled from "@emotion/styled"
import {
  space,
  width,
  fontSize,
  fontWeight,
  lineHeight,
  textStyle,
  color,
} from 'styled-system'

const Small = styled.small(
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
