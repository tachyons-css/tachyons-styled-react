import React from 'react'
import { ThemeProvider } from "emotion-theming"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import theme from './theme'

// import pages here 
import Styles from './pages/Styles'
import Home from './pages/Home'
import Playground from './pages/Playground'
import Components from './pages/Components'

import Div from './elements/Div'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Div style={{ fontFamily: theme.typefaces.sansSerif }}>
        <Router>
          <Route exact path='/' component={Home} />
          <Route path='/styles' component={Styles} />
          <Route path='/components' component={Components} />
          <Route path='/playground' component={Playground} />
        </Router>
      </Div>
    </ThemeProvider>
  );
}

export default App
