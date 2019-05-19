/** @jsx jsx */
import jsx from '../jsx'
import React from 'react'
import theme from '../theme'
import themeSyntax from '../theme-syntax'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

import Logo from '../components/Logo'
import Container from '../components/Container'
import Card from '../components/Card'

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
          <article>
            <h3>Card</h3>
          <LiveProvider theme={themeSyntax} scope={{ Card, jsx }} code={
            `
    <Card 
      title="Card Title"
      subtitle="An example of a card subtitle"
      text="Readers want what is important to be clearly laid out; they will not read what is too troublesome."
      image="https://mrmrs.cc/photos/u/015.jpg"
      tag="Category"
      link={{
        text: "Read more",
        href: "#0",
      }}
      maxWidth='32em'
    />

            `
          }>
  <LiveEditor />
  <LiveError />
  <div mt={3}>
    <LivePreview />
  </div>
</LiveProvider>
    </article>
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
