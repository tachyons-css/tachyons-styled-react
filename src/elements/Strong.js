import styled from "@emotion/styled"
import {space, fontSize, fontWeight, color} from 'styled-system'

const Strong = styled.strong(space, fontSize, fontWeight, color, {})

Strong.defaultProps = {
  fontWeight: 'bolder',
}

export default Strong
