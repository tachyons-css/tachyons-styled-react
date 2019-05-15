/** @jsx jsx */
import jsx from '../jsx'
import React from 'react'
import theme from '../theme'

import Logo from '../components/Logo'
import Container from '../components/Container'

const fontSizes = [ ...theme.fontSizes ]

function Styles() {
  return (
    <div>
      <header px={3} py={2} borderBottom='1px solid' borderColor='black-20'>
        <div maxWidth='6rem' mx='auto'>
          <Logo color='rgba(0,0,0,.7)' />
        </div>
      </header>
      <Container>
        <section p={4}>
          <h3>Typefaces</h3>
            {Object.keys(theme.typefaces).map((keyName, i) => (
              <div mt={5} mb={6}>
                <h4 mt={0} mb={2} fontSize={4} textStyle='capitalize' lineHeight={1}>
                  {keyName === 'sansSerif'? 'Sans Serif':keyName}
                </h4>
                <code display='block'  fontSize='14px' mt={0} mb={4}
                  pb={2}
                  borderBottom='1px solid black'
                >{theme.typefaces[keyName]}</code>
                <div style={{ fontFamily: theme.typefaces[keyName] }} lineHeight={1} mt={0} fontSize={1}>
                  <span fontSize={1} display='block'>27/9/19</span>
                  <h3 fontWeight={700} my={3} fontSize={[5,6]}>An engaging headline</h3>
                  <p fontWeight={600} fontSize={[3,4]}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat.
                  </p>
                  <p fontWeight={400} fontSize={2}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor
                    sit amet.  Sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
              </div>
              </div>
            ))}
        </section>
        <section px={4} py={5}>
          <h3>Type Scale</h3>
          <div style={{overflowX: 'scroll'}}>
            {fontSizes.reverse().map((fontSize, i) => (
              <>
              <h5 fontWeight={800} mt={0} mb={0}>{fontSize}px <span pl={3} fontWeight={500} color='black-70'>theme.fontSizes[{theme.fontSizes.length - i - 1}]</span></h5>
              <p lineHeight={1} mt={0} mb={5} fontSize={theme.fontSizes.length - i - 1} fontWeight={700}>
                The quick brown fox jumped
              </p>
              </>
            ))}
          </div>
        </section>
        <section px={4} py={5}>
          <h3>Leading</h3>
          <div display={['block', 'flex']} mx={[0,-3]}>
          {theme.lineHeights.map((lineHeight, i) => (
            <div width={[1,1/3]} px={[0,3]} key={i+lineHeight}>
              <h5 fontWeight={800} mt={0} mb={2}>Line Height: {lineHeight}</h5>
              <p lineHeight={lineHeight} mt={4} mb={0} fontSize={3} fontWeight={600}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
              </p> 
              <p fontSize={2} mb={5} mt={2} lineHeight={lineHeight}>
                At
                vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
          ))}
          </div>
        </section>
        <section px={[0,4]} py={5} style={{overflowX: 'scroll'}}>
          <h3 px={[4,0]}>Colors</h3>
          <table>
            {Object.keys(theme.colors).map((keyName, i) => (
              <tr>
                <td maxWidth={64} borderBottom='1px solid' borderColor={theme.colors[keyName]} py={1}>
                  <div bg={theme.colors[keyName]} px={[3,4,5]} height='100%' pt={3} pb={4}> </div>
                </td>
                <td borderBottom='1px solid' borderColor={theme.colors[keyName]} bg='white' color={theme.colors[keyName]} fontWeight={700} px={[2,3,4]} fontSize={[2,5,5]}>Aa</td>
                <td borderBottom='1px solid' borderColor={theme.colors[keyName]} px={[0,3]} fontWeight={700} fontSize={[1,2,3]}>{keyName}</td>
                <td borderBottom='1px solid' borderColor={theme.colors[keyName]} px={[0,3]} textAlign='right' bg='white' width='auto' fontSize={[0,1,1]}>{theme.colors[keyName]}</td>
              </tr>
            ))}
          </table>
        </section>
        <section py={5} px={4}>
          <h3>Spacing Scale</h3>
          <div  style={{overflowX: 'scroll'}}>
            <div width='auto' position='relative' height={theme.space[theme.space.length - 1]}>
              <div>
                {theme.space.map((space, i) => (
                  <div position='absolute' width={space} height={space} bg='black-20'> </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section mt={8} py={5} px={4}>
          <h3>Border Widths</h3>
          <div position='relative'>
            {theme.borderWidths.map((borderWidth, i) => (
              <>
              <div mb={3}>
                <div border={borderWidth + ' solid black'} />
              </div>
              </>
            ))}
          </div>
        </section>
        <section py={5} px={4}>
          <h3>Border Radii</h3>
          <div display='flex' mx={-3} maxWidth='100%' style={{overflowX: 'scroll'}}>
            {theme.radii.map((radius, i) => (
              <>
              <div mb={3} px={3}>
                <div borderRadius={radius} bg='black' width='auto' height='auto' p={5} />
                <p mt={0} mb={0} textAlign='center'>{radius}</p>
              </div>
              </>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}

export default Styles
