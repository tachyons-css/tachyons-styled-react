import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import theme from '../theme'
import {
  space,
  width,
  height,
  display,
  color,
  borders,
  borderColor,
  borderRadius,
} from 'styled-system'

const Progress = styled('progress', { shouldForwardProp })(
  space,
  width,
  height,
  display,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    overflow: 'hidden',
    webkitAppearance: 'none',
    appearance: 'none',
    '&[value]::-webkit-progress-bar': {
      backgroundColor: theme.colors.gray
    },
    '&[value]::-webkit-progress-value': {
      backgroundColor: theme.colors.blue
    },
    verticalAlign: 'top',
  },
)

Progress.defaultProps = {
  width: 1,
  height: 8,
  max: 100,
  value: 64
}

export default Progress
