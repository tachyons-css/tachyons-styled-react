import React from 'react'
import theme from '../theme'

import Div from '../elements/Div'
import Section from '../elements/Section'
import Article from '../elements/Article'
import Main from '../elements/Main'
import Table from '../elements/Table'
import Tr from '../elements/Tr'
import Td from '../elements/Td'

import Header from '../elements/Header'
import Footer from '../elements/Footer'
import H1 from '../elements/H1'
import H2 from '../elements/H2'
import H3 from '../elements/H3'
import H4 from '../elements/H4'
import H5 from '../elements/H5'
import P from '../elements/P'
import A from '../elements/A'
import Span from '../elements/Span'
import Code from '../elements/Code'

import Logo from '../components/Logo'

function Home() {
  return (
    <Div>
      <Header px={4} py={2} borderBottom='1px solid' borderColor='black-20' display='flex' alignItems='center'>
        <Div maxWidth='6rem'>
          <Logo color='rgba(0,0,0,.7)' />
        </Div>
        <A ml='auto' fontSize={0} fontWeight={700} color='black' href='https://github.com/tachyons-css/tachyons-styled-react' title="GitHub">GitHub</A>
      </Header>
      <Main>
        <Div maxWidth='80em' mx='auto' width={1}>
          <Div p={[4,5,6]}>
            <H2 fontSize={[4,6,7]} mb={4}>Build, design, and style UI at the speed of light</H2>
            <H3 fontSize={[1,2,3]} textStyle='caps' color='black-80' mb={5}>Tachyons + Styled-system + Emotion + Create React App</H3>
            <A href='/styles' title="Styles and documentation" bg='dark-blue' color='white' borderRadius={2} py={2} px={4}>Styles &amp; Documentation</A>
          </Div>
        </Div>
      </Main>
    </Div>
  );
}

export default Home
