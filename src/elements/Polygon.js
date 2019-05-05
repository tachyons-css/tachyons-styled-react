import styled from "@emotion/styled"
import { color } from "styled-system"

const Polygon = styled.polygon(color, {
  boxSizing: "border-box"
})

Polygon.defaultProps = {
  fill: "currentColor"
}

export default Polygon
