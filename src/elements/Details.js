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

const Details = styled.details(
  space,
  display,
  width,
  fontSize,
  fontWeight,
  textAlign,
  color,
  {},
)

Details.defaultProps = {
  display: 'block',
}

export default Details
