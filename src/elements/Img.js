import styled from "@emotion/styled"

import {
  space,
  display,
  width,
  maxWidth,
  color,
  borders,
  borderColor,
  borderRadius,
} from 'styled-system'

const Img = styled.img(
  space,
  display,
  width,
  maxWidth,
  color,
  borders,
  borderColor,
  borderRadius,
  {

  },
)

Img.defaultProps = {
  width: 1,
  display: 'block',
  maxWidth: '100%',
  border: '0 none transparent'
}

export default Img
