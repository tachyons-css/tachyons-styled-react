import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"

import {
  space,
  width,
  maxWidth,
  display,
  alignItems,
  justifyContent,
  fontSize,
  fontWeight,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
  textStyle
} from "styled-system"

const BlockLinkGlow = styled('a', { shouldForwardProp })(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  fontWeight,
  textAlign,
  textStyle,
  color,
  alignItems,
  justifyContent,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: "border-box",
    textDecoration: "none",
    opacity: .75,
    transition: 'opacity .25s ease-in',
    ":hover": {
      cursor: "pointer",
      opacity: 1,
      transition: 'opacity .25s ease-in'
    }
  }
)

BlockLinkGlow.defaultProps = {
  display: "block",
  bg: "transparent",
  cursor: "pointer"
}

export default BlockLinkGlow
