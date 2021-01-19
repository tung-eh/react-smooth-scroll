import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react'

import Footer from './components/Footer'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Signin from './pages/Signin'

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Navbar />
        <Home />
        <Footer />
      </Route>
      <Route exact path="/signin">
        <Signin />
      </Route>
    </Router>
  )
}

export default App
