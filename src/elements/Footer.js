import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import {
  space,
  width,
  maxWidth,
  display,
  flex,
  alignItems,
  justifyContent,
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
} from 'styled-system'

const Footer = styled('footer', { shouldForwardProp })(
  space,
  width,
  maxWidth,
  display,
  flex,
  alignItems,
  justifyContent,
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
    boxSizing: 'border-box',
  },
)

Footer.defaultProps = {}

export default Footer
