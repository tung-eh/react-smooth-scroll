import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react'

import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
    </Router>
  )
}

export default App
