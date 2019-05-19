/** @jsx jsx */
import jsx from '../jsx'
import React from 'react'
import theme from '../theme'

import Logo from '../components/Logo'
import Container from '../components/Container'

function Home() {
  return (
    <div>
      <header px={4} py={2} borderBottom='1px solid' borderColor='black-20' display='flex' alignItems='center'>
        <div maxWidth='6rem'>
          <a display='block' href='/'><Logo color='rgba(0,0,0,.7)' /></a>
        </div>
        <a ml='auto' mr={3} fontSize={0} fontWeight={700} color='black' href='/components' title="Components">Components </a>
        <a fontSize={0} mr={3} fontWeight={700} color='black' href='/styles' title="Styles">Styles</a>
        <a fontSize={0} mr={3} fontWeight={700} color='black' href='/playground' title="Playground">Playground</a>
        <a fontSize={0} fontWeight={700} color='black' href='https://github.com/tachyons-css/tachyons-styled-react' title="GitHub">GitHub</a>
      </header>
      <main>
        <Container pt={[5,6]} pb={[5,6,7]} px={4}>
          <h2 fontSize={[3,6,7]} mb={4} mt={0}>Build, design, and style UI at the speed of light</h2>
          <h3 fontSize={[1,2,3]} lineHeight={1.25} textStyle='caps' color='black-80' mb={5}>
            <span display={['block', 'inline']}>Tachyons + </span>
            <span display={['block', 'inline']}>Styled-system + </span>
            <span display={['block', 'inline']}>Emotion + </span>
            <span display={['block', 'inline']}>Create React App</span>
          </h3>
          <a href='/styles' title="Styles and documentation"
             bg='dark-blue' color='white' borderRadius={2} py={3} px={4} fontSize={[1]} fontWeight={700}>
            Styles &amp; Documentation
          </a>
        </Container>
      </main>
      <footer borderTop='1px solid' borderColor='black-20' px={4} py={4} display='flex'>
        <div>
          <a color='black' py={1} fontWeight={700} href='https://tachyons.io' title='Tachyons' >Tachyons</a><br/>
          <a color='black' py={1} fontWeight={700} href='https://tachyons.io/docs' title='Tachyons Docs' >Docs</a><br/>
          <a color='black' py={1} fontWeight={700} href='https://github.com/tachyons-css/generator' title='Tachyons' >Generator</a><br />
        </div>
        <div ml='auto' width={144}>
          <a color='black' py={1} fontWeight={700} href='https://opencollective.com/tachyons' title='Tachyons' >Open Collective</a><br />
          <a color='black' py={1} fontWeight={700} href='https://github.com/tachyons-css' title='Tachyons' >GitHub</a><br />
          <a color='black' py={1} fontWeight={700} href='https://twitter.com/tachyons_css' title='Tachyons' >Twitter</a>
        </div>
      </footer>
    </div>
  );
}

export default Home
