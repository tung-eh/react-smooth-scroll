import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react'

import Footer from './components/Footer'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Signin from './pages/Signin'

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/signin">
        <Signin />
      </Route>
      <Footer />
    </Router>
  )
}

export default App
