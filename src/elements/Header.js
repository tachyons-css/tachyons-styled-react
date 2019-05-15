import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
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

const Header = styled('header', { shouldForwardProp })(
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

Header.defaultProps = {}

export default Header
