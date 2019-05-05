import styled from "@emotion/styled"
import {
  space,
  width,
  maxWidth,
  display,
  flex,
  flexWrap,
  alignItems,
  justifyContent,
  fontSize,
  textAlign,
  lineHeight,
  color,
  borders,
  borderColor,
  borderRadius,
} from 'styled-system'

const Article = styled.article(
  space,
  width,
  maxWidth,
  display,
  flex, 
  flexWrap,
  alignItems,
  justifyContent,
  fontSize,
  textAlign,
  lineHeight,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: 'border-box',
  },
)

Article.defaultProps = {
  width: 1,
}

export default Article
