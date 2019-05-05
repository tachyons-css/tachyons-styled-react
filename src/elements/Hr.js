import styled from "@emotion/styled"
import {
  space,
  width,
  maxWidth,
  color,
  borders,
  borderColor
} from "styled-system"

const Hr = styled.hr(space, width, maxWidth, color, borders, borderColor, {
  boxSizing: "border-box",
  height: 0,
  overflow: "visible"
})

Hr.defaultProps = {
  borderTop: "1px solid currentColor",
  borderBottom: "0px solid transparent"
}

export default Hr
