import React from 'react'
import { ThemeProvider } from "emotion-theming"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import theme from './theme'
import Styles from './pages/Styles'
import Div from './elements/Div'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Div style={{ fontFamily: theme.typefaces.sansSerif }}>
        <Router>
          <Route exact path='/' component={Styles} />
        </Router>
      </Div>
    </ThemeProvider>
  );
}

export default App
