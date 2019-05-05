import styled from "@emotion/styled"
import {
  space,
  display,
  width,
  fontSize,
  fontWeight,
  textAlign,
  color,
} from 'styled-system'

const Summary = styled.summary(
  space,
  display,
  width,
  fontSize,
  fontWeight,
  textAlign,
  color,
  {},
)

Summary.defaultProps = {}

export default Summary
