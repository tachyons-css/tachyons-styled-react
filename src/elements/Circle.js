import styled from "@emotion/styled"
import { color } from "styled-system"

const Circle = styled.circle(color, {
  boxSizing: "border-box"
})

Circle.defaultProps = {
  fill: "currentColor"
}

export default Circle
