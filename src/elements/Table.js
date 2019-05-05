import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import {space, width, maxWidth, fontSize, color} from 'styled-system'

const layout = props => ({
  tableLayout: props.layout ? props.layout : 'default',
})

const Table = styled('table', { shouldForwardProp })(
  space, 
  width, 
  maxWidth, 
  fontSize, 
  color, 
  layout, 
  {
    borderCollapse: 'collapse',
    cellSpacing: 0,
    cellPadding: 0,
  }
)

Table.defaultProps = {
  width: 1,
  layout: 'initial',
}

export default Table
