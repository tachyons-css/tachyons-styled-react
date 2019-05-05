import React from 'react'
import * as components from './elements'

const elements = {}
Object.keys(components).forEach(key => {
  elements[key.toLowerCase()] = components[key]
})

export const jsx = (type, props, ...children) => {
  const el = elements[type] || type
  return React.createElement.apply(undefined, [
    el,
    props,
    ...children
  ])
}

export default jsx
