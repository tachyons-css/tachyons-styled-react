import styled from "@emotion/styled"
import {
  space,
  width,
  maxWidth,
  display,
  fontSize,
  color,
  borders,
  borderColor,
  borderRadius,
} from 'styled-system'

const Main = styled.main(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: 'border-box',
  },
)

Main.defaultProps = {
  width: 1,
}

export default Main
