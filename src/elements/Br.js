import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import {space, display} from 'styled-system'

const Br = styled('br', { shouldForwardProp })(space, display, {})

Br.defaultProps = {}

export default Br
