/** @jsx jsx */
import jsx from '../jsx'
import React from 'react'

const Card = ({ image, title, subtitle, text, tag, link, ...props}) => {
  return (
    <article {...props}>
      <div position='relative'>
        {tag && 
          <div position='absolute' top={16} right={16} width='auto' px={2} py={1} borderRadius={1} bg='black-80' color='white' fontSize={0}>{tag} </div>
        }
        <img src={image} />

      </div>
      <div px={[3,4]} py={[3,4]}>
        {title && <h3 fontSize={3} mt={0} mb={1}>{title}</h3> }
        {subtitle && <h3 fontSize={1} mt={0} mb={2} lineHeight={1.25}>{subtitle}</h3> }
        {text && <p fontSize={1} my={0}>{text}</p> }
        {link && <a href={link.href} fontWeight={700} fontSize={1} color='blue' borderRadius={3} px={0} py={2} >{link.text}</a> }
      </div>
    </article>
  )
}

Card.defaultProps = {
  border: '1px solid',
  borderColor: 'black-10',
  borderRadius: 2,
  style: { overflow: 'hidden' },
}

export default Card
