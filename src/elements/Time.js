import styled from "@emotion/styled"
import {
  space,
  width,
  display,
  fontSize,
  fontWeight,
  textAlign,
  color,
  borders,
  borderColor,
} from 'styled-system'

const Time = styled.time(
  space,
  width,
  display,
  fontSize,
  fontWeight,
  textAlign,
  color,
  borders,
  borderColor,
  {},
)

Time.defaultProps = {}

export default Time
