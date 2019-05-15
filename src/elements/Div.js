import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"

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
  fontFamily,
  fontSize,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea
} from "styled-system"

const Div = styled('div', { shouldForwardProp })(
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
  fontFamily,
  fontSize,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
  {
    boxSizing: "border-box"
  }
)

Div.defaultProps = {
  width: 1,
  color: 'inherit'
}

export default Div
