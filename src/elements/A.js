import styled from "@emotion/styled"
import Link from "next/link"

import {
  space,
  width,
  maxWidth,
  display,
  alignItems,
  justifyContent,
  fontSize,
  fontWeight,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius
} from "styled-system"

const A = styled.a(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  fontWeight,
  textAlign,
  color,
  alignItems,
  justifyContent,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: "border-box",
    textDecoration: "none",
    ":hover": {
      cursor: "pointer"
    }
  }
)

A.defaultProps = {
  display: "inline-block",
  bg: "transparent",
  color: "gray.2",
  cursor: "pointer"
}

Link.defaultProps = {
  href: "#0"
}

export default ({ children, href, ...props }) => (
  <Link href={href}>
    <A {...props}>{children}</A>
  </Link>
)
