import React from "react"
import theme from "../theme"
import Div from "../elements/Div"

const Container = ({ innerBg, innerWidth, ...props }) => {
  return (
    <Div {...props}>
      <Div mx="auto" maxWidth={innerWidth} bg={innerBg}>
        {props.children}
      </Div>
    </Div>
  )
}

Container.defaultProps = {
  innerWidth: theme.containerWidth? theme.containerWidth: '64rem',
  innerBg: "transparent"
}

export default Container
