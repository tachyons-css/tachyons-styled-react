import styled from "@emotion/styled"

import {
  space,
  width,
  height,
  maxWidth,
  position,
  top, 
  left,
  right,
  bottom,
  display,
  flex,
  flexWrap,
  alignItems,
  justifyContent,
  fontSize,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius
} from "styled-system"

const Div = styled.div(
  space,
  width,
  height,
  maxWidth,
  position,
  top, 
  left,
  right,
  bottom,
  display,
  flex,
  flexWrap,
  alignItems,
  justifyContent,
  fontSize,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: "border-box"
  }
)

Div.defaultProps = {
  width: 1,
  color: 'inherit'
}

export default Div
