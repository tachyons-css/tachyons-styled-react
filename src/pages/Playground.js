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

import A from '../elements/A'
import Abbr from '../elements/Abbr'
import Address from '../elements/Address'
import Article from '../elements/Article'
import Aside from '../elements/Aside'
import B from '../elements/B'
import Br from '../elements/Br'
import Button from '../elements/Button'
import Cite from '../elements/Cite'
import Code from '../elements/Code'
import Data from '../elements/Data'
import Dd from '../elements/Dd'
import Details from '../elements/Details'
import Div from '../elements/Div'
import Dl from '../elements/Dl'
import Dt from '../elements/Dt'
import Em from '../elements/Em'
import Fieldset from '../elements/Fieldset'
import Footer from '../elements/Footer'
import Form from '../elements/Form'
import H1 from '../elements/H1'
import H2 from '../elements/H2'
import H3 from '../elements/H3'
import H4 from '../elements/H4'
import H5 from '../elements/H5'
import H6 from '../elements/H6'
import Header from '../elements/Header'
import Hr from '../elements/Hr'
import I from '../elements/I'
import Img from '../elements/Img'
import Input from '../elements/Input'
import InputCheckbox from '../elements/InputCheckbox'
import InputEmail from '../elements/InputEmail'
import InputFile from '../elements/InputFile'
import InputNumber from '../elements/InputNumber'
import InputPassword from '../elements/InputPassword'
import InputRadio from '../elements/InputRadio'
import InputSearch from '../elements/InputSearch'
import InputSubmit from '../elements/InputSubmit'
import InputTelephone from '../elements/InputTelephone'
import InputText from '../elements/InputText'
import InputUrl from '../elements/InputUrl'
import Kbd from '../elements/Kbd'
import Label from '../elements/Label'
import Legend from '../elements/Legend'
import Li from '../elements/Li'
import Main from '../elements/Main'
import Nav from '../elements/Nav'
import Ol from '../elements/Ol'
import P from '../elements/P'
import Path from '../elements/Path'
import Pre from '../elements/Pre'
import Progress from '../elements/Progress'
import Q from '../elements/Q'
import S from '../elements/S'
import Samp from '../elements/Samp'
import Section from '../elements/Section'
import Select from '../elements/Select'
import Small from '../elements/Small'
import Span from '../elements/Span'
import Strong from '../elements/Strong'
import Sub from '../elements/Sub'
import Summary from '../elements/Summary'
import Sup from '../elements/Sup'
import Svg from '../elements/Svg'
import Table from '../elements/Table'
import Tbody from '../elements/Tbody'
import Td from '../elements/Td'
import Textarea from '../elements/Textarea'
import Tfoot from '../elements/Tfoot'
import Th from '../elements/Th'
import Thead from '../elements/Thead'
import Time from '../elements/Time'
import Tr from '../elements/Tr'
import U from '../elements/U'
import Ul from '../elements/Ul'
import Var from '../elements/Var'


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
          <article>
            <LiveProvider theme={themeSyntax} scope={{ A, Abbr, Address, Article, Aside, B, Br, Button, Cite, Code, Data, Dd, Details, Div, Dl, Dt, Em, Fieldset, Footer, Form, H1, H2, H3, H4, H5, H6, Header, Hr, I, Img, Input, InputCheckbox, InputEmail, InputFile, InputNumber, InputPassword, InputRadio, InputSearch, InputSubmit, InputTelephone, InputText, InputUrl, Kbd, Label, Legend, Li, Main, Nav, Ol, P, Path, Pre, Progress, Q, S, Samp, Section, Select, Small, Span, Strong, Sub, Summary, Sup, Svg, Table, Tbody, Td, Textarea, Tfoot, Th, Thead, Time, Tr, U, Ul, Var }} code={
            `
  <Div>
    <Section mx='auto' maxWidth='128rem'>
    <Header py={6} px={[4,5]} color='white' bg='purple'>
      <H2 mt={0} mb={2} fontSize={[2,2,3]} textStyle='caps'>Experiment with semantic markup + css-in-js</H2>
      <H1 mt={0} mb={4} fontSize={[3,5,8]}>The Playground</H1>
      <P fontSize={3}>If you've wanted to try out emotion, react, and styled-system this playground is for you. Find the code editor at the bottom of the page. You can use any html element, but to use styled-system styling props you must capitalize the elements e.g. h1 => H1.</P>
    </Header>

    <Section display='flex' px={[4,5]} py={4} flexWrap='wrap' mx={-3}>
    <Div width={[1, 1/3]} px={3}>
      <Article borderRadius={2} overflow='hidden' border='1px solid' borderColor='black-10'>
        <Div position='relative'>
          <Div position='absolute' top={16} right={16} width='auto' px={2} py={1} borderRadius={1} bg='black-80' color='white' fontSize={0}>
            <P my={0} lineHeight='1.0'>Category Label</P>
          </Div>
          <Img src='https://mrmrs.cc/photos/u/002.jpg' />
        </Div>
        <Div px={[3,4]} py={[3,4]}>
          <H3 fontSize={3} mt={0} mb={1}>The main title content</H3>
          <H4 fontSize={1} mt={0} mb={2} lineHeight={1.25}>A sample subtitle example</H4> 
          <P fontSize={1} my={0}>Readers want what is important to be clearly laid out; they will not read what is too troublesome.</P> 
          <A href='#0' fontWeight={700} fontSize={1} color='blue' borderRadius={3} px={0} py={2} >Read More</A> 
        </Div>
      </Article>
    </Div>
    <Div width={[1, 1/3]} px={3}>
      <Article borderRadius={2} overflow='hidden' border='1px solid' borderColor='black-10'>
        <Div position='relative'>
          <Div position='absolute' top={16} right={16} width='auto' px={2} py={1} borderRadius={1} bg='black-80' color='white' fontSize={0}>Category Label </Div>
          <Img src='https://mrmrs.cc/photos/u/003.jpg' />

        </Div>
        <Div px={[3,4]} py={[3,4]}>
          <H3 fontSize={3} mt={0} mb={1}>The main title content</H3>
          <H4 fontSize={1} mt={0} mb={2} lineHeight={1.25}>A sample subtitle example</H4> 
          <P fontSize={1} my={0}>Readers want what is important to be clearly laid out; they will not read what is too troublesome.</P> 
          <A href='#0' fontWeight={700} fontSize={1} color='blue' borderRadius={3} px={0} py={2} >Read More</A> 
        </Div>
      </Article>
    </Div>
    <Div width={[1, 1/3]} px={3}>
      <Article borderRadius={2} overflow='hidden' border='1px solid' borderColor='black-10'>
        <Div position='relative'>
          <Div position='absolute' top={16} right={16} width='auto' px={2} py={1} borderRadius={1} bg='black-80' color='white' fontSize={0}>Category Label </Div>
          <Img src='https://mrmrs.cc/photos/u/004.jpg' />

        </Div>
        <Div px={[3,4]} py={[3,4]}>
          <H3 fontSize={3} mt={0} mb={1}>The main title content</H3>
          <H4 fontSize={1} mt={0} mb={2} lineHeight={1.25}>A sample subtitle example</H4> 
          <P fontSize={1} my={0}>Readers want what is important to be clearly laid out; they will not read what is too troublesome.</P> 
          <A href='#0' fontWeight={700} fontSize={1} color='blue' borderRadius={3} px={0} py={2} >Read More</A> 
        </Div>
      </Article>
    </Div>
    </Section>
    </Section>
  </Div>
            `
          }>
  <div>
    <LivePreview />
  </div>
  <LiveEditor />
  <LiveError />
</LiveProvider>
    </article>
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
