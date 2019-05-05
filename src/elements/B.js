import styled from "@emotion/styled"
import {space, width, display, fontSize, fontWeight, color} from 'styled-system'

const B = styled.b(space, width, display, fontSize, fontWeight, color, {})

B.defaultProps = {
  fontWeight: 'bolder',
}

export default B
