import styled from "@emotion/styled"
import {
  space,
  width,
  display,
  flex,
  alignItems,
  justifyContent,
  fontSize,
  textAlign,
  color,
  borders,
  borderColor,
} from 'styled-system'

const Header = styled.header(
  space,
  width,
  display,
  flex,
  alignItems,
  justifyContent,
  fontSize,
  textAlign,
  color,
  borders,
  borderColor,
  {
    boxSizing: 'border-box',
  },
)

Header.defaultProps = {}

export default Header
