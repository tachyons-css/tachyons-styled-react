import styled from "@emotion/styled"
import { color } from "styled-system"

const Rect = styled.rect(color, {
  boxSizing: "border-box"
})

Rect.defaultProps = {
  fill: "currentColor"
}

export default Rect
