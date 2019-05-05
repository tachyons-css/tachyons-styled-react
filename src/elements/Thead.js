import styled from "@emotion/styled"
import { space, width, fontSize, color } from "styled-system"

const Thead = styled.thead(space, width, fontSize, color, {})

Thead.defaultProps = {
  width: 1
}

export default Thead
