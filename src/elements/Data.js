import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import {space, width, fontSize, color} from 'styled-system'

const Data = styled('data', { shouldForwardProp })(
  space, width, fontSize, color, {}
)

Data.defaultProps = {}

export default Data
