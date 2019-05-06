import React from 'react'
import parseCombos from '../lib/parse-combos'
import theme from '../theme'

import Div from '../elements/Div'
import Section from '../elements/Section'
import Table from '../elements/Table'
import Tr from '../elements/Tr'
import Td from '../elements/Td'
import Header from '../elements/Header'
import H1 from '../elements/H1'
import H3 from '../elements/H3'
import H4 from '../elements/H4'
import H5 from '../elements/H5'
import P from '../elements/P'
import Span from '../elements/Span'
import Code from '../elements/Code'

import Logo from '../components/Logo'
import Container from '../components/Container'

const fontSizes = [ ...theme.fontSizes ]

function Styles() {
  return (
    <Div>
      <Header px={3} py={2} borderBottom='1px solid' borderColor='black-20'>
        <Div maxWidth='6rem' mx='auto'>
          <Logo color='rgba(0,0,0,.7)' />
        </Div>
      </Header>
      <Container>
        <Section p={4}>
          <H3>Typefaces</H3>
            {Object.keys(theme.typefaces).map((keyName, i) => (
              <Div mt={5} mb={6} key={keyName + i}>
                <H4 mt={0} mb={2} fontSize={4} textStyle='capitalize' lineHeight={1}>
                  {keyName === 'sansSerif'? 'Sans Serif':keyName}
                </H4>
                <Code display='block'  fontSize='14px' mt={0} mb={4}
                  pb={2}
                  borderBottom='1px solid black'
                >{theme.typefaces[keyName]}</Code>
                <Div fontFamily={theme.typefaces[keyName]} lineHeight={1} mt={0} fontSize={1}>
                  <Span fontSize={1} display='block'>27/9/19</Span>
                  <H3 fontWeight={700} my={3} fontSize={[5,6]}>An engaging headline</H3>
                  <P fontWeight={600} fontSize={[3,4]}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat.
                  </P>
                  <P fontWeight={400} fontSize={2}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor
                    sit amet.  Sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </P>
              </Div>
              </Div>
            ))}
        </Section>
        <Section px={4} py={5}>
          <H3>Type Scale</H3>
          <Div style={{overflowX: 'scroll'}}>
            {fontSizes.reverse().map((fontSize, i) => (
              <>
              <H5 fontWeight={800} mt={0} mb={0}>{fontSize}px <Span pl={3} fontWeight={500} color='black-70'>theme.fontSizes[{theme.fontSizes.length - i - 1}]</Span></H5>
              <P lineHeight={1} mt={0} mb={5} fontSize={theme.fontSizes.length - i - 1} fontWeight={700}>
                The quick brown fox jumped
              </P>
              </>
            ))}
          </Div>
        </Section>
        <Section px={4} py={5}>
          <H3>Leading</H3>
          {theme.lineHeights.map((lineHeight, i) => (
            <>
            <H5 fontWeight={800} mt={0} mb={2}>Line Height: {lineHeight}</H5>
            <P lineHeight={1} mt={0} mb={5} lineHeight={lineHeight} fontSize={3} fontWeight={600}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
              vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
              no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </P>
            </>
          ))}
        </Section>
        <Section px={[0,4]} py={5} style={{overflowX: 'scroll'}}>
          <H3 px={[4,0]}>Colors</H3>
          <Table>
            <tbody>
            {Object.keys(theme.colors).map((keyName, i) => (
              <Tr>
                <Td maxWidth={64} borderBottom='1px solid' borderColor={theme.colors[keyName]} py={1}>
                  <Div bg={theme.colors[keyName]} px={[3,4,5]} height='100%' pt={3} pb={4}> </Div>
                </Td>
                <Td borderBottom='1px solid' borderColor={theme.colors[keyName]} bg='white' color={theme.colors[keyName]} fontWeight={700} px={[2,3,4]} fontSize={[2,5,5]}>Aa</Td>
                <Td borderBottom='1px solid' borderColor={theme.colors[keyName]} px={[0,3]} fontWeight={700} fontSize={[1,2,3]}>{keyName}</Td>
                <Td borderBottom='1px solid' borderColor={theme.colors[keyName]} px={[0,3]} textAlign='right' bg='white' width='auto' fontSize={[0,1,1]}>{theme.colors[keyName]}</Td>
              </Tr>
            ))}
          </tbody>
          </Table>
        </Section>
        <Section py={5} px={4}>
          <H3>Spacing Scale</H3>
            <Div width='auto' position='relative' height='auto'>
              <Div>
                {theme.space.map((space, i) => (
                  <Div position='absolute' width={space+'px'} height={space+'px'} bg='black-20' mb={1}> </Div>
                ))}
              </Div>
          </Div>
        </Section>
        <Section mt={8} py={5} px={4}>
          <H3>Border Widths</H3>
          <Div position='relative'>
            {theme.borderWidths.map((borderWidth, i) => (
              <>
              <Div mb={3}>
                <Div border={borderWidth + ' solid black'} />
              </Div>
              </>
            ))}
          </Div>
        </Section>
        <Section py={5} px={4}>
          <H3>Border Radii</H3>
          <Div display='flex' mx={-3} maxWidth='100%' style={{overflowX: 'scroll'}}>
            {theme.radii.map((radius, i) => (
              <>
              <Div mb={3} px={3}>
                <Div borderRadius={radius} bg='black' width='auto' height='auto' p={5} />
                <P mt={0} mb={0} textAlign='center'>{radius}</P>
              </Div>
              </>
            ))}
          </Div>
        </Section>
      </Container>
    </Div>
  );
}

export default Styles
